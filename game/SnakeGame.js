import { render, renderGround } from './render'
import { calc } from './calc'
import initialState from './initialState'
import {
    move, eat
} from './handleState'

class SnakeGame {
    constructor() {
        this.calNextStep = this.calNextStep.bind(this)
        this.handleState = this.handleState.bind(this)
    }

    start(interval) {
        const { ground } = this.gameState
        renderGround(ground)
        setInterval(this.handleState, interval)
        setInterval(this.calNextStep, this._calcInterval(ground, interval))
    }

    calNextStep() {
        // TODO: detect calculating
        const state = this.gameState
        const nextStep = calc(state)
        // TODO: immutable
        this.gameState.delta = nextStep
    }

    initGameState(ground) {
        this.gameState = initialState(ground)
    }

    handleState() {
        let state = this.gameState
        state = move(state)
        state = eat(state)
        render(state)
    }

    _calcInterval(ground, interval) {
        return interval / 2
    }
}

export const initSnakeGame = (size) => {
    const game = new SnakeGame
    game.initGameState(size)

    return game
}
