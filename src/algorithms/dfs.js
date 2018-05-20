export default function dfs(graph, root) {
  const visited = []

  const visit = (graph, root) => {
    visited.push(root)

    for(let i = 0; i < graph[root].length; i++) {
      if (graph[root][i] === 1 && visited.indexOf(i) === -1) {
        visit(graph, i)
      }
    }
  }

  return visit(graph, root)
}
