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
            if(gameObject.name == "BodySegmentGameObject"){
                if (snakeHeadGameObject.transform.x == gameObject.transform.x && snakeHeadGameObject.transform.y == gameObject.transform.y){
                    Engine.currentScene = new DeathScene()
                }
            }
        }

        // Check collision between snake head and screen boundary
        if (
            snakeHeadGameObject.transform.x < 0 ||
            snakeHeadGameObject.transform.y < 0 ||
            snakeHeadGameObject.transform.scaleX + snakeHeadGameObject.transform.x > 1600 ||
            snakeHeadGameObject.transform.scaleY + snakeHeadGameObject.transform.y > 1000){
                Engine.currentScene = new DeathScene()
            }
    }
}

window.DeathComponent = DeathComponent