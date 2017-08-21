import './PlayGound'

class SnakeGame {
    start(interval): {

    },

    setPlayGound(size): {
        this.playGround = new PlayGound(size)
        return this
    }

    initGameState(size): {
        this.gameState = {
            gameover: false,
            size: size,
            snake: [],
            item: null,
            itemEaten: false,
            delta: null,
            calculating: false,
        }
    }
}

const initSnakeGame = (size) => {
    game = new SnakeGame
    game.setPlayGound(size)
        .initGameState(size)
    return game
}
