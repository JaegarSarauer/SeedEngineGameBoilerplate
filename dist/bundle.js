/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/seed-engine/src/Engine.js":
/*!************************************************!*\
  !*** ./node_modules/seed-engine/src/Engine.js ***!
  \************************************************/
/*! exports provided: _Engine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Engine", function() { return _Engine; });
/* harmony import */ var _manager_EngineManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager/EngineManager */ "./node_modules/seed-engine/src/manager/EngineManager.js");
/* harmony import */ var _manager_Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager/Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
'use-strict';




/**
 * Engine Singleton class. Entry point reference to access managers and
 * to start and stop the Engine.
 */
class _Engine {
    /**
     * Engine Contstructor.
     */
    constructor() {
    }

    /**
     * Starts the engine.
     */
    start() {
        _manager_EngineManager__WEBPACK_IMPORTED_MODULE_0__["default"].start();
    }

    /**
     * Stops the engine and cleans up code.
     */
    end() {
        _manager_EngineManager__WEBPACK_IMPORTED_MODULE_0__["default"].end();
    }

    /**
     * Pauses the entire engine.
     */
    pause() {
        _manager_EngineManager__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
    }

    /**
     * Resumes to the Engine.
     */
    unpause() {
        _manager_EngineManager__WEBPACK_IMPORTED_MODULE_0__["default"].unpause();
    }
}

/**
 * Singleton reference to the Engine.
 */
const Engine = new _Engine();
/* harmony default export */ __webpack_exports__["default"] = (Engine);

/***/ }),

/***/ "./node_modules/seed-engine/src/base/Updateable.js":
/*!*********************************************************!*\
  !*** ./node_modules/seed-engine/src/base/Updateable.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Updateable; });
/* harmony import */ var _manager_UpdateableManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/UpdateableManager */ "./node_modules/seed-engine/src/manager/UpdateableManager.js");


/**
 * Baseclass for objects that follow the same ECS pattern of the seed engine.
 * 
 * Used in anything that should follow a create, update, end loop 
 * handled by the Engine.
 * 
 * Many things will need to update/start/end. If you derive something that
 * has the start()/update()/end()... functions, the children should fill in
 * their respective callbacks (onStart()/onUpdate()/onEnd()/...).
 */
class Updateable {
    constructor() {
        this.hasStarted = false;
        this.hasPaused = false;
        this.id = -1;
        this.deregister = _manager_UpdateableManager__WEBPACK_IMPORTED_MODULE_0__["default"].registerUpdateable(this);
    }

    /**
     * Base call function for when this Updateable is to be started.
     */
    start() {
        this.onStart();
        this.hasStarted = true;
        this.update = this.postStartUpdate;
    }

    /**
     * Base call function for when this Updateable is to be updated.
     */
    update() {
        if (this.hasPaused)
            return;
            
        this.start();
    }

    postStartUpdate() {
        if (this.hasPaused)
            return;

        this.onUpdate();
    }

    /**
     * Base call function for when this Updateable is to be ended.
     */
    end() {
        this.onEnd();
        this.destructor();
    }

    /**
     * Base call function for when this Updateable is to be paused.
     */
    pause() {
        if (!this.hasPaused) {
            this.onPause();
            this.hasPaused = true;
        }
    }

    /**
     * Base call function for when this Updateable is to be unpaused.
     */
    unpause() {
        if (this.hasPaused) {
            this.onUnpause();
            this.hasPaused = false;
        }
    }

    /**
     * Cleanup code for when destroying an Updateable.
     */
    destructor() {
        this.deregister();
    }

    /**
     * Called when the the object is first introduced.
     * 
     * Managing code will call this on first iteration once introduced to the game loop.
     */
    onStart() {}

    /**
     * Called on every update within the game, once the object has had onStart called.
     */
    onUpdate() {}

    /**
     * Called when the object is being removed or cleaned up from usage.
     */
    onEnd() {}

    /**
     * Called when the object is intended to be paused.
     */
    onPause() {}

    /**
     * Called when the object is to be unpaused from paused state.
     */
    onUnpause() {}
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Audio.js":
/*!*********************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Audio.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Audio; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/seed-engine/src/component/Component.js");


/**
 * A Component that can be attatched to any GameObject.
 * 
 * The Audio Component has controls for playing sounds and music.
 * Audio can be locallized to the Object location it is attached to.
 */
class Audio extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/BoxCollider.js":
/*!***************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/BoxCollider.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxCollider; });
/* harmony import */ var _Collider2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collider2D */ "./node_modules/seed-engine/src/component/Collider2D.js");


/**
 * A 2D Collider Component which can be attached to any GameObject.
 * 
 * A BoxCollider Component monitors collisions with other Collider Components. 
 * 
 * This component is refined to a 2D square.
 */
class BoxCollider extends _Collider2D__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/CircleCollider.js":
/*!******************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/CircleCollider.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircleCollider; });
/* harmony import */ var _Collider2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collider2D */ "./node_modules/seed-engine/src/component/Collider2D.js");


/**
 * A 2D Collider Component which can be attached to any GameObject.
 * 
 * A CircleCollider Component monitors collisions with other Collider Components. 
 * 
 * This component is refined to a 2D circle. A point of origin and radius.
 */
class CircleCollider extends _Collider2D__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Collider.js":
/*!************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Collider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collider; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/seed-engine/src/component/Component.js");


/**
 * A Collider Component that checks bounds for collisions.
 * 
 * This commponent has interface functions for calculating collisions
 * which have to be defined to work. See Subclasses.
 */
class Collider extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Collider2D.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Collider2D.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collider2D; });
/* harmony import */ var _Collider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collider */ "./node_modules/seed-engine/src/component/Collider.js");


/**
 * A Collider Component that checks bounds only on a plane.
 * 
 * This commponent has interface functions for calculating collisions
 * which have to be defined to work. See Subclasses.
 */
class Collider2D extends _Collider__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Component.js":
/*!*************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Component.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _base_Updateable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Updateable */ "./node_modules/seed-engine/src/base/Updateable.js");


/**
 * A component may be added to any GameObject by using
 * GameObject's function: addComponent(component).
 * 
 * A component should redefine the Updateable functions inherited with custom code to define the Component functionality.
 */
class Component extends _base_Updateable__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Constructor for Base Components.
     * Requires a boolean to indicate if a GameObject can contain multiple
     * components of this type.
     * 
     * @param {boolean} unique Is there only one of these component allowed on a GameObject?
     */
    constructor(unique) {
        super();
        this.isUnique = unique;
    }

    /**
     * Called when the component is successfully added to a GameObject.
     */
    onAddComponent() {}
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Physics.js":
/*!***********************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Physics.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Physics; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/seed-engine/src/component/Component.js");


/**
 * A Physics Component can be added to any GameObject and will give it
 * physical properties which can be toggled and adjusted.
 * 
 * This Component should have nothing to do with collisions. Instead, Physics
 * should provide pre and post reactions to collisions, gravity, frictions,
 * and anything else that should respond to an effect or change.
 * 
 * This is intended to be a base class for more specific physics handling
 * depending on the application.
 */
class Physics extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Physics2D.js":
/*!*************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Physics2D.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Physics2D; });
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Physics */ "./node_modules/seed-engine/src/component/Physics.js");


class Physics2D extends _Physics__WEBPACK_IMPORTED_MODULE_0__["default"] {

}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Renderable.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Renderable.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderable; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/seed-engine/src/component/Component.js");
/* harmony import */ var _manager_SceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");
/* harmony import */ var _manager_RenderManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/RenderManager */ "./node_modules/seed-engine/src/manager/RenderManager.js");
/* harmony import */ var _manager_ProgramManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/ProgramManager */ "./node_modules/seed-engine/src/manager/ProgramManager.js");
/* harmony import */ var _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/WebGL/Matrix3 */ "./node_modules/seed-engine/src/render/WebGL/Matrix3.js");
/* harmony import */ var _internal_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/Color */ "./node_modules/seed-engine/src/internal/Color.js");







/**
 * Base Renderable Component for all Components that want to draw to the screen. If
 * you want to show something on screen, it should derive Renderable.
 * 
 * Contained in the class are functions for attaching the Renderable to viewports,
 * and updating Transform data into matricies for use with the Render Manager.
 * 
 * The Renderable Component contains data on how the Renderable expects to be rendered.
 * Programs, render vectors, shader data, and other data that is on a per-object basis
 * for rendering is defined here.
 * 
 * Classes which derive a Renderable should handle all base data and add or modify data
 * as needed to achieve certain effects.
 */
