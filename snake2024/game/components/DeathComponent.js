class DeathComponent extends Component{
    constructor(){
        super()
        EventSystem.registerListener(this)
    }
    update(ctx){
        let snakeGameObject = null
        for (let gameObject of Engine.currentScene.gameObjects){
            if(gameObject.name == "SnakeGameObject"){
                snakeGameObject = gameObject
            }
        }

        if (!snakeGameObject) return;

        if (
            snakeGameObject.transform.x <= 0 ||
            snakeGameObject.transform.y <= 0 ||
            snakeGameObject.transform.scaleX + snakeGameObject.transform.x >= ctx.canvas.width ||
            snakeGameObject.transform.scaleY + snakeGameObject.transform.y >= ctx.canvas.height){
                Engine.currentScene = new DeathScene()
            }
    }
}

window.DeathComponent = DeathComponent