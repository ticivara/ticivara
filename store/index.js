export const state = () => ({
  lang: 'english'
});

export const mutations = {
  setLangFromPath(state, path) {
    if (path.startsWith('/en/')) {
      state.lang = 'english';
    } else if (path.startsWith('/th/')) {
      state.lang = 'thai';
    }
  },

  setLangEnglish(state) {
    state.lang = 'english';
  },

  setLangThai(state) {
    state.lang = 'thai';
  }
};
