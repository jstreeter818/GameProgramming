import "../components/KeyboardComponent.js"
import "../components/TrackMouseComponent.js"
import "../components/CheckCollisionComponent.js"
import "../components/CameraMoverComponent.js"

import "../prefabs/CircleGameObject.js"
import "../prefabs/ControllerGameObject.js"

import "/engine/Engine.js"

class MainScene extends Scene{
    constructor(){
        super("gray")
        this.aspectRatio = 1
        this.logicalWidth = 1000
    }

    start(ctx){
        GameObject.instantiate(new CircleGameObject(), 500, 500, 50)

        GameObject.instantiate(new ControllerGameObject())

        let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
        mouseCursorGameObject.addComponent(new TrackMouseComponent())
        mouseCursorGameObject.addComponent(new Point("red"))

        GameObject.instantiate(mouseCursorGameObject)

    }
}

window.MainScene = MainScene