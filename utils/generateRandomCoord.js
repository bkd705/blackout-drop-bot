const x = ['b', 'c', 'd', 'e', 'f', 'g']
const y = [1, 2, 3, 4, 5, 6, 7, 8]
const exclusions = [
    ['b', 1],
    ['b', 2],
    ['b', 7],
    ['b', 8],
    ['c', 1],
]

const generateRandomCoord = (x, y, exclusions) => {
    const randomX = x[Math.floor(Math.random() * x.length)]
    const randomY = y[Math.floor(Math.random() * y.length)]

    const result = [randomX, randomY]

    if (exclusions.some(exc => JSON.stringify(exc) === JSON.stringify(result))) {
        return pickRandomQuad(x, y, exclusions)
    }

    return [randomX, randomY]
}

module.exports = () => generateRandomCoord(x, y, exclusions)