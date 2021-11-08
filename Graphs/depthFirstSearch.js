// Iterative solution
const depthFirstPrint = (graph, source ) => {

    const stack = [ source ]; // make it an array to make use pop and push like a stack

    while (stack.length > 0) {
        const current = stack.pop(); // stack remove the top item
        console.log(current)
        // e.g. current = 'a'
        // graph[current] = ['b', 'c']
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }    
}


// Recursive solution
const depthFirstPrintRecursive = (graph, source) => {
    console.log(source)
    // no explicit base case
    // handled by an "empty array" which cannot be iterated
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor)
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

depthFirstPrint(graph, 'a') // acebdf
console.log('----')
depthFirstPrintRecursive(graph, 'a')