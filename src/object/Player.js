import {SceneObject, Renderable2D, Point, DOMManager} from 'seed-engine';
import RandomMovement from '../component/RandomMovement';

export default class Player extends SceneObject {
    constructor() {
        super(new Point(100 + (Math.random() * DOMManager.GL.canvas.width - 100), 100 + (Math.random() * DOMManager.GL.canvas.height - 100)), new Point(50, 50, 50), 0);
        let renderable = new Renderable2D();
        this.addComponent(renderable);
        renderable.addToViewport(0);
        renderable.color.set(Math.random(), Math.random(), Math.random());

        this.addComponent(new RandomMovement());
        this.transform.centerOrigin();
    }

    onStart() {
    }

    onUpdate() {
    }
}