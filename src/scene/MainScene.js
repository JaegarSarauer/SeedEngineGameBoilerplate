import {BasicScene} from 'seed-engine';
import Player from '../object/Player';
import RandomMovement from '../component/RandomMovement';

export default class MainScene extends BasicScene {
    constructor() {
        super();
    }

    onStart() {
        for (let i = 0; i < 20; i++) {
            new Player();
        }
    }

    onUpdate() {
    }
}