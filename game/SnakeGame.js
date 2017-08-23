import { render, renderGround } from './render'
import { calc } from './calc'
import initialState from './initialState'
import {
    detectGameOver, move, eat, getItem
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
        if (state.calculating) {
            return
        }

        state.calculating = true

        const nextStep = calc(state)
        this.gameState.delta = nextStep

        state.calculating = false
    }

    initGameState(ground) {
        this.gameState = initialState(ground)
    }

    handleState() {
        let state = this.gameState
        state = detectGameOver(state)

        if (state.gameover) {
            return
        }

        state = move(state)
        state = eat(state)
        state = getItem(state)
        render(state)
        this.updateState(state)
    }

    _calcInterval(ground, interval) {
        return interval / 2
    }

    updateState(state) {
        this.gameState = state
    }
}

export const initSnakeGame = (size) => {
    const game = new SnakeGame
    game.initGameState(size)

    return game
}
