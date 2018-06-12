import {Engine, BasicScene, SceneManager} from 'seed-engine';
import MainScene from './scene/MainScene';

/**
 * Example entry class for a game. Defines a class then starts creates one underneath.
 * 
 * Ensure to call Engine.start() before doing anything.
 */
export class Game {
    constructor() {
    }

    /**
     * Starts the engine loop, then adds a new scene to it.
     */
    start() {
        Engine.start();
        SceneManager.addScene(new MainScene());
    }
}

new Game().start();