class Renderable extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Constructor for the Renderable component. Allows defaults to be assigned without
     * having to call setter functions later.
     * 
     * @param {Program} program A Program Object from the ProgramManager.
     */
    constructor(program = _manager_ProgramManager__WEBPACK_IMPORTED_MODULE_3__["default"].getProgram('Default')) {
        super(true);
        this.deregisterViewports = {};

        //currently unused
        this.program = program;
        this._matrixPosition = new _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._matrixScale = new _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._matrixRotation = new _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._matrixOriginOffset = new _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.color = new _internal_Color__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.renderPositions = [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1];
        this.primitiveType = _manager_RenderManager__WEBPACK_IMPORTED_MODULE_2__["default"].GL.TRIANGLES;
        this.primitiveCount = 6;
    }

    /**
     * Returns a joined matrix of position, scale, rotation and origin adjustment.
     */
    getMatrix() {       
        return _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_4__["default"].copy(this._matrixPosition).multiply(this._matrixRotation).multiply(this._matrixScale).multiply(this._matrixOriginOffset);
    }

    /**
     * Sets the position matrix to the new position point assigned.
     * 
     * @param {Point} point A position point.
     */
    setPosition(point) {
        this._matrixPosition.setPosition(point.x, point.y); //point.z if we had 3D to override this
    }

    /**
     * Sets the origin offset matrix to the new position point assigned. This matrix reacts differently from other matrix
     * assignment. 0,0 is regular top left corner origin, -0.5, -0.5 centers the origin to the center of the Transform, and
     * -1, -1 will align the origin to the bottom right.
     * 
     * @param {Point} point Origin offset point.
     */
    setOriginOffset(point) {
        this._matrixOriginOffset.setPosition(point.x, point.y); //point.z if we had 3D to override this
    }

    /**
     * Sets the rotation matrix to the new rotation value assigned.
     * 
     * TODO: Change to a rotation point for x, y, z rotation instead of just z.
     * 
     * @param {number} rotation A rotation in degrees.
     */
    setRotation(rotation) {
        this._matrixRotation.setRotation(rotation);
    }

    /**
     * Sets the scale matrix to the new scale point assigned.
     * 
     * @param {Point} scale A scale point.
     */
    setScale(scale) {
        this._matrixScale.setScale(scale.x, scale.y);
    }

    /**
     * Called immediatly after the Render component is added to a game object.
     * 
     * Updates the data of this renderable to the current Transform data.
     */
    onAddComponent() {
        let transform = this.gameObject.getComponent("Transform");
        transform.renderable = this;
        this.setPosition(transform.getPosition());
        this.setScale(transform.getScale());
        this.setRotation(transform.getRotation());
    }

    /**
     * Adds this component to another viewport to be drawn. 
     * 
     * @param {number} viewportID Object ID of the viewport.
     */
    addToViewport(viewportID) {
        this.deregisterViewports[viewportID] = _manager_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentScene().registerRenderableComponent(this, viewportID);
        return this;
    }

    /**
     * Removes the renderable from all viewports.
     */
    removeFromViewports() {
        let objKeys = Object.keys(this.deregisterViewports);
        for (let i = 0; i < objKeys.length; i++) {
            this.deregisterViewports[objKeys[i]]();
        }
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Renderable2D.js":
/*!****************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Renderable2D.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderable2D; });
/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable */ "./node_modules/seed-engine/src/component/Renderable.js");
/* harmony import */ var _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/WebGL/Matrix3 */ "./node_modules/seed-engine/src/render/WebGL/Matrix3.js");



/**
 * Renderable2D is a renderable component which focusses on
 * 2D shaders and matricies for 2D space rendering.
 */
class Renderable2D extends _Renderable__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.className = 'Renderable2D';
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/RenderableSquare.js":
/*!********************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/RenderableSquare.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderableSquare; });
/* harmony import */ var _Renderable2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable2D */ "./node_modules/seed-engine/src/component/Renderable2D.js");


class RenderableSquare extends _Renderable2D__WEBPACK_IMPORTED_MODULE_0__["default"] {
    
}

/***/ }),

/***/ "./node_modules/seed-engine/src/component/Transform.js":
/*!*************************************************************!*\
  !*** ./node_modules/seed-engine/src/component/Transform.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transform; });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ "./node_modules/seed-engine/src/component/Component.js");
/* harmony import */ var _internal_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/Point */ "./node_modules/seed-engine/src/internal/Point.js");



/**
 * A component all GameObjects are given by default on instantiation.
 * 
 * Transform components are unique to the object, meaning there cannot be more than
 * one Transform on a GameObject.
 * 
 * Transforms keep track of GameObject position, scale (size), rotation, and 
 * origin offset. These should be changes with their respective setters, and not directly,
 * to ensure the correct components are notified of these changes.
 * 
 * TODO: Make rotation work on 3 axis like position and scale.
 * TODO: Change the updates and setters of the position/scale/rotation to use funcions in their base
 * definitions and remove the wrappers here to reduce code.
 */
class Transform extends _Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(position = new _internal_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0), scale = new _internal_Point__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1, 1), rotation = 0) {
        super(true);
        this.className='Transform';
        this._position = position;
        this._rotation = rotation;
        this._scale = scale;
        this._originOffset = new _internal_Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0);
        this.renderable = null;
    }

    /**
     * Sets the Transforms position.
     * 
     * @param {number} x X position. Defaults to current X position.
     * @param {number} y Y position. Defaults to current Y position.
     * @param {number} z Z position. Defaults to current Z position.
     */
    setPosition(x = this._position.x, y = this._position.y, z = this._position.z) {
        this._position.set(x, y, z);
        if (this.renderable != null) {
            this.renderable.setPosition(this._position);
        }
    }

    /**
     * Triggers between two types of regularly used origin points. 
     * 
     * Origin points are used with Renderables and other components to offset the origin different from the Transform's position.
     * 
     * "Center": (-0.5, -0.5, -0.5) centered to the Tranform's position, and "Default": (0, 0, 0), beginning at the top left of the Transform.
     * 
     * @param {boolean} center "Center" if true, "Default" if false.
     */
    centerOrigin(center = true) {
        if (center) {
            this.setOriginOffset(-0.5, -0.5, -0.5);
        } else {
            this.setOriginOffset(0, 0, 0);
        }
    }

    /**
     * Sets the origin offset position. 
     * 
     * If you want an object to exist at a 
     * position, but do something else (like drawing, animations) 
     * in a relative position the the Tranform, use this to change the 
     * offset from the Transfrom.
     * 
     * (0, 0, 0) would be top left of the transform. 
     * (-0.5, -0.5, -0.5) would be center of the transform. 
     * (-1, -1, -1) would be bottom right of transform.
     * 
     * Parameters default to their current values.
     * 
     * @param {number} x X axis offset. Defaults to current origin offset X.
     * @param {number} y Y axis offset. Defaults to current origin offset Y.
     * @param {number} z Z axis offset. Defaults to current origin offset Z.
     */
    setOriginOffset(x = this._originOffset.x, y = this._originOffset.y, z = this._originOffset.z) {
        this._originOffset.set(x, y, z);
        if (this.renderable != null) {
            this.renderable.setOriginOffset(this._originOffset);
        }
    }

    /**
     * Rotates the transform to face a different direction.
     * 
     * TODO: implement more than z axis rotation.
     * 
     * @param {number} rotation Rotation around the Z axis (in degrees).
     */
    setRotation(rotation) {
        this._rotation = rotation;
        if (this.renderable != null) {
            this.renderable.setRotation(this._rotation);
        }
    }

    /**
     * 
     * @param {number} scaleX X scale from 1. Defaults to current scale X.
     * @param {number} scaleY Y scale from 1. Defaults to current scale Y.
     * @param {number} scaleZ Z scale from 1. Defaults to current scale Z.
     */
    setScale(scaleX = this.scaleX, scaleY = this.scaleY, scaleZ = this.scaleZ) {
        this._scale.set(scaleX, scaleY, scaleZ);
        if (this.renderable != null) {
            this.renderable.setScale(this._scale);
        }
    }

    /**
     * Adds the parameters of this function to the Transforms position.
     * 
     * @param {number} x X position. Defaults to 0.
     * @param {number} y Y position. Defaults to 0.
     * @param {number} z Z position. Defaults to 0.
     */
    translate(x = 0, y = 0, z = 0) {
        this._position.x += x;
        this._position.y += y;
        this._position.z += z;
        if (this.renderable != null) {
            this.renderable.setPosition(this._position);
        }
    }

    /**
     * Adds the rotation parameter to the current Transform rotation.
     * 
     * @param {number} rotation Rotation to add.
     */
    rotate(rotation) {
        this._rotation += rotation;
        if (this.renderable != null) {
            this.renderable.setRotation(this._rotation);
        }
    }

    /**
     * Adds the parameters of this function to the Transforms scale.
     * 
     * @param {number} scaleX X scale. Defaults to 0.
     * @param {number} scaleY Y scale. Defaults to 0.
     * @param {number} scaleZ Z scale. Defaults to 0.
     */
    scale(scaleX = 0, scaleY = 0, scaleZ = 0) {
        this._scale.x += scaleX;
        this._scale.y += scaleY;
        this._scale.z += scaleZ;
        if (this.renderable != null) {
            this.renderable.setScale(this._scale);
        }
    }

    /**
     * @returns {Point} The transform's position.
     */
    getPosition() {
        return this._position;
    }

    /**
     * @returns {Point} The transform's scale.
     */
    getScale() {
        return this._scale;
    }

    /**
     * @returns {number} The transform's rotation.
     */
    getRotation() {
        return this._rotation;
    }

    /**
     * @returns {Point} The transform's origin offset.
     */
    getOriginOffset() {
        return this._originOffset;
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/const/FragmentShader.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/const/FragmentShader.js ***!
  \**************************************************************/
/*! exports provided: DEFAULT_F */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_F", function() { return DEFAULT_F; });
/**
 * Default fragment shader which handles single colors.
 */

const DEFAULT_F = `#version 300 es

precision mediump float;

uniform vec4 u_color;

out vec4 outColor;

void main() {
  outColor = u_color;
}
`;

/***/ }),

