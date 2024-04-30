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

        if (snakeHeadGameObject.transform.x == this.transform.x && snakeHeadGameObject.transform.y == this.transform.y){
            this.transform.x = (Math.floor(Math.random() * 80) * 20) + 10
            this.transform.y = (Math.floor(Math.random() * 50) * 20) + 10
            let event = {
                origin: this,
                name: "foodCollision"
            }
            EventSystem.fireEvent(event)
        }
    }
}

window.EatComponent = EatComponent