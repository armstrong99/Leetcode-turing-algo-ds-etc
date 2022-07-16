const balancedForest = (
  c = [15, 12, 8, 14, 13],
  edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [4, 5],
  ]
) => {

  const nodes = c.map((cost) => ({
    cost,
    adj: [],
    visited: false,
    solved: false
  }));

  for (let [a, b] of edges) {

    nodes[a - 1].adj.push(b - 1);

    nodes[b - 1].adj.push(a - 1);  

  }

  console.log(nodes);

  const dfs = (n = nodes) => {
   
   if (n.visited) return 0;

    n.visited = true;

    for (let a of n.adj) 
       n.cost += dfs(nodes[a]);
    return n.cost;

  };
  const sum = dfs(nodes[0]);

  console.log(sum, nodes)

};

balancedForest();

const depthfs = () => {

}
