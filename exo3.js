console.log(dice())

function dice() {

    let array = []

    for (let i = 0; i < 3; i++) {
        array.push(oneOrTwo())
    }

    let val = array.join('')

    switch (val) {
        case '111':
            val = 1
            break
        case '112':
            val = 2
            break
        case '121':
            val = 3
            break
        case '122':
            val = 4
            break
        case '211':
            val = 5
            break
        case '212':
            val = 6
            break
        default:
            val = dice() 
    }

    return val
}


function oneOrTwo() {
    return Math.floor((Math.random() * 2) + 1);
}

