import $ from 'jquery'
import times from 'lodash/times'
import each from 'lodash/each'

const POINT_SIZE = 20

export const renderGround = (ground) => {
    renderBackground(ground)
    renderGrid(ground)
}

export const render = ({ snake, item }) => {
    clear()
    renderSnake(snake)
    renderItem(item)
}

const renderBackground = (ground) => {
    const $ground = $('#root')
    $ground.width(POINT_SIZE * ground)
    $ground.height(POINT_SIZE * ground)
}

const renderGrid = (ground) => {
    const $grids = $('#grids')

    for (let y = ground - 1; y >= 0; y--) {
        for (let x = 0; x < ground; x++) {
            const $grid = $(`<div id="grid-${x}-${y}" class="grid">[${x}, ${y}]</div>`)
            $grid.width(POINT_SIZE)
            $grid.height(POINT_SIZE)
            $grids.append($grid)
        }
    }
}

const clear = () => {
    $('.grid').removeClass('snake').removeClass('item')
}

const renderSnake = (snake) => {
    each(snake, (point) => {
        getGrid(point).addClass('snake')
    })
}

const renderItem = (item) => {
    getGrid(item).addClass('item')
}

const getGrid = (point) => {
    return $(`#grid-${point[0]}-${point[1]}`)
}
