export function findLongestPath(node, graph, visited = new Set()) {
  const currentVisited = new Set(visited);
  currentVisited.add(node);

  const children = graph.get(node) || [];
  const availableChildren = children.filter(
    (child) => !currentVisited.has(child),
  );

  if (availableChildren.length === 0) {
    return [node];
  }

  let longestPath = [];

  availableChildren.forEach((child) => {
    const currentPath = findLongestPath(child, graph, currentVisited);

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
