import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/EatComponent.js"

import "../prefabs/FoodGameObject.js"
import "../prefabs/BodySegmentGameObject.js"

import "/engine/Engine.js"

class MainScene extends Scene {
  constructor(){
    super("lightblue")
  }

  start(ctx){
    let snakeHeadGameObject = new GameObject("SnakeHeadGameObject")
    snakeHeadGameObject.addComponent(new Rectangle("black"))
    snakeHeadGameObject.addComponent(new KeyboardComponent())
    snakeHeadGameObject.addComponent(new DeathComponent())
    GameObject.instantiate(snakeHeadGameObject, Math.floor(Math.random() * ctx.canvas.width), Math.floor(Math.random() * ctx.canvas.height), 20, 20)

    let snakeBodyGameObject = new GameObject("SnakeBodyGameObject")
    snakeBodyGameObject.addComponent(new Rectangle("black"))
    GameObject.instantiate(snakeBodyGameObject, snakeHeadGameObject.transform.x, snakeHeadGameObject.transform.y - 20, 20, 20)

    snakeHeadGameObject.getComponent("KeyboardComponent").nextBodyPart = snakeBodyGameObject

    
    GameObject.instantiate(new FoodGameObject(), Math.floor(Math.random() * ctx.canvas.width), Math.floor(Math.random() * ctx.canvas.height), 20, 20)

    let scoreGameObject = new GameObject()
    scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    GameObject.instantiate(scoreGameObject, 30, 30)
  }
}

window.MainScene = MainScene