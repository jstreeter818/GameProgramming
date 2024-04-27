class DeathComponent extends Component{
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

        // Check collision between snake head and body segments
        // Needs fixed - breaks when turning with 2 body segments because the corners are colliding
        for (let gameObject of Engine.currentScene.gameObjects){
            if(gameObject.name == "BodySegmentGameObject" && !gameObject.isLinkedToHead){
                let collision = Collisions.isRectangleRectangleCollision(
                    (gameObject.transform.x + gameObject.transform.scaleX), gameObject.transform.x, gameObject.transform.y, (gameObject.transform.y + gameObject.transform.scaleY),
                    (snakeHeadGameObject.transform.x + snakeHeadGameObject.transform.scaleX), snakeHeadGameObject.transform.x, snakeHeadGameObject.transform.y, (snakeHeadGameObject.transform.y + snakeHeadGameObject.transform.scaleY))
                if(collision){
                    Engine.currentScene = new DeathScene()
                }
            }
        }

        // Check collision between snake head and screen boundary
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