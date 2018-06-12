import {SceneObject, Renderable2D, Point, DOMManager} from 'seed-engine';
import RandomMovement from '../component/RandomMovement';

/**
 * An example class of how a SceneObject should be written. This player doesn't actually have any way
 * of being a "player" yet, as there is no input reading.
 */
export default class Player extends SceneObject {
    /**
     * Defines a random position to start, and adds a Renderable Component of random color, and another component, RandomMovement.
     */
    constructor() {
        super(new Point(100 + (Math.random() * DOMManager.GL.canvas.width - 100), 100 + (Math.random() * DOMManager.GL.canvas.height - 100)), new Point(50, 50, 50), 0);
        let renderable = new Renderable2D();
        this.addComponent(renderable);
        renderable.addToViewport(0);
        renderable.color.set(Math.random(), Math.random(), Math.random());

        this.addComponent(new RandomMovement());
        this.transform.centerOrigin();
    }

    /**
     * Called on the first update this Object has existed.
     */
    onStart() {
    }

    /**
     * Called every update once the start() has been called.
     */
    onUpdate() {
    }
}