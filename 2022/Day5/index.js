let fs = require('fs')
let readline = require('readline')

async function part1() {
    const stacks = {
        1: ['F', 'H', 'M', 'T', 'V', 'L', 'D'],
        2: ['P', 'N', 'T', 'C', 'J', 'G', 'Q', 'H'],
        3: ['H', 'P', 'M', 'D', 'S', 'R'],
        4: ['F', 'V', 'B', 'L'],
        5: ['Q', 'L', 'G', 'H', 'N'],
        6: ['P', 'M', 'R', 'G', 'D', 'B', 'W'],
        7: ['Q', 'L', 'H', 'C', 'R', 'N', 'M', 'G'],
        8: ['W', 'L', 'C'],
        9: ['T', 'M', 'Z', 'J', 'Q', 'L', 'D', 'R']
    }

    const fileStream = fs.createReadStream('day5/input.txt')
    let score = 0

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        let numberPattern = /\d+/g;

        let arr = line.match(numberPattern)

        for (let x = 0; x < parseInt(arr[0]); x++) {
            let removedItem = stacks[parseInt(arr[1])].shift()

            stacks[parseInt(arr[2])].unshift(removedItem)
        }
    }

    console.log(stacks);
}

async function part2() {
    const stacks = {
        1: ['F', 'H', 'M', 'T', 'V', 'L', 'D'],
        2: ['P', 'N', 'T', 'C', 'J', 'G', 'Q', 'H'],
        3: ['H', 'P', 'M', 'D', 'S', 'R'],
        4: ['F', 'V', 'B', 'L'],
        5: ['Q', 'L', 'G', 'H', 'N'],
        6: ['P', 'M', 'R', 'G', 'D', 'B', 'W'],
        7: ['Q', 'L', 'H', 'C', 'R', 'N', 'M', 'G'],
        8: ['W', 'L', 'C'],
        9: ['T', 'M', 'Z', 'J', 'Q', 'L', 'D', 'R']
    }

    const fileStream = fs.createReadStream('day5/input.txt')
    let score = 0

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        let numberPattern = /\d+/g;

        let arr = line.match(numberPattern)

        // for (let x = 0; x < parseInt(arr[0]); x++) {
        let removedItems = stacks[parseInt(arr[1])].splice(0, parseInt(arr[0]))

        stacks[parseInt(arr[2])] = [...removedItems, ...stacks[parseInt(arr[2])]]
        // }
    }

    console.log(stacks);
}

part2();