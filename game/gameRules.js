import { contains, getHead, getBody } from './tool'

export const touchSelf = (snake) => {
    const head = getHead(snake)
    const body = getBody(snake)
    return contains(body, head)
}

export const touchBound = (ground, snake) => {
    const head = getHead(snake)
    const bound = ground - 1

    return head[0] >= bound || head[1] >= bound
}
