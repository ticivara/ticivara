import Markdown from '@nuxt/markdown';

const appHelpers = (_context, inject) => {
  const md = new Markdown({ toc: true, sanitize: false });

  const mdParse = (text) => {
    // First 26 characters of text are the type identifier
    // data:text/markdown;base64,...
    let mdtext = atob(text.substring(26));

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
    const s = atob(text.substring(26));
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
