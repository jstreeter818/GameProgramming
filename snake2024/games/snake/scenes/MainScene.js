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
    
    this.aspectRatio = 5/8
    this.logicalWidth = 1000
  }

  start(ctx){
    let randomX = Math.floor(Math.random() * 80) * 20
    let randomY = Math.floor(Math.random() * 50) * 20

    let snakeHeadGameObject = new GameObject("SnakeHeadGameObject")
    snakeHeadGameObject.addComponent(new Rectangle("red"))
    snakeHeadGameObject.addComponent(new KeyboardComponent())
    snakeHeadGameObject.addComponent(new DeathComponent())
    GameObject.instantiate(snakeHeadGameObject, randomX, randomY, 20, 20)

    snakeHeadGameObject.getComponent("KeyboardComponent").nextBodyPart = snakeHeadGameObject

    randomX = Math.floor(Math.random() * 80) * 20
    randomY = Math.floor(Math.random() * 50) * 20

    while(randomX == snakeHeadGameObject.transform.x){
      randomX = Math.floor(Math.random() * 80) * 20
    }
    while(randomY == snakeHeadGameObject.transform.y){
      randomY = Math.floor(Math.random() * 50) * 20
    }

    GameObject.instantiate(new FoodGameObject(), randomX, randomY, 20, 20)

    let scoreGameObject = new GameObject("ScoreGameObject")
    scoreGameObject.addComponent(new Text("Score: ", "50px sans", "black"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    GameObject.instantiate(scoreGameObject, 50, 50)
  }
}

window.MainScene = MainScene