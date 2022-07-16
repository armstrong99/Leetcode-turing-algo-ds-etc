console.log(
  ((
    a = [
      [1, 2],
      [1, 3],
      [3, 4],
      [4, 5],
      [4, 6],
    ],
    start = 1
  ) => {
    //create graph
    let graph = {};
    let set_nodes = new Set();

    for (let j = 0; j < a.length; j++) {
      let edge = a[j];

      if (!graph[edge[0]]) {
        graph[edge[0]] = [edge[1]];
        if (edge[0] !== start) {
          set_nodes.add(edge[0]);
        }
        if (edge[1] !== start) {
          set_nodes.add(edge[1]);
        }
      } else {
        if (edge[0] !== start) {
          set_nodes.add(edge[0]);
        }
        if (edge[1] !== start) {
          set_nodes.add(edge[1]);
        }
        let data = graph[edge[0]];
        graph[edge[0]] = [...data, edge[1]];
      }
    }

    function bfs(start = 1, target = 4, graph) {
    
        let result = [];

      let que = [start];

      let track = {};

      let path = 0;

      while (que.length) {
        let elem = que.shift();

        let adjChild = graph[elem];

        if (elem === target) {
          console.log(`found target: -> ${target}`);

          let parent = track[target];

          while (parent) {
            path += 6;

            parent = track[parent];
          }

          return path;
        }

        if (adjChild && adjChild.length) {
          for (const k of adjChild) {
            track[k] = elem;
          }
          que.push(...adjChild);
        }
      }

      console.log("track", track);

      return path;
    }

    let res_arr = [];

    let nodesArr = [...set_nodes];

    for (let k = 0; k < nodesArr.length; k++) {
      res_arr.push(bfs(start, nodesArr[k], graph));
    }

    return res_arr;

  })()

);
