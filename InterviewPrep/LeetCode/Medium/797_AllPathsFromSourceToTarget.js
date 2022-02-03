/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 const allPathsSourceTarget = function(graph) {

    const target = graph.length - 1;
    const result = [];

    const dfs = (graph, src, path) => {

        if(path[path.length-1] === target) {
            result.push(path.slice());
            return;
        }

        for(let neighbor of graph[src]) {
            path.push(neighbor);
            dfs(graph, neighbor, path);
            path.pop();
        }
    }

    dfs(graph, 0, [0]);
    console.log(result);
    return result;
};


const input = [[1,2], [3], [3], []];
const input2 = [[4,3,1], [3,2,4], [3], [4], []];


// allPathsSourceTarget(input);
allPathsSourceTarget(input2);