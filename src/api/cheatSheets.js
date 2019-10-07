const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

if (!REACT_APP_API_URL) {
  throw Error("Please set process.env.REACT_APP_API_URL");
}

function fetchCheatSheets() {
  return fetch(`${REACT_APP_API_URL}/cheatSheets`).then(response =>
    response.json()
  );
}

export async function getGroupedCheatSheets() {
  const cheatSheets = await fetchCheatSheets();
  const groups = cheatSheets.reduce((acc, current) => {
    acc[current.category] = [current, ...(acc[current.category] || [])];
    return acc;
  }, {});
  return groups;
}
