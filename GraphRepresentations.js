// three ways to build a graph

// Edge list -> connections
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// adjacent list
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// adjacent matrix 0s and 1s to indicate whether node X has a connection to node Y, 0 means no, 1 means yes
// if you have a weighted graph, you can add weights here instead of 1 and 0s
const graph3 = {
  0: [0, 0, 1, 0], // node 0 is connected to 2
  1: [0, 0, 1, 1], // node 1 is connected to 2 and 3
  2: [1, 1, 0, 1], // node 2 is connected to 0, 1, 3
  3: [0, 1, 1, 0], // node 3 is connected to 1 and 2
};