/***/ "./node_modules/seed-engine/src/const/VertexShader.js":
/*!************************************************************!*\
  !*** ./node_modules/seed-engine/src/const/VertexShader.js ***!
  \************************************************************/
/*! exports provided: DEFAULT_V */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_V", function() { return DEFAULT_V; });
/**
 * Default vertex shader that handles 2D matricies (3x3 matricies) to screen space.
 */
const DEFAULT_V = `#version 300 es

in vec2 a_position;

uniform mat3 u_matrix;

void main() {
  gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
}
`

/***/ }),

/***/ "./node_modules/seed-engine/src/entry.js":
/*!***********************************************!*\
  !*** ./node_modules/seed-engine/src/entry.js ***!
  \***********************************************/
/*! exports provided: Updateable, Audio, BoxCollider, CircleCollider, Collider, Collider2D, Component, Physics, Physics2D, Renderable, Renderable2D, RenderableSquare, Transform, FragmentShader, VertexShader, Bounds, Point, AudioManager, DOMManager, EngineManager, InputManager, Manager, NetworkManager, UpdateableManager, PersistentManager, PhysicsManager, RenderManager, SceneManager, GameObject, SceneObject, PersistentObject, Matrix, Matrix3, Camera, Light, Viewport, Scene, BasicScene, MathUtil, Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Updateable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Updateable */ "./node_modules/seed-engine/src/base/Updateable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Updateable", function() { return _base_Updateable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _component_Audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Audio */ "./node_modules/seed-engine/src/component/Audio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _component_Audio__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _component_BoxCollider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/BoxCollider */ "./node_modules/seed-engine/src/component/BoxCollider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxCollider", function() { return _component_BoxCollider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _component_CircleCollider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/CircleCollider */ "./node_modules/seed-engine/src/component/CircleCollider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleCollider", function() { return _component_CircleCollider__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _component_Collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Collider */ "./node_modules/seed-engine/src/component/Collider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return _component_Collider__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _component_Collider2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/Collider2D */ "./node_modules/seed-engine/src/component/Collider2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collider2D", function() { return _component_Collider2D__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _component_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/Component */ "./node_modules/seed-engine/src/component/Component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component_Component__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _component_Physics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/Physics */ "./node_modules/seed-engine/src/component/Physics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Physics", function() { return _component_Physics__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _component_Physics2D__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/Physics2D */ "./node_modules/seed-engine/src/component/Physics2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Physics2D", function() { return _component_Physics2D__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _component_Renderable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/Renderable */ "./node_modules/seed-engine/src/component/Renderable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderable", function() { return _component_Renderable__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _component_Renderable2D__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/Renderable2D */ "./node_modules/seed-engine/src/component/Renderable2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderable2D", function() { return _component_Renderable2D__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _component_RenderableSquare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/RenderableSquare */ "./node_modules/seed-engine/src/component/RenderableSquare.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderableSquare", function() { return _component_RenderableSquare__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _component_Transform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/Transform */ "./node_modules/seed-engine/src/component/Transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _component_Transform__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _const_FragmentShader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./const/FragmentShader */ "./node_modules/seed-engine/src/const/FragmentShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentShader", function() { return _const_FragmentShader__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _const_VertexShader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./const/VertexShader */ "./node_modules/seed-engine/src/const/VertexShader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexShader", function() { return _const_VertexShader__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _internal_Bounds__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Bounds */ "./node_modules/seed-engine/src/internal/Bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounds", function() { return _internal_Bounds__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _internal_Point__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Point */ "./node_modules/seed-engine/src/internal/Point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _internal_Point__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _manager_AudioManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manager/AudioManager */ "./node_modules/seed-engine/src/manager/AudioManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioManager", function() { return _manager_AudioManager__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _manager_DOMManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manager/DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOMManager", function() { return _manager_DOMManager__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _manager_EngineManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manager/EngineManager */ "./node_modules/seed-engine/src/manager/EngineManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EngineManager", function() { return _manager_EngineManager__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _manager_InputManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manager/InputManager */ "./node_modules/seed-engine/src/manager/InputManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputManager", function() { return _manager_InputManager__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _manager_Manager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./manager/Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _manager_Manager__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _manager_NetworkManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./manager/NetworkManager */ "./node_modules/seed-engine/src/manager/NetworkManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkManager", function() { return _manager_NetworkManager__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _manager_UpdateableManager__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manager/UpdateableManager */ "./node_modules/seed-engine/src/manager/UpdateableManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateableManager", function() { return _manager_UpdateableManager__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _manager_PersistentManager__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manager/PersistentManager */ "./node_modules/seed-engine/src/manager/PersistentManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentManager", function() { return _manager_PersistentManager__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _manager_PhysicsManager__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./manager/PhysicsManager */ "./node_modules/seed-engine/src/manager/PhysicsManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsManager", function() { return _manager_PhysicsManager__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _manager_RenderManager__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manager/RenderManager */ "./node_modules/seed-engine/src/manager/RenderManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderManager", function() { return _manager_RenderManager__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _manager_SceneManager__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manager/SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneManager", function() { return _manager_SceneManager__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _object_GameObject__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./object/GameObject */ "./node_modules/seed-engine/src/object/GameObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return _object_GameObject__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _object_SceneObject__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./object/SceneObject */ "./node_modules/seed-engine/src/object/SceneObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneObject", function() { return _object_SceneObject__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _object_PersistentObject__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./object/PersistentObject */ "./node_modules/seed-engine/src/object/PersistentObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersistentObject", function() { return _object_PersistentObject__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _render_WebGL_Matrix__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./render/WebGL/Matrix */ "./node_modules/seed-engine/src/render/WebGL/Matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _render_WebGL_Matrix__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./render/WebGL/Matrix3 */ "./node_modules/seed-engine/src/render/WebGL/Matrix3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _render_Camera__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./render/Camera */ "./node_modules/seed-engine/src/render/Camera.js");
/* harmony import */ var _render_Camera__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_render_Camera__WEBPACK_IMPORTED_MODULE_33__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _render_Camera__WEBPACK_IMPORTED_MODULE_33___default.a; });
/* harmony import */ var _render_Light__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./render/Light */ "./node_modules/seed-engine/src/render/Light.js");
/* harmony import */ var _render_Light__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_render_Light__WEBPACK_IMPORTED_MODULE_34__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return _render_Light__WEBPACK_IMPORTED_MODULE_34___default.a; });
/* harmony import */ var _render_Viewport__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./render/Viewport */ "./node_modules/seed-engine/src/render/Viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return _render_Viewport__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _scene_Scene__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./scene/Scene */ "./node_modules/seed-engine/src/scene/Scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene_Scene__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _scene_BasicScene__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./scene/BasicScene */ "./node_modules/seed-engine/src/scene/BasicScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicScene", function() { return _scene_BasicScene__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _utils_MathUtil__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./utils/MathUtil */ "./node_modules/seed-engine/src/utils/MathUtil.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MathUtil", function() { return _utils_MathUtil__WEBPACK_IMPORTED_MODULE_38__; });
/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Engine */ "./node_modules/seed-engine/src/Engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _Engine__WEBPACK_IMPORTED_MODULE_39__["default"]; });

//base


//component













//const



//internal



//manager












//object




//prefab

//render
    //WebGL
    
    




//scene



//utils










/***/ }),

/***/ "./node_modules/seed-engine/src/internal/Bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/seed-engine/src/internal/Bounds.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bounds; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./node_modules/seed-engine/src/internal/Point.js");


/**
 * Two points which represent a bounding square.
 * 
 * TODO: Add z index for 3D.
 */
class Bounds {
    /**
     * 
     * @param {number} x The x position of the bounding box. (x1)
     * @param {number} y The y position of the bounding box. (y1)
     * @param {number} w The end x position, or width, of the bounding box. (x2)
     * @param {number} h The end x position, or height, of the bounding box. (y2)
     */
    constructor(x, y, w, h) {
        this.p1 = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
        this.p2 = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](w, h);
    }

    /**
     * Sets the bounding box to a new position.
     * 
     * @param {number} x The x position of the bounding box. (x1)
     * @param {number} y The y position of the bounding box. (y1)
     * @param {number} w The end x position, or width, of the bounding box. (x2)
     * @param {number} h The end x position, or height, of the bounding box. (y2)
     */
    set(x, y, w, h) {
        this.p1.set(x, y);
        this.p2.set(w, h);
    }

    /**
     * Checks to see if the point [parameter 0] is within bounds.
     * 
     * @param {Point} point Point to check within bounds.
     */
    isInBounds(point) {
        return (point.x >= this.p1.x && point.x <= this.p2.x
                && point.y >= this.p1.y && point.y <= this.p2.y
                && point.z >= this.p1.z && point.z <= this.p2.z);
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/internal/Color.js":
/*!********************************************************!*\
  !*** ./node_modules/seed-engine/src/internal/Color.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
/**
 * A color with r, g, b, a values between 0 and 1.
 * 
 * Contains instatiation functions for creating default 
 * colors without explicitly defining the values.
 */
class Color {
    /**
     * Builds a color into an array for easy access for WebGL.
     * 
     * @param {number} r Red value between 0 - 1
     * @param {number} g Green value between 0 - 1
     * @param {number} b Blue value between 0 - 1
     * @param {number} a Alpha value between 0 - 1
     */
    constructor(r = 1, g = 0.078, b = 0.576, a = 1) {
        this.color = [r, g, b, a];
    }

    /**
     * 
     * @param {number} r Red value between 0 - 1. Defaults to previous value.
     * @param {number} g Green value between 0 - 1. Defaults to previous value.
     * @param {number} b Blue value between 0 - 1. Defaults to previous value.
     * @param {number} a Alpha value between 0 - 1. Defaults to previous value.
     */
    set(r = this.color[0], g = this.color[1], b = this.color[2], a = this.color[3]) {
        this.color = [r, g, b, a];
    }

    /**
     * Returns a new color with the color green. Value: #00FF00 with alpha 1.
     */
    static green() {
        return new Color(0, 1, 0, 1);
    }

    /**
     * Returns a new color with the color blue. Value: #0000FF with alpha 1.
     */
    static blue() {
        return new Color(0, 0, 1, 1);
    }

    /**
     * Returns a new color with the color red. Value: #FF0000 with alpha 1.
     */
    static red() {
        return new Color(1, 0, 0, 1);
    }

    /**
     * Returns a new color with the color pink. Value: #FF1493 with alpha 1.
     */
    static pink() {
        return new Color([1, 0.078, 0.576, 1]);
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/internal/Point.js":
/*!********************************************************!*\
  !*** ./node_modules/seed-engine/src/internal/Point.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/**
 * A point with x, y, z values. It may also be referred to as a Vector.
 */
class Point {
    /**
     * An x, y, z point. Default parameters are set as 0.
     * 
     * @param {number} x X position of the point.
     * @param {number} y Y position of the point.
     * @param {number} z Z position of the point.
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    /**
     * Sets the point to a new x, y, z. Previous values are set
     * as default parameters.
     * 
     * @param {number} x X position of the point.
     * @param {number} y Y position of the point.
     * @param {number} z Z position of the point.
     */
    set(x = this.x, y = this.y, z = this.z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/AudioManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/AudioManager.js ***!
  \**************************************************************/
/*! exports provided: _AudioManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_AudioManager", function() { return _AudioManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


class _AudioManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }

}

/**
 * Singleton reference to the Audio Manager.
 */
const AudioManager = new _AudioManager();
/* harmony default export */ __webpack_exports__["default"] = (AudioManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/DOMManager.js":
/*!************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/DOMManager.js ***!
  \************************************************************/
/*! exports provided: _DOMManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DOMManager", function() { return _DOMManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


/**
 * Manages the connection between the DOM and the Game & Engine.
 * 
 * The DOMManager sets up and holds reference to the DOM elements required to display the game.
 */
class _DOMManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Initializes defaults for the DOMManager to hold once started.
     */
    constructor() {
        super();
        this.canvas = null;
        this.GL = null;
    }

    /**
     * Loads the canvas & setup for WebGL.
     */
    start() {
        this.loadCanvas();
    }
    
    /**
     * Loads the canvas & sets up a WebGL2 context to be used by the engine by the id 'game'. If nothing is happening on screen,
     * ensure that the canvas you are using has this id in its HTML tag.
     */
    loadCanvas() {
        this.canvas = document.getElementById('game');
        if (this.canvas == null)
            throw "Error finding DOM Canvas. The canvas requires an id='game'";
        this.GL = this.canvas.getContext('webgl2');
    }
}

/**
 * Singleton reference to the DOM Manager.
 */
const DOMManager = new _DOMManager();
/* harmony default export */ __webpack_exports__["default"] = (DOMManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/EngineManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/EngineManager.js ***!
  \***************************************************************/
/*! exports provided: _EngineManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_EngineManager", function() { return _EngineManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
/* harmony import */ var _RenderManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderManager */ "./node_modules/seed-engine/src/manager/RenderManager.js");
/* harmony import */ var _ProgramManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramManager */ "./node_modules/seed-engine/src/manager/ProgramManager.js");
/* harmony import */ var _SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");
/* harmony import */ var _DOMManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");
/* harmony import */ var _PersistentManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PersistentManager */ "./node_modules/seed-engine/src/manager/PersistentManager.js");







/**
 *  A singleton & Manager.
 * 
 * This class manages the core ECS system & game loop. It calls all other Managers
 * required to start. 
 * 
 * TODO: This system will be rewritten to allow Manager plugins to be added by the 
 * user without editing the Engine.
 */
class _EngineManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.MS_PER_FRAME = 30;
        this.coreUpdateLoopHandle = null;
        this.hasPaused = false;
    }

    /**
     * Called when the Engine should start all systems.
     * This also includes specific setup code to get the game running, 
     * including setting up the render loop.
     */
    start() {
        //Needs to be first to target the canvas.
        _DOMManager__WEBPACK_IMPORTED_MODULE_4__["default"].start();
        _PersistentManager__WEBPACK_IMPORTED_MODULE_5__["default"].start();
        _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].start();

        //Needs to be ahead of RenderManager to init Programs for WebGL.
        _ProgramManager__WEBPACK_IMPORTED_MODULE_2__["default"].start();
        _RenderManager__WEBPACK_IMPORTED_MODULE_1__["default"].start();

        this.coreUpdateLoopHandle = setInterval(() => {
            if (!this.hasPaused) {
                this.update();
            }
        }, this.MS_PER_FRAME);
    }

    /**
     * The EngineManager sets up a loop on start() to call this function.
     * Recalling this function will force a game update.
     */
    update() {
        _PersistentManager__WEBPACK_IMPORTED_MODULE_5__["default"].update();
        _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].update();
        _RenderManager__WEBPACK_IMPORTED_MODULE_1__["default"].update();
    }

    /**
     * Ends the Engine by calling all manager end functions.
     */
    end() {
        _PersistentManager__WEBPACK_IMPORTED_MODULE_5__["default"].end();
        _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].end();
        _RenderManager__WEBPACK_IMPORTED_MODULE_1__["default"].end();
        clearInterval(this.coreUpdateLoopHandle);
        _DOMManager__WEBPACK_IMPORTED_MODULE_4__["default"].end();
    }

    /**
     * Pauses the Engine by calling all manager pause functions.
     */
    pause() {
        _RenderManager__WEBPACK_IMPORTED_MODULE_1__["default"].pause();
        _PersistentManager__WEBPACK_IMPORTED_MODULE_5__["default"].pause();
        _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].pause();
        this.hasPaused = true;
    }

    /**
     * Unpauses the Engine by calling all manager unpause functions.
     */
    unpause() {
        _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].unpause();
        _PersistentManager__WEBPACK_IMPORTED_MODULE_5__["default"].unpause();
        _RenderManager__WEBPACK_IMPORTED_MODULE_1__["default"].unpause();
        this.hasPaused = false;
    }
}

/**
 * Singleton reference to the Engine Manager.
 */
const EngineManager = new _EngineManager();
/* harmony default export */ __webpack_exports__["default"] = (EngineManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/InputManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/InputManager.js ***!
  \**************************************************************/
/*! exports provided: _InputManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_InputManager", function() { return _InputManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


class _InputManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }

}

/**
 * Singleton reference to the Input Manager.
 */
const InputManager = new _InputManager(); 
/* harmony default export */ __webpack_exports__["default"] = (InputManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/Manager.js":
/*!*********************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/Manager.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/**
 * Baseclass for all Managers.
 * 
 * In order for a new Manager to be added to the engine, it must inherit
 * this class and define these functions to be recognized by the Engine.
 * 
 * TODO: Finish Plugins in Engine Manager & implement optional function calls on updateables.
 */

class Manager {
    constructor() {

    }
    
    start() {}
    update() {}
    end() {}
    pause() {}
    unpause() {}
}

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/NetworkManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/NetworkManager.js ***!
  \****************************************************************/
/*! exports provided: _NetworkManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_NetworkManager", function() { return _NetworkManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


class _NetworkManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }

}

/**
 * Singleton reference to the Network Manager.
 */
const NetworkManager = new _NetworkManager();
/* harmony default export */ __webpack_exports__["default"] = (NetworkManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/PersistentManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/PersistentManager.js ***!
  \*******************************************************************/
/*! exports provided: _PersistentManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PersistentManager", function() { return _PersistentManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


/**
 * Manages all Persistent Objects in the Engine. A PersistentObject is a child of 
 * GameObject, and sibling of SceneObjects.
 * 
 * PersistentObjects exist and update in all scenes, changing scenes will not inturrupt this object.
 */
class _PersistentManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.persistentObjects = {};
    }

    /**
     * When a PersistentObject is created, it is assigned to the PersistentManager through this function.
     * The manager will keep reference to the Object and handle Engine events.
     * 
     * @param {persistentObject} persistentObject A PersistentObject.
     */
    registerPersistentObject(persistentObject) {
        this.persistentObjects[persistentObject.id] = persistentObject;
        let deregisterCallback = () => {
            delete this.persistentObjects[persistentObject.id];
        }
        return deregisterCallback;
    }

    /**
     * Calls update on all Persistent Objects.
     */
    update() {
        let objKeys = Object.keys(this.persistentObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.persistentObjects[objKeys[i]].update();
        }
    }

    /**
     * Calls end on all Persistent Objects.
     */
    end() {
        let objKeys = Object.keys(this.persistentObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.persistentObjects[objKeys[i]].end();
        }
    }

    /**
     * Calls pause on all Persistent Objects.
     */
    pause() {
        let objKeys = Object.keys(this.persistentObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.persistentObjects[objKeys[i]].pause();
        }
    }

    /**
     * Calls unpause on all Persistent Objects.
     */
    unpause() {
        let objKeys = Object.keys(this.persistentObjects);
        for (let i = 0; i < objKeys.length; i++) {
            this.persistentObjects[objKeys[i]].unpause();
        }
    }
}

/**
 * Singleton reference to the Persistent Objects Manager.
 */
const PersistentManager = new _PersistentManager();
/* harmony default export */ __webpack_exports__["default"] = (PersistentManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/PhysicsManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/PhysicsManager.js ***!
  \****************************************************************/
/*! exports provided: _PhysicsManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PhysicsManager", function() { return _PhysicsManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


class _PhysicsManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }

}

/**
 * Singleton reference to the Physics Manager.
 */
const PhysicsManager = new _PhysicsManager();
/* harmony default export */ __webpack_exports__["default"] = (PhysicsManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/ProgramManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/ProgramManager.js ***!
  \****************************************************************/
/*! exports provided: _ProgramManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ProgramManager", function() { return _ProgramManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
/* harmony import */ var _DOMManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");
/* harmony import */ var _const_VertexShader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/VertexShader */ "./node_modules/seed-engine/src/const/VertexShader.js");
/* harmony import */ var _const_FragmentShader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/FragmentShader */ "./node_modules/seed-engine/src/const/FragmentShader.js");





/**
 * Manages WebGL Programs so that they only need to be created once across the engine
 * allowing multiple objects to still share the same reference.
 * 
 * Elliminates the need for the programmer to compile shaders and create programs, and eases 
 * on-the-fly Shader compiling.
 */
class _ProgramManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.programIDCounter = 0;
        this.programs = {};
    }

    /**
     * Creates default programs for easy reference later on.
     */
    start() {
        this.addProgram('Default', _const_VertexShader__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_V"], _const_FragmentShader__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_F"]);
    }

    /**
     * Returns a Program JSON Object containing the program, name and id.
     * 
     * @param {string} programKey Name of the program.
     * 
     * @returns {Program Object} Returns a JSON object with Program data.
     */
    getProgram(programKey) {
        if (this.programs[programKey] == null)
            throw 'Program does not exist!';
        return this.programs[programKey];
    }

    /**
     * Creates a Program JSON Object and initializes the program and metadata.
     * The program is added to the programs array.
     * 
     * @param {string} programName Name of the program.
     * @param {string} vertexShaderSource Source code of the vertex shader.
     * @param {string} fragmentShaderSource Source code of the fragment shader.
     */
    addProgram(programName, vertexShaderSource, fragmentShaderSource) {
        this.programs[programName] = {
            name: programName,
            id: this.programIDCounter++,
            program: this._createProgram(vertexShaderSource, fragmentShaderSource),
        };
    }

    /**
     * Creates a WebGL program from a compiled vertex and fragment shader. The program is returned.
     * 
     * @param {CompiledVertexShader} vertexShader A compiled vertex shader.
     * @param {CompiledFragmentShader} fragmentShader A compiled fragment shader.
     * 
     * @returns {Program} A WebGL program. Null if unsuccessful.
     */
    _createShadersProgram(vertexShader, fragmentShader) {
        let program = _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.createProgram();
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.attachShader(program, vertexShader);
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.attachShader(program, fragmentShader);
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.linkProgram(program);
        let success = _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.getProgramParameter(program, _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.LINK_STATUS);
        if (success) {
            return program;
        }

        console.error(_DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.getProgramInfoLog(program));
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.deleteProgram(program);
        return null;
    }

    /**
     * Creates a shader of either Vertex or Fragment type and returns the compiled version.
     * 
     * @param {GLShaderType} type A GL shader type of either VERTEX_SHADER or FRAGMENT_SHADER.
     * @param {string} source Source code for the shader type.
     * 
     * @returns {CompiledShader} A compiled shader. Null if unsuccessful.
     */
    _createShader(type, source) {
        let shader = _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.createShader(type);
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.shaderSource(shader, source);
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.compileShader(shader);
        let success = _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.getShaderParameter(shader, _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.COMPILE_STATUS);
        if (success) {
            return shader;
        }

        console.error(_DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.getShaderInfoLog(shader));
        _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.deleteShader(shader);
        return null;
    }

    /**
     * Compiles the vertex shader and fragment shader and returns a WebGL program.
     * 
     * @param {string} vertexShaderSource Source code for a vertex shader.
     * @param {string} fragmentShaderSource Source code for a fragment shader.
     * 
     * @returns {Program} A program compiled from the two shader sources.
     */
    _createProgram(vertexShaderSource, fragmentShaderSource) {
        let vertexShader = this._createShader(_DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.VERTEX_SHADER, vertexShaderSource);
        let fragmentShader = this._createShader(_DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL.FRAGMENT_SHADER, fragmentShaderSource);

        return this._createShadersProgram(vertexShader, fragmentShader);
    }
}

