import 'babel-polyfill'
import './sass/main.scss'
import { initSnakeGame } from './game/SnakeGame'

initSnakeGame(5).start(1000)
