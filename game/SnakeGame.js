import render from './render'

class SnakeGame {
    start(interval) {
        console.log('start');
        setInterval(this.getStateAndRender, interval)

    }

    initGameState(ground) {
        this.gameState = {
            test: 1,
            gameover: false,
            ground: ground,
            snake: [],
            item: null,
            itemEaten: false,
            delta: null,
            calculating: false
        }
    }

    getStateAndRender() {
        const state = this.state


        render(state)
    }
}

export const initSnakeGame = (size) => {
    const game = new SnakeGame
    console.log(game);
    game.initGameState(size)
    return game
}
