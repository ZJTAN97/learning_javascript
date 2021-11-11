
const breathFirstPrint = (graph, source) => {
    const queue = [ source ]; // using shift and push will cause an array to act like a queue
    while (queue.length > 0) {
        const current = queue.shift()
        // e.g. current = 'a'
        // graph[current] = ['b', 'c']
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};



// this has cyclic nodes... (From Java examples)
// to guard against cyclic shit, look at undirectedPath.js
const graph2 = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}


breathFirstPrint(graph, 'a')
breathFirstPrint(graph2, 2)

