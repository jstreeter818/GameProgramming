import "../components/KeyboardComponent.js"
import "../components/TrackMouseComponent.js"
import "../components/CheckCollisionComponent.js"

import "../prefabs/CircleGameObject.js"

import "/engine/Engine.js"

class MainScene extends Scene{
    constructor(){
        super("black")
    }

    start(ctx){
        GameObject.instantiate(new CircleGameObject(), ctx.canvas.width / 2, ctx.canvas.height / 2, 600)

        let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
        mouseCursorGameObject.addComponent(new TrackMouseComponent())
        mouseCursorGameObject.addComponent(new Point("red"))

        GameObject.instantiate(mouseCursorGameObject)

    }
}

window.MainScene = MainScene