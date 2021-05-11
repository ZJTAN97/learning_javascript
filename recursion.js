function pow(x,n) {
    if (n==1) {
        return x
    } else {
        return x* pow(x, n-1)
    }
}

console.log(pow(2,4))

// Recursion is a programming pattern that helps in situations where a task
// can be naturally split in to several tasks of the same kind, but simpler