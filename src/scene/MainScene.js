import {BasicScene} from 'seed-engine';
import Player from '../object/Player';
import RandomMovement from '../component/RandomMovement';

/**
 * The main scene of the game, containing one fullscreen view.
 */
export default class MainScene extends BasicScene {
    constructor() {
        super();
    }

    /**
     * When this scene is started, it creates 20 players.
     */
    onStart() {
        for (let i = 0; i < 20; i++) {
            new Player();
        }
    }

    /**
     * If the scene wanted to do updates that wasn't game-scope, and isn't object-scope, it should be done here.
     */
    onUpdate() {
    }

    /**
     * Called when the game is ending.
     */
    onEnd() {

    }
}