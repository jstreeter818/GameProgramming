import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/components/Circle.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"

import "/engine/static/Collisions.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"
//import "/engine/static/EventSystem.js"

class Engine {
    static gameLoop(){
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        //canvas.width = window.innerWidth
        canvas.width = 800
        //canvas.height = window.innerHeight
        canvas.height = 800

        Engine.currentScene.start(ctx)

        Engine.currentScene.update(ctx)

        Engine.currentScene.draw(ctx)
    }

    static setup(){
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)
        document.addEventListener("mousemove", Input.mousemove)

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine
export default Engine