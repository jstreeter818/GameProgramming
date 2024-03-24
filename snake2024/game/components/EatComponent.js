class EatComponent extends Component{
    constructor(){
        super()
    }
    update(ctx){
        let snakeGameObject = null
        for (let gameObject of Engine.currentScene.gameObjects){
            if(gameObject.name == "SnakeGameObject"){
                snakeGameObject = gameObject
            }
        }
        
        if (!snakeGameObject) return;

        let collision = Collisions.isRectangleRectangleCollision(
            (this.transform.x + this.transform.scaleX), this.transform.x, this.transform.y, (this.transform.y + this.transform.scaleY),
            (snakeGameObject.transform.x + snakeGameObject.transform.scaleX), snakeGameObject.transform.x, snakeGameObject.transform.y, (snakeGameObject.transform.y + snakeGameObject.transform.scaleY))
            
        // add increase in speed and add one unit to snake
        if (collision){
            this.transform.x = Math.floor(Math.random() * ctx.canvas.width)
            this.transform.y = Math.floor(Math.random() * ctx.canvas.height)
            Globals.score++
            if (Globals.score % 5 == 0){
                Globals.speed += 10
            }
        }
    }
}

window.EatComponent = EatComponent
export default EatComponent