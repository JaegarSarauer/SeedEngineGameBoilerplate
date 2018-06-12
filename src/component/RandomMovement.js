import {Component, Point, SceneManager, Bounds} from 'seed-engine';

export default class RandomMovement extends Component {
    constructor() {
        super(true);
        this.className = 'RandomMovement';
        this.direction = new Point(Math.random() * 20 - 10, Math.random() * 20 - 10);
        this.sceneViewportBounds = new Bounds();
    }

    onStart() {
        this.sceneViewportBounds = SceneManager.getCurrentScene().viewports[0].bounds;
    }

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