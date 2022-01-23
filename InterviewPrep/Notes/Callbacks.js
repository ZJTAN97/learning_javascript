function callback1() {
    // console.log('call back 1')
    setTimeout(() => {
        console.log('call back 1')
    }, 100)
    callback2()   
}



function callback2() {
    console.log('call back 2')
    callback3()
    
}


function callback3() {
    console.log('call back 3')
}



callback1();