/**
 * Singleton reference to the WebGL Program Manager.
 */
const ProgramManager = new _ProgramManager();
/* harmony default export */ __webpack_exports__["default"] = (ProgramManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/RenderManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/RenderManager.js ***!
  \***************************************************************/
/*! exports provided: _RenderManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RenderManager", function() { return _RenderManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
/* harmony import */ var _DOMManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");
/* harmony import */ var _ProgramManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramManager */ "./node_modules/seed-engine/src/manager/ProgramManager.js");
/* harmony import */ var _SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");
/* harmony import */ var _const_VertexShader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const/VertexShader */ "./node_modules/seed-engine/src/const/VertexShader.js");
/* harmony import */ var _const_FragmentShader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const/FragmentShader */ "./node_modules/seed-engine/src/const/FragmentShader.js");
/* harmony import */ var _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/WebGL/Matrix3 */ "./node_modules/seed-engine/src/render/WebGL/Matrix3.js");








class _RenderManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.GL = null;
        this.currentProgram = null;
    }

    /**
     * Initial setup on GL rendering. 
     */
    start() {
        this.GL = _DOMManager__WEBPACK_IMPORTED_MODULE_1__["default"].GL;

        this._updateProgram(_ProgramManager__WEBPACK_IMPORTED_MODULE_2__["default"].getProgram('Default'));
        
        this.positionAttributeLocation = this.GL.getAttribLocation(this.currentProgram.program, "a_position");
        this.colorLocation = this.GL.getUniformLocation(this.currentProgram.program, "u_color");
        this.matrixLocation = this.GL.getUniformLocation(this.currentProgram.program, "u_matrix");

        let positionBuffer = this.GL.createBuffer();

        this.GL.bindBuffer(this.GL.ARRAY_BUFFER, positionBuffer);

        this.GL.bufferData(this.GL.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), this.GL.STATIC_DRAW);

        this.vao = this.GL.createVertexArray();

        this.GL.bindVertexArray(this.vao);

        this.GL.enableVertexAttribArray(this.positionAttributeLocation);

        let size = 2;
        let type = this.GL.FLOAT;
        let normalize = false;
        let stride = 0;
        let vertexOffset = 0;
        this.GL.vertexAttribPointer(this.positionAttributeLocation, size, type, normalize, stride, vertexOffset);
    }

    /**
     * Checks if the program for the next object to draw must be changed.
     * If it does, it will change WebGL programs.
     * 
     * @param {ProgramObject} program A program object returned from ProgramManager.getProgram()
     */
    _updateProgram(program) {
        if (this.currentProgram == null || this.currentProgram.id != program.id) {
            console.info('switching programs')
            this.GL.useProgram(program.program);
            this.currentProgram = program;
        }
    }

    /**
     * Update function for updating all renderable objects in each viewport in the current scene.
     */
    update() {
        this.GL.clearColor(0, 0, 0, 0);
    
        this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);

        let viewports = _SceneManager__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentScene().viewports;

        for (let vi = 0; vi < viewports.length; vi++) {
            let viewport = viewports[vi];

            let viewPortWidth = viewport.bounds.p2.x - viewport.bounds.p1.x;
            let viewPortHeight = viewport.bounds.p2.y - viewport.bounds.p1.y;

            this.GL.viewport(viewport.bounds.p1.x, viewport.bounds.p1.y, viewport.bounds.p2.x, viewport.bounds.p2.y);

            //setup camera from viewport

            let renderables = viewport.renderables;
            let renderableKeys = Object.keys(renderables);
            for (let ri = 0; ri < renderableKeys.length; ri++) {
                let renderable = renderables[renderableKeys[ri]];

                this._updateProgram(renderable.program);

                this.GL.uniform4fv(this.colorLocation, renderable.color.color);
                this.GL.uniformMatrix3fv(this.matrixLocation, false, _render_WebGL_Matrix3__WEBPACK_IMPORTED_MODULE_6__["default"].projection(viewPortWidth, viewPortHeight).multiply(renderable.getMatrix()).m);


                this.GL.drawArrays(renderable.primitiveType, 0, renderable.primitiveCount);
            }
        }
    }
}

