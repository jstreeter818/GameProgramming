class FoodGameObject extends GameObject{
    constructor(name = "FoodGameObject"){
        super(name)
    }
    start(ctx){
        this.addComponent(new EatComponent())
        this.addComponent(new Rectangle("green", "darkgreen"))
    }
}

window.FoodGameObject = FoodGameObject
