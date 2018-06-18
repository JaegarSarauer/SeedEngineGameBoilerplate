!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([function(t,e){},function(t,e){},function(t,e,s){"use strict";s.r(e);class i{constructor(){}start(){}update(){}end(){}pause(){}unpause(){}}var n=new class extends i{constructor(){super(),this.updateableIDCounter=0}registerUpdateable(t){return t.id=this.updateableIDCounter++,()=>{}}};class r{constructor(){this.hasStarted=!1,this.hasPaused=!1,this.id=-1,this.deregister=n.registerUpdateable(this)}start(){this.onStart(),this.hasStarted=!0,this.update=this.postStartUpdate}update(){this.hasPaused||this.start()}postStartUpdate(){this.hasPaused||this.onUpdate()}end(){this.onEnd(),this.destructor()}pause(){this.hasPaused||(this.onPause(),this.hasPaused=!0)}unpause(){this.hasPaused&&(this.onUnpause(),this.hasPaused=!1)}destructor(){this.deregister()}onStart(){}onUpdate(){}onEnd(){}onPause(){}onUnpause(){}}class o extends r{constructor(t){super(),this.isUnique=t}onAddComponent(){}}var a={_0:0,_1:1,_2:2,CANCEL:3,_4:4,_5:5,HELP:6,_7:7,BACK_SPACE:8,TAB:9,_10:10,_11:11,CLEAR:12,ENTER:13,ENTER_SPECIAL:14,_15:15,SHIFT:16,CONTROL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,KANA:21,EISU:22,JUNJA:23,FINAL:24,HANJA:25,_26:26,ESCAPE:27,CONVERT:28,NONCONVERT:29,ACCEPT:30,MODECHANGE:31,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,SELECT:41,PRINT:42,EXECUTE:43,PRINTSCREEN:44,INSERT:45,DELETE:46,_47:47,NUMBER_0:48,NUMBER_1:49,NUMBER_2:50,NUMBER_3:51,NUMBER_4:52,NUMBER_5:53,NUMBER_6:54,NUMBER_7:55,NUMBER_8:56,NUMBER_9:57,COLON:58,SEMICOLON:59,LESS_THAN:60,EQUALS:61,GREATER_THAN:62,QUESTION_MARK:63,AT:64,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,OS_KEY:91,_92:92,CONTEXT_MENU:93,_94:94,SLEEP:95,NUMPAD0:96,NUMPAD1:97,NUMPAD2:98,NUMPAD3:99,NUMPAD4:100,NUMPAD5:101,NUMPAD6:102,NUMPAD7:103,NUMPAD8:104,NUMPAD9:105,MULTIPLY:106,ADD:107,SEPARATOR:108,SUBTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,_136:136,_137:137,_138:138,_139:139,_140:140,_141:141,_142:142,_143:143,NUM_LOCK:144,SCROLL_LOCK:145,WIN_OEM_FJ_JISHO:146,WIN_OEM_FJ_MASSHOU:147,WIN_OEM_FJ_TOUROKU:148,WIN_OEM_FJ_LOYA:149,WIN_OEM_FJ_ROYA:150,_151:151,_152:152,_153:153,_154:154,_155:155,_156:156,_157:157,_158:158,_159:159,CIRCUMFLEX:160,EXCLAMATION:161,DOUBLE_QUOTE:162,HASH:163,DOLLAR:164,PERCENT:165,AMPERSAND:166,UNDERSCORE:167,OPEN_PAREN:168,CLOSE_PAREN:169,ASTERISK:170,PLUS:171,PIPE:172,HYPHEN_MINUS:173,OPEN_CURLY_BRACKET:174,CLOSE_CURLY_BRACKET:175,TILDE:176,_177:177,_178:178,_179:179,_180:180,VOLUME_MUTE:181,VOLUME_DOWN:182,VOLUME_UP:183,_184:184,_185:185,SEMICOLON:186,EQUALS:187,COMMA:188,MINUS:189,PERIOD:190,SLASH:191,BACK_QUOTE:192,_193:193,_194:194,_195:195,_196:196,_197:197,_198:198,_199:199,_200:200,_201:201,_202:202,_203:203,_204:204,_205:205,_206:206,_207:207,_208:208,_209:209,_210:210,_211:211,_212:212,_213:213,_214:214,_215:215,_216:216,_217:217,_218:218,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRACKET:221,QUOTE:222,_223:223,META:224,ALTGR:225,_226:226,WIN_ICO_HELP:227,WIN_ICO_00:228,_229:229,WIN_ICO_CLEAR:230,_231:231,_232:232,WIN_OEM_RESET:233,WIN_OEM_JUMP:234,WIN_OEM_PA1:235,WIN_OEM_PA2:236,WIN_OEM_PA3:237,WIN_OEM_WSCTRL:238,WIN_OEM_CUSEL:239,WIN_OEM_ATTN:240,WIN_OEM_FINISH:241,WIN_OEM_COPY:242,WIN_OEM_AUTO:243,WIN_OEM_ENLW:244,WIN_OEM_BACKTAB:245,ATTN:246,CRSEL:247,EXSEL:248,EREOF:249,PLAY:250,ZOOM:251,_252:252,PA1:253,WIN_OEM_CLEAR:254,_255:255};var h=new class extends i{constructor(){super(),this.canvas=null,this.GL=null,this.canvasWidth=0,this.canvasHeight=0,this.canvasDPIWidth=0,this.canvasDPIHeight=0}start(){this.loadCanvas(),this.adjust()}loadCanvas(){if(this.canvas=document.getElementById("game"),null==this.canvas)throw"Error finding DOM Canvas. The canvas requires an id='game'";this.GL=this.canvas.getContext("webgl2"),window.addEventListener("resize",()=>{this.adjust()})}adjust(){this.GL.imageSmoothingEnabled=!1,this.GL.webkitImageSmoothingEnabled=!1,this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.canvasDPIWidth=this.canvasWidth/this.canvas.clientWidth,this.canvasDPIHeight=this.canvasHeight/this.canvas.clientHeight}};class c{constructor(){this.listenerIDCounter=0,this.data={},this.listeners={}}set(t,e){this.data[t]=e,null==this.listeners[t]?this.listeners[t]=[]:this.notify(t)}notify(t){for(let e=0;e<this.listeners[t].length;e++)this.listeners[t][e].callback(this.data[t])}get(t){return this.data[t]}watch(t,e,s=!0){let i={id:this.listenerIDCounter++,callback:e,stop:()=>{for(let e=0;e<this.listeners[t].length;e++)this.listeners[t][e].id===i.id&&delete this.listeners[t][i.id]}};return null==this.listeners[t]&&(this.listeners[t]=[],s=!1),this.listeners[t].push(i),s&&e(this.data[t]),i}}var l=new class extends i{constructor(){super(),this.events=new c,this.EVENT={MOUSE_LEFT:"mouseLeftClicked",MOUSE_RIGHT:"mouseRightClicked",KEY_DOWN:"keyDown",KEY_UP:"keyUp",KEY:"keyDownRepeat"},this.KEY_DOWN=[],this.KEY_PRESSED=[],this.KEY_UP=[],this.LEFT_CLICK=[],this.RIGHT_CLICK=[];for(let t=0;t<256;t++)this.KEY_DOWN[t]=!1,this.KEY_PRESSED[t]=!1,this.KEY_UP[t]=!1}isKeyDown(t){return this.KEY_DOWN[t]}isKeyPressed(t){return this.KEY_PRESSED[t]}isKeyUp(t){return this.KEY_UP[t]}start(){h.canvas.addEventListener("click",t=>{this.events.set(this.EVENT.MOUSE_LEFT,{x:t.offsetX*h.canvasDPIWidth,y:t.offsetY*h.canvasDPIHeight,shiftHeld:t.shiftKey,ctrlHeld:t.ctrlKey})}),h.canvas.oncontextmenu=(t=>{t.preventDefault(),this.events.set(this.EVENT.MOUSE_RIGHT,{x:t.offsetX*h.canvasDPIWidth,y:t.offsetY*h.canvasDPIHeight,shiftHeld:t.shiftKey,ctrlHeld:t.ctrlKey})}),h.canvas.addEventListener("keydown",t=>{let e=t.which||t.keyCode;this.KEY_DOWN[e]=!0,this.KEY_PRESSED[e]=!0,t.repeat||this.events.set(this.EVENT.KEY_DOWN,{key:t.key,code:e,shiftHeld:t.shiftKey,ctrlHeld:t.ctrlKey,repeat:t.repeat}),this.events.set(this.EVENT.KEY,{key:t.key,code:e,shiftHeld:t.shiftKey,ctrlHeld:t.ctrlKey,repeat:t.repeat})}),h.canvas.addEventListener("keyup",t=>{let e=t.which||t.keyCode;this.KEY_DOWN[e]=!1,this.KEY_PRESSED[e]=!1,this.KEY_UP[e]=!0,this.events.set(this.EVENT.KEY_UP,{key:t.key,code:e,shiftHeld:t.shiftKey,ctrlHeld:t.ctrlKey,repeat:t.repeat})}),this.events.watch(this.EVENT.MOUSE_LEFT,t=>{this.LEFT_CLICK.push(t)}),this.events.watch(this.EVENT.MOUSE_RIGHT,t=>{this.RIGHT_CLICK.push(t)})}update(){this.KEY_DOWN=[],this.KEY_UP=[],this.LEFT_CLICK=[],this.RIGHT_CLICK=[]}};class d extends o{constructor(){super(!1)}}class u extends d{constructor(t=(t=>{}),e=(t=>{})){super(!0),this.onLeftClick=t,this.onRightClick=e}onUpdate(){let t=this.gameObject.transform.getPosition(),e=this.gameObject.transform.getScale().divide(2);for(let s=0;s<l.LEFT_CLICK.length;s++){let i=l.LEFT_CLICK[s];t.x-e.x<=i.x&&t.x+e.x>=i.x&&t.y-e.y<=i.y&&t.y+e.y>=i.y&&this.onLeftClick(i)}for(let s=0;s<l.RIGHT_CLICK.length;s++){let i=l.RIGHT_CLICK[s];t.x-e.x<=i.x&&t.x+e.x>=i.x&&t.y-e.y<=i.y&&t.y+e.y>=i.y&&this.onRightClick(i)}}}class p{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}set(t=this.x,e=this.y,s=this.z){this.x=t,this.y=e,this.z=s}static copy(t){return new p(t.x,t.y,t.z)}divide(t,e=t,s=t){return this.x/=t,this.y/=e,this.z/=s,this}multiply(t,e=t,s=t){return this.x*=t,this.y*=e,this.z*=s,this}add(t,e=t,s=t){return this.x+=t,this.y+=e,this.z+=s,this}subtract(t,e=t,s=t){return this.x-=t,this.y+=e,this.z+=s,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}normalize(){let t=this.length();0!==t&&this.divide(t)}}class m extends o{constructor(t=new p(0,0,0),e=new p(1,1,1),s=0){super(!0),this.className="Transform",this._position=t,this._rotation=s,this._scale=e,this._originOffset=new p(0,0,0),this.renderable=null}setPosition(t=this._position.x,e=this._position.y,s=this._position.z){this._position.set(t,e,s),null!=this.renderable&&this.renderable.setPosition(this._position)}centerOrigin(t=!0){t?this.setOriginOffset(-.5,-.5,-.5):this.setOriginOffset(0,0,0)}setOriginOffset(t=this._originOffset.x,e=this._originOffset.y,s=this._originOffset.z){this._originOffset.set(t,e,s),null!=this.renderable&&this.renderable.setOriginOffset(this._originOffset)}setRotation(t){this._rotation=t,null!=this.renderable&&this.renderable.setRotation(this._rotation)}setScale(t=this.scaleX,e=this.scaleY,s=this.scaleZ){this._scale.set(t,e,s),null!=this.renderable&&this.renderable.setScale(this._scale)}translate(t=0,e=0,s=0){this._position.x+=t,this._position.y+=e,this._position.z+=s,null!=this.renderable&&this.renderable.setPosition(this._position)}rotate(t){this._rotation+=t,null!=this.renderable&&this.renderable.setRotation(this._rotation)}scale(t=0,e=0,s=0){this._scale.x+=t,this._scale.y+=e,this._scale.z+=s,null!=this.renderable&&this.renderable.setScale(this._scale)}getPosition(){return p.copy(this._position)}getScale(){return p.copy(this._scale)}getRotation(){return p.copy(this._rotation)}getOriginOffset(){return p.copy(this._originOffset)}}class _ extends r{constructor(t=new Point(0,0,0),e=new Point(32,32,1),s=0){super(),this.className="GameObject",this.components={},this.addComponent(new m(t,e,s)),this.transform=this.getComponent("Transform")}addComponent(t){if(null==this.components[t.className]&&(this.components[t.className]=[]),t.isUnique&&this.components[t.className].length>0)throw"There is already a unique component of type "+t.className+" on this GameObject!";return this.components[t.className].push(t),t.gameObject=this,t.onAddComponent(),!0}removeComponent(t){if(null==this.components[component.className])return!1;for(let e=0;e<this.components[component.className].length;e++)if(this.components[component.className][e].id===t)return this.components[component.className][e].end(),this.components[component.className].splice(e,1),!0;return!1}removeComponents(t){if(null==this.components[t])return!1;for(let e=0;e<this.components[t].length;e++)this.components[t][e].end(),this.components[t].splice(e,1);return!0}removeAllComponents(){let t=Object.keys(this.components);for(let e=0;e<t.length;e++){let s=t[e];if("Transform"!==s)for(let t=0;t<this.components[s].length;t++)this.components[s][t].end(),this.components[s].splice(t,1)}return!0}hasComponent(t){return null!=this.components[t]&&this.components[t].length>0}getComponent(t,e=0){return null==this.components[t]?null:this.components[t][e]}updateComponents(){let t=Object.keys(this.components);for(let e=0;e<t.length;e++){let s=t[e];for(let t=0;t<this.components[s].length;t++)this.components[s][t].update()}}postStartUpdate(){this.hasPaused||(this.preUpdate(),this.onUpdate(),this.updateComponents(),this.postUpdate())}preUpdate(){this.onPreUpdate()}postUpdate(){this.onPostUpdate()}onPreUpdate(){}onPostUpdate(){}}var E=new class extends i{constructor(){super(),this.scenes=[]}registerSceneObject(t){let e=this.getCurrentScene();if(null!=e)return e.registerSceneObject(t)}registerViewport(t){let e=this.getCurrentScene();null!=e&&e.registerViewport(t)}getCurrentScene(){return this.scenes.length>0?this.scenes[this.scenes.length-1]:null}start(){this.scenes.length>0&&this.scenes[this.scenes.length-1].start()}update(){let t=this.getCurrentScene();if(null!=t){t.update();for(let e=0;e<t.sceneObjects.length;e++)t.sceneObjects[e].update()}}end(){for(;this.scenes.length>0;)this.scenes[this.scenes.length-1].pop().end()}pause(){this.scenes.length>0&&this.scenes[this.scenes.length-1].pause()}unpause(){this.scenes.length>0&&this.scenes[this.scenes.length-1].unpause()}addScene(t){this.pause(),this.scenes.push(t)}removeScene(){this.scenes.pop().end(),this.unpause()}};const g="#version 300 es\n\nin vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvoid main() {\n  gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);\n}\n",O="#version 300 es\n\nprecision mediump float;\n\nuniform vec4 u_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = u_color;\n}\n";var P=new class extends i{constructor(){super(),this.programIDCounter=0,this.programs={}}start(){this.addProgram("Default",g,O)}getProgram(t){if(null==this.programs[t])throw"Program does not exist!";return this.programs[t]}addProgram(t,e,s){this.programs[t]={name:t,id:this.programIDCounter++,program:this._createProgram(e,s)}}_createShadersProgram(t,e){let s=h.GL.createProgram();return h.GL.attachShader(s,t),h.GL.attachShader(s,e),h.GL.linkProgram(s),h.GL.getProgramParameter(s,h.GL.LINK_STATUS)?s:(console.error(h.GL.getProgramInfoLog(s)),h.GL.deleteProgram(s),null)}_createShader(t,e){let s=h.GL.createShader(t);return h.GL.shaderSource(s,e),h.GL.compileShader(s),h.GL.getShaderParameter(s,h.GL.COMPILE_STATUS)?s:(console.error(h.GL.getShaderInfoLog(s)),h.GL.deleteShader(s),null)}_createProgram(t,e){let s=this._createShader(h.GL.VERTEX_SHADER,t),i=this._createShader(h.GL.FRAGMENT_SHADER,e);return this._createShadersProgram(s,i)}};const f=t=>t/180*Math.PI;class L{setPosition(t,e){}setScale(t,e){}setRotation(t){}copy(){}add(t){}multiply(t){}}class y extends L{constructor(t=[1,0,0,0,1,0,0,0,1]){return super(),this.m=t,this}setPosition(t,e){this.m[6]=t,this.m[7]=e}setScale(t,e){this.m[0]=t,this.m[4]=e}setRotation(t){let e=f(t),s=Math.cos(e),i=Math.sin(e);this.m[0]=s,this.m[1]=-i,this.m[3]=i,this.m[4]=s}static copy(t){return new y(t.m.slice(0,t.m.length))}add(t){throw"unimplemented"}static projection(t,e){return new y([2/t,0,0,0,-2/e,0,-1,1,1])}multiply(t){let e=new y;return e.m[0]=this.m[0]*t.m[0]+this.m[3]*t.m[1]+this.m[6]*t.m[2],e.m[1]=this.m[1]*t.m[0]+this.m[4]*t.m[1]+this.m[7]*t.m[2],e.m[2]=this.m[2]*t.m[0]+this.m[5]*t.m[1]+this.m[8]*t.m[2],e.m[3]=this.m[0]*t.m[3]+this.m[3]*t.m[4]+this.m[6]*t.m[5],e.m[4]=this.m[1]*t.m[3]+this.m[4]*t.m[4]+this.m[7]*t.m[5],e.m[5]=this.m[2]*t.m[3]+this.m[5]*t.m[4]+this.m[8]*t.m[5],e.m[6]=this.m[0]*t.m[6]+this.m[3]*t.m[7]+this.m[6]*t.m[8],e.m[7]=this.m[1]*t.m[6]+this.m[4]*t.m[7]+this.m[7]*t.m[8],e.m[8]=this.m[2]*t.m[6]+this.m[5]*t.m[7]+this.m[8]*t.m[8],e}}var S=new class extends i{constructor(){super(),this.GL=null,this.currentProgram=null}start(){this.GL=h.GL,this._updateProgram(P.getProgram("Default")),this.positionAttributeLocation=this.GL.getAttribLocation(this.currentProgram.program,"a_position"),this.colorLocation=this.GL.getUniformLocation(this.currentProgram.program,"u_color"),this.matrixLocation=this.GL.getUniformLocation(this.currentProgram.program,"u_matrix");let t=this.GL.createBuffer();this.GL.bindBuffer(this.GL.ARRAY_BUFFER,t),this.GL.bufferData(this.GL.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),this.GL.STATIC_DRAW),this.vao=this.GL.createVertexArray(),this.GL.bindVertexArray(this.vao),this.GL.enableVertexAttribArray(this.positionAttributeLocation);let e=this.GL.FLOAT;this.GL.vertexAttribPointer(this.positionAttributeLocation,2,e,!1,0,0)}_updateProgram(t){null!=this.currentProgram&&this.currentProgram.id==t.id||(console.info("switching programs"),this.GL.useProgram(t.program),this.currentProgram=t)}update(){this.GL.clearColor(0,0,0,0),this.GL.clear(this.GL.COLOR_BUFFER_BIT|this.GL.DEPTH_BUFFER_BIT);let t=E.getCurrentScene().viewports;for(let e=0;e<t.length;e++){let s=t[e],i=s.bounds.p2.x,n=s.bounds.p2.y;this.GL.viewport(s.bounds.p1.x,s.bounds.p1.y,i,n);let r=s.renderables,o=Object.keys(r);for(let t=0;t<o.length;t++){let e=r[o[t]];this._updateProgram(e.program),this.GL.uniform4fv(this.colorLocation,e.color.color),this.GL.uniformMatrix3fv(this.matrixLocation,!1,y.projection(i,n).multiply(e.getMatrix()).m),this.GL.drawArrays(e.primitiveType,0,e.primitiveCount)}}}};class C{constructor(t=1,e=.078,s=.576,i=1){this.color=[t,e,s,i]}set(t=this.color[0],e=this.color[1],s=this.color[2],i=this.color[3]){this.color=[t,e,s,i]}static green(){return new C(0,1,0,1)}static blue(){return new C(0,0,1,1)}static red(){return new C(1,0,0,1)}static pink(){return new C([1,.078,.576,1])}}class N extends o{constructor(t=P.getProgram("Default")){super(!0),this.deregisterViewports={},this.program=t,this._matrixPosition=new y,this._matrixScale=new y,this._matrixRotation=new y,this._matrixOriginOffset=new y,this.color=new C,this.renderPositions=[0,0,1,0,0,1,0,1,1,0,1,1],this.primitiveType=S.GL.TRIANGLES,this.primitiveCount=6}getMatrix(){return y.copy(this._matrixPosition).multiply(this._matrixRotation).multiply(this._matrixScale).multiply(this._matrixOriginOffset)}setPosition(t){this._matrixPosition.setPosition(t.x,t.y)}setOriginOffset(t){this._matrixOriginOffset.setPosition(t.x,t.y)}setRotation(t){this._matrixRotation.setRotation(t)}setScale(t){this._matrixScale.setScale(t.x,t.y)}onAddComponent(){let t=this.gameObject.getComponent("Transform");t.renderable=this,this.setPosition(t._position),this.setScale(t._scale),this.setRotation(t._rotation)}addToViewport(t){return this.deregisterViewports[t]=E.getCurrentScene().registerRenderableComponent(this,t),this}removeFromViewports(){let t=Object.keys(this.deregisterViewports);for(let e=0;e<t.length;e++)this.deregisterViewports[t[e]]()}}class v extends N{constructor(){super(),this.className="Renderable2D"}}class w extends d{constructor(){super()}isUpPressed(){return l.isKeyPressed(a.W)||l.isKeyPressed(a.UP)}isDownPressed(){return l.isKeyPressed(a.S)||l.isKeyPressed(a.DOWN)}isLeftPressed(){return l.isKeyPressed(a.A)||l.isKeyPressed(a.LEFT)}isRightPressed(){return l.isKeyPressed(a.D)||l.isKeyPressed(a.RIGHT)}}class x{constructor(t,e,s,i){this.p1=new p(t,e),this.p2=new p(s,i)}set(t,e,s,i){this.p1.set(t,e),this.p2.set(s,i)}isInBounds(t){return t.x>=this.p1.x&&t.x<=this.p2.x&&t.y>=this.p1.y&&t.y<=this.p2.y&&t.z>=this.p1.z&&t.z<=this.p2.z}}new class extends i{constructor(){super()}};var b=new class extends i{constructor(){super(),this.persistentObjects={}}registerPersistentObject(t){return this.persistentObjects[t.id]=t,()=>{delete this.persistentObjects[t.id]}}update(){let t=Object.keys(this.persistentObjects);for(let e=0;e<t.length;e++)this.persistentObjects[t[e]].update()}end(){let t=Object.keys(this.persistentObjects);for(let e=0;e<t.length;e++)this.persistentObjects[t[e]].end()}pause(){let t=Object.keys(this.persistentObjects);for(let e=0;e<t.length;e++)this.persistentObjects[t[e]].pause()}unpause(){let t=Object.keys(this.persistentObjects);for(let e=0;e<t.length;e++)this.persistentObjects[t[e]].unpause()}};var R=new class extends i{constructor(){super(),this.MS_PER_FRAME=16,this.coreUpdateLoopHandle=null,this.hasPaused=!1}start(){h.start(),b.start(),E.start(),P.start(),S.start(),l.start(),this.coreUpdateLoopHandle=setInterval(()=>{this.hasPaused||this.update()},this.MS_PER_FRAME)}update(){b.update(),E.update(),S.update(),l.update()}end(){b.end(),E.end(),S.end(),clearInterval(this.coreUpdateLoopHandle),h.end()}pause(){S.pause(),b.pause(),E.pause(),this.hasPaused=!0}unpause(){E.unpause(),b.unpause(),S.unpause(),this.hasPaused=!1}};new class extends i{constructor(){super()}};new class extends i{constructor(){super()}};class A extends _{constructor(t=new Point(0,0,0),e=new Point(32,32,1),s=0){super(t,e,s),this.deregister=E.registerSceneObject(this)}}s(1),s(0);class U extends r{constructor(t,e,s,i){super(),this.bounds=new x(t,e,s,i),this.renderables={}}registerRenderableComponent(t){this.renderables[t.id]=t;return()=>{delete this.renderables[t.id]}}}class T extends r{constructor(){super(),this.sceneObjects=[],this.viewports=[]}registerSceneObject(t){this.sceneObjects.push(t);return()=>{for(let e=0;e<this.sceneObjects.length;e++)return void(this.sceneObjects[e].id==t.id&&this.sceneObjects.splice(e,1))}}registerRenderableComponent(t,e){if(this.viewports.length>e)return this.viewports[e].registerRenderableComponent(t);throw"This viewport doesn't exist on this scene!"}registerViewport(t){this.viewports.push(t),this.viewportIndex=this.viewports.length-1;return()=>{for(let e=0;e<this.viewports.length;e++)if(this.viewports[e].id===t.id)return void this.viewports[e].splice(e,1)}}}var M=new class{constructor(){}start(){R.start()}end(){R.end()}pause(){R.pause()}unpause(){R.unpause()}};class I extends o{constructor(){super(!0),this.className="RandomMovement",this.direction=new p(2*Math.random()-1,2*Math.random()-1),this.sceneViewportBounds=new x}onStart(){this.sceneViewportBounds=E.getCurrentScene().viewports[this.gameObject.viewport].bounds}onUpdate(){let t=this.gameObject.transform,e=t.getPosition(),s=t.getScale();e.x-s.x/2+this.direction.x<=0&&(this.direction.x=Math.abs(this.direction.x)),e.x+s.x/2+this.direction.x>=this.sceneViewportBounds.p2.x&&(this.direction.x=-Math.abs(this.direction.x)),e.y-s.y/2+this.direction.y<=0&&(this.direction.y=Math.abs(this.direction.y)),e.y+s.y/2+this.direction.y>=this.sceneViewportBounds.p2.y&&(this.direction.y=-Math.abs(this.direction.y)),t.translate(this.direction.x,this.direction.y)}}class D extends w{constructor(){super(),this.className="TopDownController"}onStart(){}onUpdate(){let t=new p;this.isUpPressed()&&(t.y+=-1),this.isLeftPressed()&&(t.x+=-1),this.isDownPressed()&&(t.y+=1),this.isRightPressed()&&(t.x+=1),t.normalize(),t.multiply(5),this.gameObject.transform.translate(t.x,t.y,t.z)}}class K extends A{constructor(){super(new p(0,0,0),new p(50,50,50),0),this.viewport=0}onStart(){this.viewport=Math.floor(Math.random()*E.getCurrentScene().viewports.length);let t=new v;this.addComponent(t),t.addToViewport(this.viewport),t.color.set(Math.random(),Math.random(),Math.random()),this.addComponent(new I),this.addComponent(new D),this.addComponent(new u(e=>{t.color.set(Math.random(),Math.random(),Math.random())})),this.transform.centerOrigin();let e=E.getCurrentScene().viewports[this.viewport].bounds;this.transform.setPosition(e.p2.x/2,e.p2.y/2)}onUpdate(){}}class G extends T{constructor(){super(),this.registerViewport(new U(0,0,h.canvasWidth/2,h.canvasHeight)),this.registerViewport(new U(h.canvasWidth/2,0,h.canvasWidth/2,h.canvasHeight/2)),this.registerViewport(new U(h.canvasWidth/2,h.canvasHeight/2,h.canvasWidth/2,h.canvasHeight/2))}onStart(){for(let t=0;t<2e3;t++)new K}onUpdate(){}onEnd(){}}s.d(e,"Game",function(){return F});class F{constructor(){}start(){M.start(),E.addScene(new G)}}(new F).start()}]);
//# sourceMappingURL=bundle.js.map