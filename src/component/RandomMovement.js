import {Component, Point, SceneManager, Bounds} from 'seed-engine';

export default class RandomMovement extends Component {
    /**
     * Creates a new direction point (vector) to begin moving as.
     */
    constructor() {
        super(true);
        this.className = 'RandomMovement';
        this.direction = new Point(Math.random() * 2 - 1, Math.random() * 2 - 1);
        this.sceneViewportBounds = new Bounds();
    }

    /**
     * Gets the bounds of the viewport once. If your viewports aren't going to be changing,
     * this saves wasted time spent getting the bounds each update.
     */
    onStart() {
        this.sceneViewportBounds = SceneManager.getCurrentScene().viewports[this.gameObject.viewport].bounds;
    }

    /**
     * Moves in the direction of this.direction until it comes
     * in contact to one of the edges of the viewport.
     */
    onUpdate() {
        let transform = this.gameObject.transform;
        let position = transform.getPosition();
        let size = transform.getScale();
        if (position.x - size.x / 2 + this.direction.x <= 0)
            this.direction.x = Math.abs(this.direction.x);
        if (position.x + size.x / 2 + this.direction.x >= this.sceneViewportBounds.p2.x)
            this.direction.x = -Math.abs(this.direction.x);
        if (position.y - size.y / 2 + this.direction.y <= 0)
            this.direction.y = Math.abs(this.direction.y);
        if (position.y + size.y / 2 + this.direction.y >= this.sceneViewportBounds.p2.y)
            this.direction.y = -Math.abs(this.direction.y);
        transform.translate(this.direction.x, this.direction.y);
    }
}