import find from 'lodash/find'

export const getHead = (snake) => snake[0]
export const getBody = (snake) => snake.slice(1)
export const moveLeft = (point) => [point[0] + 1, point[1]]
export const pointEqual = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1]
export const contains = (list, point) => find(list, (p) => pointEqual(p, point)) != null

export const generatePoint = (size, blackList) => {
    if (typeof blackList != 'undefined' && blackList.length == size * size) {
        return null
    }

    let point
    do {
        point = [rand(size), rand(size)]
    } while (contains(blackList, point))

    return point
}

const rand = (r) => Math.floor(Math.random() * r)
