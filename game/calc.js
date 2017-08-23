import { getHead, moveLeft } from './tool'

// return: next step
export const calc = ({ ground, snake, item }) => {
    // TODO
    const head = getHead(snake)
    return moveLeft(head)
}
