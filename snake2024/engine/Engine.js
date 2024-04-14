import "/engine/classes/Component.js"
import "/engine/classes/GameObject.js"
import "/engine/classes/Scene.js"

import "/engine/geometry/Vector2.js"
import "/engine/geometry/Line2.js"
import "/engine/geometry/Circle2.js"
import "/engine/geometry/Rectangle2.js"

import "/engine/components/Circle.js"
import "/engine/components/Line.js"
import "/engine/components/Point.js"
import "/engine/components/Rectangle.js"
import "/engine/components/Text.js"
import "/engine/components/Transform.js"

import "/engine/static/Collisions.js"
import "/engine/static/CollisionsGeometric.js"
import "/engine/static/Input.js"
import "/engine/static/Globals.js"
import "/engine/static/Time.js"
import "/engine/static/EventSystem.js"

class Engine {

    isSystemPaused = false

    static gameLoop(){
        let canvas = document.querySelector("#canv")
        let ctx = canvas.getContext("2d")

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        if(Input.keysUpThisFrame.includes("KeyP")){
            if(Engine.isSystemPaused){
                Engine.isSystemPaused = false
            }
            else{
                Engine.isSystemPaused = true
            }
        }

        Engine.currentScene.draw(ctx)

        if(!Engine.isSystemPaused){
            Engine.currentScene._start(ctx)

            Engine.currentScene.update(ctx)

            Engine.currentScene.gameObjects = Engine.currentScene.gameObjects.filter(go => go.markForDestroy = false)
        }

        Input.update()
    }

    static setup(){
        document.addEventListener("keydown", Input.keydown)
        document.addEventListener("keyup", Input.keyup)
        document.addEventListener("mousemove", Input.mousemove)
        document.addEventListener("mouseup", Input.mouseup)

        setInterval(Engine.gameLoop, Time.ms)
    }
}

window.Engine = Engine