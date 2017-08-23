import merge from 'lodash/merge'

const defaults = {
    gameover: false,
    itemEaten: false,
    delta: null,
    tail: null,
    calculating: false
}

const generateSnake = (ground) => {
    return [
        [2, 4], [2, 3], [2, 2], [2, 1], [2, 0]
    ]
}

const generateItem = (ground, snake) => {
    return [3, 3]
}

export default (ground) => {
    const snake = generateSnake(ground)
    const item = generateItem(ground, snake)

    return merge({ ground, snake, item }, defaults)
}
