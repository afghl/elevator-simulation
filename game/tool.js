import find from 'lodash/find'

export const getHead = (snake) => snake[0]
export const moveLeft = (point) => [point[0] + 1, point[1]]
export const pointEqual = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1]

export const generatePoint = (size, blackList) => {
    if (typeof blackList != 'undefined' && blackList.length == size * size) {
        return null
    }

    while (true) {
        const point = [rand(size), rand(size)]
        if (!contains(blackList, point)) {
            return point
        }
    }
}

const rand = (r) => Math.floor(Math.random() * r)
const contains = (list, point) => find(list, (p) => pointEqual(p, point)) != null
