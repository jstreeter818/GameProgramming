class CheckCollisionComponent extends Component{
    constructor(){
        super()
    }
    start(){
        this.mouseCursor = GameObject.find("MouseCursorGameObject")
    }

    update(){
        let collision = CollisionsGeometric.isVector2Circle2Collision(
            this.mouseCursor.getComponent("Point").asGeometry(),
            this.parent.getComponent("Circle").asGeometry()
        )

        if(collision){
            this.parent.components.find(c=>c.constructor.name == "Circle").fill = "blue"
        } else{
            this.parent.components.find(c=>c.constructor.name == "Circle").fill = "lightblue"
        }
    }
}

window.CheckCollisionComponent = CheckCollisionComponent