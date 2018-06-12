import {Engine, BasicScene, SceneManager} from 'seed-engine';
import MainScene from './scene/MainScene';

export class Game {
    constructor() {
    }

    start() {
        Engine.start();
        SceneManager.addScene(new MainScene());
        SceneManager.getCurrentScene();
    }
}

new Game().start();