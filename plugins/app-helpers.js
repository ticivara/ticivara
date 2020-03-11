import Markdown from '@nuxt/markdown';
import { Base64 } from 'js-base64';

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
    // First 26 characters of text are the type identifier
    // data:text/markdown;base64,...
    // NOTE: atob() can't decode utf8 (Thai)
    let mdtext = Base64.decode(text.substring(26));

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
    const s = Base64.decode(text.substring(26));
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
