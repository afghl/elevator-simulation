export const getHead = (snake) => snake[0]
export const moveLeft = (point) => [point[0] + 1, point[1]]
export const pointEqual = (p1, p2) => p1[0] == p2[0] && p1[1] == p2[1]
