const menu = [
  {
    path: '',
    label: 'Sabong',
    sub: [
      { path: '/<lang>/sabong-pattern', label: 'Pattern', sub: [] },
      { path: '/<lang>/sabong-guide', label: 'Guide', sub: [] }
    ]
  },
  {
    path: '',
    label: 'Civara',
    sub: [
      { path: '/<lang>/civara-pattern', label: 'Pattern', sub: [] },
      { path: '/<lang>/civara-guide', label: 'Guide', sub: [] }
    ]
  },
  {
    path: '',
    label: 'Sanghati',
    sub: [
      { path: '/<lang>/sanghati-pattern', label: 'Pattern', sub: [] },
      { path: '/<lang>/sanghati-guide', label: 'Guide', sub: [] }
    ]
  },
  {
    path: '',
    label: 'Misc',
    sub: [
      { path: '/<lang>/borders', label: 'Borders', sub: [] },
      { path: '/<lang>/tags', label: 'Tag Knots', sub: [] },
      { path: '/<lang>/pdf', label: 'PDF', sub: [] }
    ]
  },
  {
    path: '',
    label: 'Notes',
    sub: [
      { path: '/<lang>/templates', label: 'Templates', sub: [] },
      { path: '/<lang>/dyeing', label: 'Dyeing Manual', sub: [] },
      { path: '/<lang>/tools', label: 'Tools Checklist', sub: [] }
    ]
  }
];

export const state = () => ({
  items: menu
});
