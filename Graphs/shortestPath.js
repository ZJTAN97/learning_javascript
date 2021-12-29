const shortestPath = (edges, nodeA, nodeB) => {

}


const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge ;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
    }

}