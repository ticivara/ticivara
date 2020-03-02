import Markdown from '@nuxt/markdown'

const appHelpers = (_context, inject) => {
  const md = new Markdown({ toc: false, sanitize: false })

  const mdParse = (text) => {
    // First 26 characters are the type identifier
    // data:text/markdown;base64,...

    // Returns a Promise.
    return md.toMarkup(atob(text.substring(26)))
  }

  inject('mdParse', mdParse)
}

export default appHelpers