/**
 * Singleton reference to the Rendering Manager.
 */
const RenderManager = new _RenderManager();
/* harmony default export */ __webpack_exports__["default"] = (RenderManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/SceneManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/SceneManager.js ***!
  \**************************************************************/
/*! exports provided: _SceneManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SceneManager", function() { return _SceneManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");
/* harmony import */ var _object_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/GameObject */ "./node_modules/seed-engine/src/object/GameObject.js");



/**
 * A manager which manages all scenes and passes commands to the current scene.
 * 
 * Manages scenes on a stack, pausing scenes below them (stopping rendering), and managing
 * the top scene for triggering updates on all objects on the scene.
 * 
 * GameObjects, components, or anything else can use the SceneManager to reference the
 * current active scene. There are also wrapper functions for passing SceneObjects and
 * Viewports to the current scene for registration with that scene.
 */
class _SceneManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.scenes = [];
    }

    /**
     * Adds a SceneObject to the current scene on the stack. The scene will hold 
     * reference and manage the SceneObject.
     * 
     * @param {SceneObject} sceneObject The SceneObject that is being registered.
     */
    registerSceneObject(sceneObject) {
        let scene = this.getCurrentScene();
        if (scene != null)
            return scene.registerSceneObject(sceneObject);
    }

    /**
     * Addsa viewport to the current scene on the stack. The scene will hold reference
     * to the viewport.
     * 
     * @param {viewport} viewport The Viewport that is being registered.
     */
    registerViewport(viewport) {
        let scene = this.getCurrentScene();
        if (scene != null)
            scene.registerViewport(viewport);
    }

    /**
     * Gets the current scene on the stack. This scene will be the one currently
     * used in the update loop.
     */
    getCurrentScene() {
        if (this.scenes.length > 0)
            return this.scenes[this.scenes.length - 1];
        return null;
    }

    /**
     * Starts the current scene on the stack.
     */
    start() {
        if (this.scenes.length > 0) {
            this.scenes[this.scenes.length - 1].start();
        }
    }

    /**
     * Updates the current scene and all SceneObjects that are assigned to that
     * scene.
     */
    update() {
        let scene = this.getCurrentScene();
        if (scene != null) {
            scene.update();
            for (let i = 0; i < scene.sceneObjects.length; i++) {
                scene.sceneObjects[i].update();
            }
        }
    }

    /**
     * Ends all scenes, starting from the top & poping each scene off the stack as it goes.
     */
    end() {
        while (this.scenes.length > 0) {
            this.scenes[this.scenes.length - 1].pop().end();
        }
    }

    /**
     * Pauses the current scene.
     */
    pause() {
        if (this.scenes.length > 0)
            this.scenes[this.scenes.length - 1].pause();
    }
    
    /**
     * Unpauses the current scene.
     */
    unpause() {
        if (this.scenes.length > 0)
            this.scenes[this.scenes.length - 1].unpause();
    }

    /**
     * Adds the new scene to the top of the stack, pausing the current
     * scene first.
     * 
     * @param {Scene} scene The new scene.
     */
    addScene(scene) {
        this.pause();
        this.scenes.push(scene);
    }

    /**
     * Removes the top scene from the stack, calls its end() function,
     * and unpauses the scene below it.
     */
    removeScene() {
        this.scenes.pop().end();
        this.unpause();
    }
}

