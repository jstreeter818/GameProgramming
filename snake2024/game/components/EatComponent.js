class EatComponent extends Component{
    constructor(){
        super()
    }
    update(ctx){
        let snakeHeadGameObject = null
        for (let gameObject of Engine.currentScene.gameObjects){
            if(gameObject.name == "SnakeHeadGameObject"){
                snakeHeadGameObject = gameObject
            }
        }
        
        if (!snakeHeadGameObject) return;

        let collision = Collisions.isRectangleRectangleCollision(
            (this.transform.x + this.transform.scaleX), this.transform.x, this.transform.y, (this.transform.y + this.transform.scaleY),
            (snakeHeadGameObject.transform.x + snakeHeadGameObject.transform.scaleX), snakeHeadGameObject.transform.x, snakeHeadGameObject.transform.y, (snakeHeadGameObject.transform.y + snakeHeadGameObject.transform.scaleY))
            
        // add increase in speed and add one unit to snake
        if (collision){
            this.transform.x = Math.floor(Math.random() * ctx.canvas.width)
            this.transform.y = Math.floor(Math.random() * ctx.canvas.height)
            let event = {
                origin: this,
                name: "foodCollision"
            }
            EventSystem.fireEvent(event)
        }
    }
}

window.EatComponent = EatComponent