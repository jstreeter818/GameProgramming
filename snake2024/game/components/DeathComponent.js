class DeathComponent extends Component{
    constructor(){
        super()
        EventSystem.registerListener(this)
    }
    handleEvent(event){
        // handle collision with snake head and snake body
    }
    update(ctx){
        let snakeHeadGameObject = null
        for (let gameObject of Engine.currentScene.gameObjects){
            if(gameObject.name == "SnakeHeadGameObject"){
                snakeHeadGameObject = gameObject
            }
        }

        if (!snakeHeadGameObject) return;

        if (
            snakeHeadGameObject.transform.x <= 0 ||
            snakeHeadGameObject.transform.y <= 0 ||
            snakeHeadGameObject.transform.scaleX + snakeHeadGameObject.transform.x >= ctx.canvas.width ||
            snakeHeadGameObject.transform.scaleY + snakeHeadGameObject.transform.y >= ctx.canvas.height){
                Engine.currentScene = new DeathScene()
            }
    }
}

window.DeathComponent = DeathComponent