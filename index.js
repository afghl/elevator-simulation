import 'babel-polyfill'
import './sass/main.scss'
import { initSnakeGame } from './game/SnakeGame'

initSnakeGame(20).start(3000)