/**
 * Singleton reference to the Scene Manager.
 */
const SceneManager = new _SceneManager();
/* harmony default export */ __webpack_exports__["default"] = (SceneManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/manager/UpdateableManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/seed-engine/src/manager/UpdateableManager.js ***!
  \*******************************************************************/
/*! exports provided: _UpdateableManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_UpdateableManager", function() { return _UpdateableManager; });
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/seed-engine/src/manager/Manager.js");


/**
 * Singleton manager that manages all Updateable Objects. All updateable objects are given a global game
 * ID (number) which can be used to distinguish it.
 * 
 * Any object that descends from Updateable will have an ID.
 */
class _UpdateableManager extends _Manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Constructor for UpdateableManager. Holds the static ID counter.
     */
    constructor() {
        super();
        this.updateableIDCounter = 0;
    }

    /**
     * Gives an ID and a way to unsubscribe from the Updateable binding with the manager.
     * 
     * Since the UpdateableManager does nothing to bind the Updateable to the manager, there is no code in the callback
     * assigned. However, the pattern is there to outline a default.
     * 
     * @param {Updateable} updateable The updateable to be registered.
     */
    registerUpdateable(updateable) {
        updateable.id = this.updateableIDCounter++;
        let deregisterCallback = () => {}
        return deregisterCallback;
    }
}

/**
 * Singleton reference to the Object Manager.
 */
const UpdateableManager = new _UpdateableManager();
/* harmony default export */ __webpack_exports__["default"] = (UpdateableManager);

/***/ }),

/***/ "./node_modules/seed-engine/src/object/GameObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/seed-engine/src/object/GameObject.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
/* harmony import */ var _base_Updateable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Updateable */ "./node_modules/seed-engine/src/base/Updateable.js");
/* harmony import */ var _component_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Component */ "./node_modules/seed-engine/src/component/Component.js");
/* harmony import */ var _component_Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Transform */ "./node_modules/seed-engine/src/component/Transform.js");




/**
 * Baseclass GameObject which derives from Updateable.
 * 
 * Do not derive this class directly! GameObjects are not managed until they are assigned to a manager.
 * Instead, derive SceneObject or PersistentObject to create objects that exist the scope of a scene, or the scope of the game.
 * 
 * All objects that should exist in the game screen should derive this. 
 */
class GameObject extends _base_Updateable__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Default position, size and rotation of the Object.
     * 
     * @param {Point} position A point of creation in the world.
     * @param {Point} size A point representing scale of the object.
     * @param {number} rotation A number representing angular rotation (in degrees).
     */
    constructor(position = new Point(0, 0, 0), size = new Point(32, 32, 1), rotation = 0) {
        super();
        this.className = 'GameObject';

        this.components = {};
        this.addComponent(new _component_Transform__WEBPACK_IMPORTED_MODULE_2__["default"](position, size, rotation));
        this.transform = this.getComponent("Transform");
    }

    /**
     * Adds a component to this game object, and keeps reference to it.
     * GameObjects will handle their components as they are added to the object.
     * 
     * @param {Component} component The component assigned to this object.
     */
    addComponent(component) {
        if (this.components[component.className] == null) {
            this.components[component.className] = [];
        }
        if (component.isUnique && this.components[component.className].length > 0) {
            throw 'There is already a unique component of type ' + component.className + ' on this GameObject!';
            return false;
        }
        this.components[component.className].push(component);
        component.gameObject = this;
        component.onAddComponent();
        return true;
    }

    /**
     * Removes a single component from this GameObject by ID.
     * 
     * @param {number} componentID Id of the component to remove.
     */
    removeComponent(componentID) {
        if (this.components[component.className] == null)
            return false;
        for (let i = 0; i < this.components[component.className].length; i++) {
            if (this.components[component.className][i].id === componentID) {
                this.components[component.className][i].end();
                this.components[component.className].splice(i, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * Removes all Components of the named type.
     * 
     * @param {string} componentName The name of the components to clear.
     */
    removeComponents(componentName) {
        if (this.components[componentName] == null)
            return false;
        for (let i = 0; i < this.components[componentName].length; i++) {
            this.components[componentName][i].end();
            this.components[componentName].splice(i, 1);
        }
        return true;
    }

    /**
     * Removes all components except for the Transform component.
     */
    removeAllComponents() {
        let compTypes = Object.keys(this.components);
        for (let i = 0; i < compTypes.length; i++) {
            let thisCompType = compTypes[i];
            if (thisCompType === 'Transform')
                continue;
            for (let ii = 0; ii < this.components[thisCompType].length; ii++) {
                this.components[thisCompType][ii].end();
                this.components[thisCompType].splice(ii, 1);
            }
        }
        return true;
    }

    /**
     * Returns a boolean on if there is a component of type {componentName}.
     * 
     * @param {string} componentName Name of the component type to search for.
     * 
     * @returns {boolean} true if there is at least one component of this type.
     */
    hasComponent(componentName) {
        if (this.components[componentName] == null) {
            return false;
        }
        return this.components[componentName].length > 0;
    }

    /**
     * Returns a component of type {componentName}. The second parameter can determine which 
     * Component of that type to return if there are more than 1. 
     * 
     * @param {string} componentName Name of the component type to return.
     * @param {*} index Index of the component to get. Defaults to first component.
     */
    getComponent(componentName, index = 0) {
        if (this.components[componentName] == null) {
            return null;
        }
        return this.components[componentName][index];
    }

    /**
     * Updates all components on this GameObject.
     */
    updateComponents() {
        let compTypes = Object.keys(this.components);
        for (let i = 0; i < compTypes.length; i++) {
            let thisCompType = compTypes[i];
            for (let ii = 0; ii < this.components[thisCompType].length; ii++) {
                this.components[thisCompType][ii].update();
            }
        }
    }
    
    /**
     * Rewritten postStartUpdate() functions which is originally defined in Updateable.
     * The GameObject adds a pre and post update function, and respective overrideable callbacks
     * (onPreUpdate and onPostUpdate).
     */
    postStartUpdate() {
        if (this.hasPaused)
            return;
        
        this.preUpdate();
        this.onUpdate();
        this.updateComponents();
        this.postUpdate();
    }

    /**
     * Called by the GameObject before an update to do default calls for preUpdating. Afterwards it
     * calls the overrideable function, onPreUpdate.
     */
    preUpdate() {
        this.onPreUpdate();
    }

    /**
     * Called by the GameObject after an update to do default calls for postUpdating. Afterwards it
     * calls the overrideable function, onPostUpdate.
     */
    postUpdate() {
        this.onPostUpdate();
    }

    /**
     * Override for Pre Update functionality.
     */
    onPreUpdate() {}

    /**
     * Override for Post Update functionality.
     */
    onPostUpdate() {}
}

/***/ }),

/***/ "./node_modules/seed-engine/src/object/PersistentObject.js":
/*!*****************************************************************!*\
  !*** ./node_modules/seed-engine/src/object/PersistentObject.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersistentObject; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./node_modules/seed-engine/src/object/GameObject.js");
/* harmony import */ var _manager_PersistentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/PersistentManager */ "./node_modules/seed-engine/src/manager/PersistentManager.js");



