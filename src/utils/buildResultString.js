export function buildResultString(path) {
  if (path.length === 0) {
    return "";
  }
  const string =
    path[0] +
    path
      .slice(1)
      .map((fragment) => fragment.slice(2))
      .join("");

  return string;
}
