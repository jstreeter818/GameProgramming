import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/EatComponent.js"
import "../components/AddBlockComponent.js"

class MainScene extends Scene {
  constructor(){
    super("lightblue")

    let canvas = document.querySelector("#canv")
    let ctx = canvas.getContext("2d")

    let snakeGameObject = new GameObject("SnakeGameObject")
    snakeGameObject.addComponent(new Rectangle("black"))
    snakeGameObject.addComponent(new KeyboardComponent())
    snakeGameObject.addComponent(new DeathComponent())
    
    snakeGameObject.transform.x = 500
    snakeGameObject.transform.y = 500
    snakeGameObject.transform.scaleX = 20
    snakeGameObject.transform.scaleY = 20
    this.gameObjects.push(snakeGameObject)  

    let foodGameObject = new GameObject("foodGameObject")
    foodGameObject.addComponent(new Rectangle("green", "darkgreen"))
    foodGameObject.addComponent(new EatComponent())

    // This is where I need canvas element
    foodGameObject.transform.x = Math.floor(Math.random() * ctx.canvas.width)
    foodGameObject.transform.y = Math.floor(Math.random() * ctx.canvas.height)

    foodGameObject.transform.scaleX = 20
    foodGameObject.transform.scaleY = 20
    this.gameObjects.push(foodGameObject)

    let scoreGameObject = new GameObject()
    scoreGameObject.transform.x = 30;
    scoreGameObject.transform.y = 30;
    scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
    scoreGameObject.addComponent(new ScoreUpdaterComponent())
    this.gameObjects.push(scoreGameObject)
  }

}

window.MainScene = MainScene
export default MainScene