/**
 * A GameObject which exists across scenes. 
 * 
 * Objects which derive PersistentObjects do not belong to any one scene. 
 * If the derived object is intended to be rendered cross scene, the renderable component's
 * viewports must be reassigned on scene changes.
 */
class PersistentObject extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Default position, size and rotation of the Object.
     * 
     * @param {Point} position A point of creation in the world.
     * @param {Point} size A point representing scale of the object.
     * @param {number} rotation A number representing angular rotation (in degrees).
     */
    constructor(position = new Point(0, 0, 0), size = new Point(32, 32, 1), rotation = 0) {
        super(position, size, rotation);
        this.deregister = _manager_PersistentManager__WEBPACK_IMPORTED_MODULE_1__["default"].registerSceneObject(this);
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/object/SceneObject.js":
/*!************************************************************!*\
  !*** ./node_modules/seed-engine/src/object/SceneObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SceneObject; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./node_modules/seed-engine/src/object/GameObject.js");
/* harmony import */ var _manager_SceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");



/**
 * A GameObject which exists only on the current active scene.
 * When this object is instantiated, it registers with the current active scene
 * through the SceneManager.
 * 
 */
class SceneObject extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Default position, size and rotation of the Object.
     * 
     * @param {Point} position A point of creation in the world.
     * @param {Point} size A point representing scale of the object.
     * @param {number} rotation A number representing angular rotation (in degrees).
     */
    constructor(position = new Point(0, 0, 0), size = new Point(32, 32, 1), rotation = 0) {
        super(position, size, rotation);
        this.deregister = _manager_SceneManager__WEBPACK_IMPORTED_MODULE_1__["default"].registerSceneObject(this);
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/render/Camera.js":
/*!*******************************************************!*\
  !*** ./node_modules/seed-engine/src/render/Camera.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/seed-engine/src/render/Light.js":
/*!******************************************************!*\
  !*** ./node_modules/seed-engine/src/render/Light.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/seed-engine/src/render/Viewport.js":
/*!*********************************************************!*\
  !*** ./node_modules/seed-engine/src/render/Viewport.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _manager_SceneManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/SceneManager */ "./node_modules/seed-engine/src/manager/SceneManager.js");
/* harmony import */ var _manager_DOMManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");
/* harmony import */ var _base_Updateable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Updateable */ "./node_modules/seed-engine/src/base/Updateable.js");
/* harmony import */ var _internal_Bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/Bounds */ "./node_modules/seed-engine/src/internal/Bounds.js");





/**
 * A viewport is a display port on the game canvas. Each scene can have multiple
 * viewports and renderable objects are assigned to the ones they want to be drawn on.
 * 
 * Viewports contain lighting and cameras.
 * 
 * GameObjects and their components exist across all viewports, it is up to the programmer
 * to specify the viewports to render to.
 * 
 * Examples on when to use viewports: 
 * - UI
 * - Minimaps
 * - Different views
 * 
 * TODO: An object of keys represented by 'z' indexes to store all 
 * renderable objects in render order.
 */
class Viewport extends _base_Updateable__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(x, y, w, h) {
        super();
        this.bounds = new _internal_Bounds__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, w, h);

        this.renderables = {};
    }

    /**
     * Register an Updateable component with this viewport for drawing.
     * 
     * @param {Renderable} renderable Renderable component to register.
     */
    registerRenderableComponent(renderable) {
        this.renderables[renderable.id] = renderable;
        let deregisterCallback = () => {
            delete this.renderables[renderable.id];
        }
        return deregisterCallback;
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/render/WebGL/Matrix.js":
/*!*************************************************************!*\
  !*** ./node_modules/seed-engine/src/render/WebGL/Matrix.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });

/**
 * Baseclass for a Matrix. Use Matrix3 or Matrix4 for 2D and 3D matrix math.
 */
class Matrix {

    setPosition(x, y) {}

    setScale(scaleX, scaleY) {}

    setRotation(rotationDegree) {}

    copy() {}

    add(m) {}

    multiply(m) {}
}

/***/ }),

/***/ "./node_modules/seed-engine/src/render/WebGL/Matrix3.js":
/*!**************************************************************!*\
  !*** ./node_modules/seed-engine/src/render/WebGL/Matrix3.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix3; });
/* harmony import */ var _utils_MathUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/MathUtil */ "./node_modules/seed-engine/src/utils/MathUtil.js");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ "./node_modules/seed-engine/src/render/WebGL/Matrix.js");




class Matrix3 extends _Matrix__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(data = [1,0,0,0,1,0,0,0,1]) {
        super();
        //default x = 0, y = 0, scaleXY = 1, rotation = 0
        this.m = data;
        return this;
    }

    /**
     * Sets the translation positions of the matrix with x, y points. This overwrites the values and 
     * does not adjust the parameters to work relative to the rest of the matrix values.
     * 
     * @param {number} x X position.
     * @param {number} y Y position.
     */
    setPosition(x, y) {
        this.m[6] = x;
        this.m[7] = y;
    }

    /**
     * Sets the scale values of the matrix with w, h values. This overwrites the values and 
     * does not adjust the parameters to work relative to the rest of the matrix values.
     * 
     * @param {number} x X scale.
     * @param {number} y Y scale.
     */
    setScale(x, y) {
        this.m[0] = x;
        this.m[4] = y;
    }

    /**
     * Sets the matrix rotation values to rotate an object around the z axis. This overwrites the values and 
     * does not adjust the parameters to work relative to the rest of the matrix values.
     * 
     * @param {number} rotationDegree 
     */
    setRotation(rotationDegree) {
        let rad = _utils_MathUtil__WEBPACK_IMPORTED_MODULE_0__["degToRad"](rotationDegree);
        let c = Math.cos(rad);
        let s = Math.sin(rad);
        this.m[0] = c;
        this.m[1] = -s;
        this.m[3] = s;
        this.m[4] = c;
    }

    /**
     * Makes a copy of the matrix3. This is a static function and can be called
     * from Matrix3 prototype.
     * 
     * @param {Matrix3} matrix The matrix3 to copy.
     */
    static copy(matrix) {
        return new Matrix3(matrix.m.slice(0, matrix.m.length));
    }

    /**
     * Adds a matrix to this matrix.
     * 
     * @param {Matrix3} m3 The matrix to add to this matrix.
     */
    add(m3) {
        throw 'unimplemented';
    }

    /**
     * Static function which returns a projection matrix converting the
     * top left coordinates to 0, 0, and bottom right to w, h.
     * 
     * (Converted from -1, -1 top left to 1, 1 bottom right.)
     * 
     * @param {number} w Width of the projection.
     * @param {number} h Height of the projection.
     */
    static projection(w, h) {
        return new Matrix3([
        2 / w, 0, 0,
        0, -2 / h, 0,
        -1, 1, 1]);
    }

    /**
     * Multiplies a matrix into this matrix.
     * 
     * @param {Matrix3} m3 The matrix to multiply to this matrix.
     */
    multiply(m3) {
        let mat = new Matrix3();
        mat.m[0] = (this.m[0] * m3.m[0]) + (this.m[3] * m3.m[1]) + (this.m[6] * m3.m[2]);
        mat.m[1] = (this.m[1] * m3.m[0]) + (this.m[4] * m3.m[1]) + (this.m[7] * m3.m[2]);
        mat.m[2] = (this.m[2] * m3.m[0]) + (this.m[5] * m3.m[1]) + (this.m[8] * m3.m[2]);

        mat.m[3] = (this.m[0] * m3.m[3]) + (this.m[3] * m3.m[4]) + (this.m[6] * m3.m[5]);
        mat.m[4] = (this.m[1] * m3.m[3]) + (this.m[4] * m3.m[4]) + (this.m[7] * m3.m[5]);
        mat.m[5] = (this.m[2] * m3.m[3]) + (this.m[5] * m3.m[4]) + (this.m[8] * m3.m[5]);

        mat.m[6] = (this.m[0] * m3.m[6]) + (this.m[3] * m3.m[7]) + (this.m[6] * m3.m[8]);
        mat.m[7] = (this.m[1] * m3.m[6]) + (this.m[4] * m3.m[7]) + (this.m[7] * m3.m[8]);
        mat.m[8] = (this.m[2] * m3.m[6]) + (this.m[5] * m3.m[7]) + (this.m[8] * m3.m[8]);
        return mat;
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/scene/BasicScene.js":
/*!**********************************************************!*\
  !*** ./node_modules/seed-engine/src/scene/BasicScene.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicScene; });
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene */ "./node_modules/seed-engine/src/scene/Scene.js");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entry */ "./node_modules/seed-engine/src/entry.js");
/* harmony import */ var _manager_DOMManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DOMManager */ "./node_modules/seed-engine/src/manager/DOMManager.js");




