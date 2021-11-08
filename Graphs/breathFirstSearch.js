
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


breathFirstPrint(graph, 'a')

