let fs = require('fs')
let readline = require('readline')

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let fullAlphabet = alphabet + alphabet.toUpperCase()

async function part1() {
    const fileStream = fs.createReadStream('day3/input.txt')
    let score = 0

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const partOne = line.slice(0, line.length / 2).split('')
        const partTwo = line.slice(line.length / 2, line.length).split('')

        let letterCount = {
            letter: 'a',
            count: 0
        }

        partOne.map(letterOne => {
            let count = 0

            for (const element of partTwo) {
                if (element === letterOne) {
                    count += 1;
                }
            }

            if (count > letterCount.count) {
                letterCount = {
                    letter: letterOne,
                    count: count
                }
            }
        })

        score += fullAlphabet.indexOf(letterCount.letter) + 1
    }

    console.log(score);
}

async function part2() {
    const allFileContents = fs.readFileSync('day3/input.txt', 'utf-8');
    let score = 0
    let formattedLine = []
    let allLines = [];

    allFileContents.split(/\r?\n/).forEach((line, idx) => {
        if ((idx + 1) % 3 === 0) {
            formattedLine.push(line)
            allLines.push(formattedLine)
            formattedLine = []
        } else {
            formattedLine.push(line)
        }
    });

    allLines.map(lineArr => {
        lineArr = lineArr.map(line => line.split(''))
        let letter = lineArr.reduce((p, c) => p.filter(e => c.includes(e)));
        score += fullAlphabet.indexOf(letter[0]) + 1
    })

    console.log(score)
}

part2()