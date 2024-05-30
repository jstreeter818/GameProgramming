class CircleGameObject extends GameObject{
    constructor(name = "CircleGameObject"){
        super(name)
        this.addComponent(new Circle("lightblue", "blue"))
        this.addComponent(new CheckCollisionComponent())
        this.addComponent(new KeyboardComponent())
    }
}

window.CircleGameObject = CircleGameObject