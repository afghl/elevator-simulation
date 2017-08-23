import $ from 'jquery'
import times from 'lodash/times'
import each from 'lodash/each'

const POINT_SIZE = 40

export const renderGround = (ground) => {
    const $ground = $('#root')
    $ground.width(POINT_SIZE * ground)
    $ground.height(POINT_SIZE * ground)

    const $grids = $('#grids')
    times(ground, (row) => {
        times(ground, (col) => {
            const $grid = $(`<div id="grid-${row}-${col}" class="grid">[${row}, ${col}]</div>`)
            $grid.width(POINT_SIZE)
            $grid.height(POINT_SIZE)
            $grids.append($grid)
        })
    })
}

export const render = ({ snake, item }) => {
    renderSnake(snake)
    renderItem(item)
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
