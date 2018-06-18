import {SceneObject, Renderable2D, Point, DOMManager, ClickController, SceneManager} from 'seed-engine';
import RandomMovement from '../component/RandomMovement';
import Movement from '../component/Movement';

/**
 * An example class of how a SceneObject should be written. This player doesn't actually have any way
 * of being a "player" yet, as there is no input reading.
 */
export default class Player extends SceneObject {
    /**
     * Defines a random position to start, and adds a Renderable Component of random color, and another component, RandomMovement.
     */
    constructor() {
        super(new Point(0, 0, 0), new Point(50, 50, 50), 0);
   
        this.viewport = 0;
    }

    /**
     * Called on the first update this Object has existed.
     */
    onStart() {        
        this.viewport = Math.floor(Math.random() * SceneManager.getCurrentScene().viewports.length);
        
        let renderable = new Renderable2D();
        this.addComponent(renderable);
        renderable.addToViewport(this.viewport);
        renderable.color.set(Math.random(), Math.random(), Math.random());

        this.addComponent(new RandomMovement());
        this.addComponent(new Movement());

        this.addComponent(new ClickController((event) => {
            renderable.color.set(Math.random(), Math.random(), Math.random());
        }));

        this.transform.centerOrigin();

        let vpBounds = SceneManager.getCurrentScene().viewports[this.viewport].bounds;
        this.transform.setPosition(vpBounds.p2.x / 2, vpBounds.p2.y / 2);
    }

    /**
     * Called every update once the start() has been called.
     */
    onUpdate() {
    }
}