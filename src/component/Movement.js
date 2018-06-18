import {Component, Point, SceneManager, TopDownController} from 'seed-engine';

export default class Movement extends TopDownController {
    constructor() {
        super(true);
        this.className = 'TopDownController';
    }

    onStart() {
    }

    onUpdate() {
        let updatePos = new Point();
        if (this.isUpPressed()) {
            updatePos.y += -1;
        }
        if (this.isLeftPressed()) {
            updatePos.x += -1;
        }
        if (this.isDownPressed()) {
            updatePos.y += 1;
        }
        if (this.isRightPressed()) {
            updatePos.x += 1;
        }
        updatePos.normalize();
        updatePos.multiply(5);
        this.gameObject.transform.translate(updatePos.x, updatePos.y, updatePos.z);
    }
}