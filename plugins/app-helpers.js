import Markdown from '@nuxt/markdown';

import all from 'mdast-util-to-hast/lib/all';
import normalize from 'mdurl/encode';

function linkHandler(h, node) {
  const url = normalize(node.url);
  const props = {};

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }

  props.href = url;
  const tagName = 'a';

  return h(node, tagName, props, all(h, node));
}

function decode_base64(text) {
  // First characters of text may be the type identifier
  // data:text/markdown;charset=utf-8;base64,...
  if (text.startsWith('data:')) {
    const needle = 'base64,';
    const pos_needle_end = text.indexOf(needle) + needle.length;
    text = text.substring(pos_needle_end);
  }
  return Buffer.from(text, 'base64').toString('utf-8');
}

const appHelpers = (_context, inject) => {
  const md = new Markdown({
    toc: true,
    sanitize: false,
    // override the default link handler, which returns <nuxt-link></nuxt-link>
    // instead of <a></a>
    handlers: {
      link: linkHandler
    }
  });

  const mdParse = (text) => {
    let mdtext = decode_base64(text);

    // Find the lvl1 page title.
    let title = '';
    const m = mdtext.match(/^# (.*)$/m);
    if (m != null && m.length > 1) {
      title = m[1];
    }

    // Remove the page title before converting to HTML.
    mdtext = mdtext.replace(/^# (.*)\n/, '');

    const ret = md.toMarkup(mdtext).then((res) => {
      return {
        title,
        htmlContent: res.html,
        toc: res.toc
      };
    });

    return ret;
  };

  const mdTitle = (text) => {
    const s = decode_base64(text);
    const m = s.match(/^# (.*)$/m);
    if (m != null && m.length > 1) {
      return m[1];
    } else {
      return '';
    }
  };

  inject('mdParse', mdParse);
  inject('mdTitle', mdTitle);
};

export default appHelpers;
