const demodam = require('@conductionnl/demodam-design-tokens/src/config.json');


const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const themes = [
  demodam,
]
  .map(({ cdn, name, fullName, prefix, npm }) => ({
    className: `${prefix}-theme`,
    title: fullName || name,
    href: cdn || `https://unpkg.com/${npm}/dist/index.css`,
  }))
  .sort((a, b) => stringSort(a.name, b.name));

console.log(JSON.stringify(themes, null, '  '));
