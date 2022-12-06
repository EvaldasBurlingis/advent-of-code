const { clear } = require('console');
let fs = require('fs')
let readline = require('readline')

async function part1() {
    const fileStream = fs.createReadStream('day4/input.txt')
    let score = 0

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const arr = line.split(',').map(item => item.split('-'))

        if (arr[0][0] === arr[0][1]) {
            if (parseInt(arr[0][0]) >= parseInt(arr[1][0]) && parseInt(arr[0][0]) <= parseInt(arr[1][1])) {
                score++
                console.log(arr)

            }
        } else if (arr[1][0] === arr[1][1]) {
            if (parseInt(arr[1][0]) >= parseInt(arr[0][0]) && parseInt(arr[1][0]) <= parseInt(arr[0][1])) {
                score++
                console.log(arr)
            }
        } else if (Number(arr[0][0]) <= Number(arr[1][0]) && Number(arr[0][1]) >= Number(arr[1][1])) {
            score++
            console.log(arr)
        } else if (Number(arr[0][0]) >= Number(arr[1][0]) && Number(arr[0][1]) <= Number(arr[1][1])) {
            score++
            console.log(arr)
        }

    }

    console.log(score)
}

async function part2() {
    const fileStream = fs.createReadStream('day4/input.txt')
    let score = 0

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const arr = line.split(',').map(item => item.split('-'))

        if (Number(arr[0][1]) >= Number(arr[1][0]) && Number(arr[0][0]) <= Number(arr[1][1])) {
            score++
            console.log(arr)
        }
    }

    // 555 too low
    // 951 too high
    console.log(score)
}


part2()