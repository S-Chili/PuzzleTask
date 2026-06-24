export function findLongestPath(node, graph) {
  const children = graph.get(node);

  if (children.length === 0) {
    return [node];
  }

  let longestPath = [];

  children.forEach((child) => {
    const currentPath = findLongestPath(child, graph);
    if (currentPath.length > longestPath.length) {
      longestPath = currentPath;
    }
  });

  return [node, ...longestPath];
}

export function findBestPath(graph) {
  let bestPath = [];

  graph.forEach((_, node) => {
    const path = findLongestPath(node, graph);

    if (path.length > bestPath.length) {
      bestPath = path;
    }
  });

  return bestPath;
}
