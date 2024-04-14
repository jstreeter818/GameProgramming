import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/EatComponent.js"
import "../components/SnakeBodyComponent.js"

import "../prefabs/FoodGameObject.js"


import "/engine/Engine.js"

class MainScene extends Scene {
  constructor(){
    super("lightblue")
  }

  start(ctx){
    let snakeGameObject = new GameObject("SnakeGameObject")
    snakeGameObject.addComponent(new Rectangle("black"))
    snakeGameObject.addComponent(new KeyboardComponent())
    snakeGameObject.addComponent(new DeathComponent())
    snakeGameObject.addComponent(new SnakeBodyComponent())
    GameObject.instantiate(snakeGameObject, Math.floor(Math.random() * ctx.canvas.width), Math.floor(Math.random() * ctx.canvas.height), 20, 20)
    
    GameObject.instantiate(new FoodGameObject(), 200, 200, 20, 20)

    let scoreGameObject = new GameObject()
    scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    GameObject.instantiate(scoreGameObject, 30, 30)
  }

}

window.MainScene = MainScene