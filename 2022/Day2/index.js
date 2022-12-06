let fs = require('fs')
let readline = require('readline')

// Opponent: A - rock, B - paper, C - scissors
// Me: X - rock(1), Y - paper(2), z - scissors(3)
// lose - 0, draw - 3, win - 6

async function part1() {
    let picks = {
        X: 1,
        Y: 2,
        Z: 3
    }

    let drawPicks = ['AX', 'BY', 'CZ']
    let winningPicks = ['AY', 'BZ', 'CX']

    let shapeScore = 0

    const fileStream = fs.createReadStream('input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        let trimmedLide = line.replace(/ /g, '')
        shapeScore += picks[trimmedLide[1]]

        if (drawPicks.includes(trimmedLide)) {
            shapeScore += 3
        }

        if (winningPicks.includes(trimmedLide)) {
            shapeScore += 6
        }
    }

    console.log(shapeScore)
}

async function part2() {
    let picks = {
        X: 1,
        Y: 2,
        Z: 3
    }

    let drawPicks = ['AX', 'BY', 'CZ']
    let winningPicks = ['AY', 'BZ', 'CX']

    let shapeScore = 0

    const fileStream = fs.createReadStream('input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        let trimmedLide = line.replace(/ /g, '')
        let myPick = trimmedLide[1]
        let opponentPick = trimmedLide[0]

        if (myPick === 'Y') {
            if (opponentPick === 'A') myPick = 'X'
            if (opponentPick === 'B') myPick = 'Y'
            if (opponentPick === 'C') myPick = 'Z'
        } else if (myPick === 'Z') {
            if (opponentPick === 'A') myPick = 'Y'
            if (opponentPick === 'B') myPick = 'Z'
            if (opponentPick === 'C') myPick = 'X'
        } else if (myPick === 'X') {
            if (opponentPick === 'A') myPick = 'Z'
            if (opponentPick === 'B') myPick = 'X'
            if (opponentPick === 'C') myPick = 'Y'
        }

        shapeScore += picks[myPick]

        let score = opponentPick + myPick

        if (drawPicks.includes(score)) {
            shapeScore += 3
        }

        if (winningPicks.includes(score)) {
            shapeScore += 6
        }

    }

    console.log(shapeScore)
}

part2();
