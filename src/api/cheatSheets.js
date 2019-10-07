const cheatSheets = [
  {
    category: "css",
    title: "Positions",
    introduction: "Positions are good, positions are fine.",
    code: `display: position;
z-index: 1;`
  },
  {
    category: "css",
    title: "Flexbox",
    introduction: "Flex is best!",
    code: `display: flex;
align-items: center;`
  },
  {
    category: "js",
    title: "fetch",
    introduction: "fetch an api",
    code: `fetch(url).then(response => response.json());`
  }
];

export function getGroupedCheatSheets() {
  const groups = cheatSheets.reduce((acc, current) => {
    acc[current.category] = [current, ...(acc[current.category] || [])];
    return acc;
  }, {});
  return groups;
}
