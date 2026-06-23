import { canConnect } from "./canConnect";

export function buildGraph(fragments) {
  const graph = new Map();

  fragments.forEach((fragment) => {
    graph.set(fragment, []);
  });

  fragments.forEach((currentFragment) => {
    fragments.forEach((nextFragment) => {
      if (
        currentFragment !== nextFragment &&
        canConnect(currentFragment, nextFragment)
      ) {
        graph.get(currentFragment).push(nextFragment);
      }
    });
  });

  return graph;
}
