const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    // we use set because its operations are O(1) in time.
    return hasPath(graph, nodeA, nodeB, new Set());
}

// depth first search (recursive)
const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if(visited.has(src)) return false;
    visited.add(src);
    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dst, visited) === true) return true;
    }
    return false;
}


// this converts edge lists to adjacency lists
const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [ a, b ] = edge;
        // initialize a or b in the graph if its not in the object
        if(!(a in graph)) graph[a] = []; 
        if(!(b in graph)) graph[b] = [];
         // undicted graph thus need to push into each others array
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

console.log(undirectedPath(edges, 'j', 'm'));