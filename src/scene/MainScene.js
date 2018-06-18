import {Scene, Viewport, DOMManager} from 'seed-engine';
import Player from '../object/Player';
import RandomMovement from '../component/RandomMovement';

/**
 * The main scene of the game, containing one fullscreen view.
 */
export default class MainScene extends Scene {
    constructor() {
        super();
        this.registerViewport(new Viewport(0, 0, DOMManager.canvasWidth / 2, DOMManager.canvasHeight));
        this.registerViewport(new Viewport(DOMManager.canvasWidth / 2, 0, DOMManager.canvasWidth / 2, DOMManager.canvasHeight / 2));
        this.registerViewport(new Viewport(DOMManager.canvasWidth / 2, DOMManager.canvasHeight / 2, DOMManager.canvasWidth / 2, DOMManager.canvasHeight / 2));
    }

    /**
     * When this scene is started, it creates 20 players.
     */
    onStart() {
        for (let i = 0; i < 2000; i++) {
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