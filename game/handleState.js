import clone from 'lodash/clone'
import { pointEqual, generatePoint } from './tool'
import { touchSelf, touchGround } from './gameRules'

export const detectGameOver = (state) => {
    const { ground, snake } = state

    if (touchSelf(snake) || touchGround(ground, snake)) {
        const newState = clone(state)
        newState.gameover = true
        return newState
    } else {
        return state
    }
}

export const move = (state) => {
    const { delta } = state

    if (typeof delta === 'undefined') {
        return state
    }

    const newState = clone(state)

    newState.delta = null
    newState.snake.unshift(delta)
    newState.tail = newState.snake.pop()
    return newState
}

export const eat = (state) => {
    const { snake, item } = state

    if (!pointEqual(snake[0], item)) {
        return state
    }

    const newState = clone(state)

    newState.itemEaten = true
    newState.snake.push(newState.tail)
    return newState
}

export const getItem = (state) => {
    if (!state.itemEaten) {
        return state
    }

    const newState = clone(state)
    const { ground, snake } = newState

    newState.itemEaten = false
    newState.item = generatePoint(ground, snake)

    return newState
}
