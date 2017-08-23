import { render, renderGround } from './render'
import { calc } from './calc'
import initialState from './initialState'

class SnakeGame {
    constructor() {
        this.calNextStep = this.calNextStep.bind(this)
        this.handleState = this.handleState.bind(this)
    }

    start(interval) {
        const { ground } = this.gameState
        renderGround(ground)
        setInterval(this.handleState, interval)
    }

    calNextStep() {
        // TODO: detect calculating
        nextStep = calc(state)
        // TODO: immutable
        this.gameState.delta = nextStep
    }

    initGameState(ground) {
        this.gameState = initialState(ground)
    }

    handleState() {
        const state = this.gameState

        render(state)
    }
}

export const initSnakeGame = (size) => {
    const game = new SnakeGame
    game.initGameState(size)

    return game
}
