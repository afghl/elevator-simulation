import { getHead, moveLeft } from './tool'

// return: next step
export const calc = ({ ground, snake, item }) => {
    // TODO
    head = getHead(snake)
    return moveLeft(head)
}
