const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [ a, b ] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};



const edges = [
    [0, 1],
    [1, 2],
    [1, 6],
    [2, 3],
    [2, 4],
    [2, 9],
    [4, 5],
    [6, 7],
    [6, 8],
]

const graph = buildGraph(edges);

const longestPath = (graph) => {

    let longest = 0;

    const dfs = (graph, src, visited) => {

        let vals = [];
        let currSum = 0;

        if(visited.has(src)) {
            return 0;
        }
        visited.add(src);

        for(let neighbor of graph[src]) {
            const val = dfs(graph, neighbor, visited);
            vals.push(val);
            currSum += val;
        }
        
        longest = Math.max(longest, currSum);
        return 1 + vals.reduce((a,b) => Math.max(a, b), -Infinity);
        
    };
    

    dfs(graph, 0, new Set());

    console.log(longest);

}


longestPath(graph, 0, new Set())