/**
 * A basic representation of a working scene. Scenes need a viewport to give Renderable
 * components a place to be viewed by the RenderManager.
 * 
 * This scene only contains one viewport which takes up the size of the canvas element.
 */
class BasicScene extends _Scene__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.registerViewport(new _entry__WEBPACK_IMPORTED_MODULE_1__["Viewport"](0, 0, _manager_DOMManager__WEBPACK_IMPORTED_MODULE_2__["default"].canvas.width, _manager_DOMManager__WEBPACK_IMPORTED_MODULE_2__["default"].canvas.height));
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/scene/Scene.js":
/*!*****************************************************!*\
  !*** ./node_modules/seed-engine/src/scene/Scene.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var _base_Updateable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Updateable */ "./node_modules/seed-engine/src/base/Updateable.js");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entry */ "./node_modules/seed-engine/src/entry.js");



/**
 * Baseclass for all scenes. When creating a new scene, it should inherit this
 * class. 
 * Scenes keep track of their scene objects and viewports. The scene baseclass has
 * functions for registering these with the scene.
 */
class Scene extends _base_Updateable__WEBPACK_IMPORTED_MODULE_0__["default"] {

    /**
     * Builds the SceneObjects and Viewports list.
     */
    constructor() {
        super();
        this.sceneObjects = [];
        this.viewports = [];
    }

    /**
     * When a SceneObject is created, it is routed through the SceneManager to the current
     * active scene to this function. The SceneObject will register with the scene to be referenced
     * on update/pause/destruct calls on a scene specific basis.
     * 
     * @param {SceneObject} sceneObject A SceneObject to register.
     */
    registerSceneObject(sceneObject) {
        this.sceneObjects.push(sceneObject);
        let deregisterCallback = () => {
            for (let i = 0; i < this.sceneObjects.length; i++) {
                if (this.sceneObjects[i].id ==sceneObject.id)
                    this.sceneObjects.splice(i, 1);
                    return;
            }
        }
        return deregisterCallback;
    }

    /**
     * Registers a Renderable component with the viewport, by index.
     * 
     * @param {Renderable} renderable A Renderable to register to the viewport.
     * @param {number} viewportIndex The index of the viewport.
     */
    registerRenderableComponent(renderable, viewportIndex) {
        if (this.viewports.length > viewportIndex)
            return this.viewports[viewportIndex].registerRenderableComponent(renderable);
        else {
            throw "This viewport doesn't exist on this scene!";
        }
    }

    /**
     * When a Viewport is created, it is routed through the SceneManager to the current
     * active scene to this function. The Viewport will register with the scene to be referenced
     * by the RenderManager and assigned to by Renderables.
     * 
     * @param {Viewport} viewport A Viewport to register.
     */
    registerViewport(viewport) {
        this.viewports.push(viewport);
        this.viewportIndex = this.viewports.length - 1;
        let deregisterCallback = () => {
            for (let i = 0; i < this.viewports.length; i++) {
                if (this.viewports[i].id === viewport.id) {
                    this.viewports[i].splice(i, 1);
                    return;
                }
            }
        }
        return deregisterCallback;
    }
}

/***/ }),

/***/ "./node_modules/seed-engine/src/utils/MathUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/seed-engine/src/utils/MathUtil.js ***!
  \********************************************************/
/*! exports provided: degToRad, radToDeg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToRad", function() { return degToRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToDeg", function() { return radToDeg; });
/**
 * Converts degrees to radians.
 * 
 * @param {number} deg A number in degrees.
 */
const degToRad = (deg) => {
    return (deg / 180) * Math.PI;
}

/**
 * Converts radians to degress.
 * 
 * @param {number} rad A number in radians.
 */
const radToDeg = (rad) => {
    return (deg / Math.PI) * 180;
}

/***/ }),

/***/ "./src/component/RandomMovement.js":
/*!*****************************************!*\
  !*** ./src/component/RandomMovement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomMovement; });
/* harmony import */ var seed_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seed-engine */ "./node_modules/seed-engine/src/entry.js");


class RandomMovement extends seed_engine__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Creates a new direction point (vector) to begin moving as.
     */
    constructor() {
        super(true);
        this.className = 'RandomMovement';
        this.direction = new seed_engine__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.random() * 20 - 10, Math.random() * 20 - 10);
        this.sceneViewportBounds = new seed_engine__WEBPACK_IMPORTED_MODULE_0__["Bounds"]();
    }

    /**
     * Gets the bounds of the viewport once. If your viewports aren't going to be changing,
     * this saves wasted time spent getting the bounds each update.
     */
    onStart() {
        this.sceneViewportBounds = seed_engine__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].getCurrentScene().viewports[0].bounds;
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

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var seed_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seed-engine */ "./node_modules/seed-engine/src/entry.js");
/* harmony import */ var _scene_MainScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/MainScene */ "./src/scene/MainScene.js");



/**
 * Example entry class for a game. Defines a class then starts creates one underneath.
 * 
 * Ensure to call Engine.start() before doing anything.
 */
class Game {
    constructor() {
    }

    /**
     * Starts the engine loop, then adds a new scene to it.
     */
    start() {
        seed_engine__WEBPACK_IMPORTED_MODULE_0__["Engine"].start();
        seed_engine__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].addScene(new _scene_MainScene__WEBPACK_IMPORTED_MODULE_1__["default"]());
    }
}

new Game().start();

/***/ }),

/***/ "./src/object/Player.js":
/*!******************************!*\
  !*** ./src/object/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var seed_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seed-engine */ "./node_modules/seed-engine/src/entry.js");
/* harmony import */ var _component_RandomMovement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/RandomMovement */ "./src/component/RandomMovement.js");



/**
 * An example class of how a SceneObject should be written. This player doesn't actually have any way
 * of being a "player" yet, as there is no input reading.
 */
class Player extends seed_engine__WEBPACK_IMPORTED_MODULE_0__["SceneObject"] {
    /**
     * Defines a random position to start, and adds a Renderable Component of random color, and another component, RandomMovement.
     */
    constructor() {
        super(new seed_engine__WEBPACK_IMPORTED_MODULE_0__["Point"](100 + (Math.random() * seed_engine__WEBPACK_IMPORTED_MODULE_0__["DOMManager"].GL.canvas.width - 100), 100 + (Math.random() * seed_engine__WEBPACK_IMPORTED_MODULE_0__["DOMManager"].GL.canvas.height - 100)), new seed_engine__WEBPACK_IMPORTED_MODULE_0__["Point"](50, 50, 50), 0);
        let renderable = new seed_engine__WEBPACK_IMPORTED_MODULE_0__["Renderable2D"]();
        this.addComponent(renderable);
        renderable.addToViewport(0);
        renderable.color.set(Math.random(), Math.random(), Math.random());

        this.addComponent(new _component_RandomMovement__WEBPACK_IMPORTED_MODULE_1__["default"]());
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

/***/ }),

/***/ "./src/scene/MainScene.js":
/*!********************************!*\
  !*** ./src/scene/MainScene.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainScene; });
/* harmony import */ var seed_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seed-engine */ "./node_modules/seed-engine/src/entry.js");
/* harmony import */ var _object_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/Player */ "./src/object/Player.js");
/* harmony import */ var _component_RandomMovement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/RandomMovement */ "./src/component/RandomMovement.js");




/**
 * The main scene of the game, containing one fullscreen view.
 */
class MainScene extends seed_engine__WEBPACK_IMPORTED_MODULE_0__["BasicScene"] {
    constructor() {
        super();
    }

    /**
     * When this scene is started, it creates 20 players.
     */
    onStart() {
        for (let i = 0; i < 20; i++) {
            new _object_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map