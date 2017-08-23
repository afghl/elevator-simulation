import merge from 'lodash/merge'
import { generatePoint } from './tool'

const defaults = {
    gameover: false,
    itemEaten: false,
    delta: null,
    tail: null,
    calculating: false
}

const generateSnake = (ground) => {
    return [
        [2, 4], [2, 3]
    ]
}

const generateItem = (ground, snake) => {
    return generatePoint(ground, snake)
}

export default (ground) => {
    const snake = generateSnake(ground)
    const item = generateItem(ground, snake)

    return merge({ ground, snake, item }, defaults)
}
