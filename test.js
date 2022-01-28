function foo() {
    console.log(1);

    setTimeout(() => console.log(2), 0);

    const promise = new Promise(() => console.log(3));

    promise.then((item) => console.log(item));

    console.log(4);

}



foo()