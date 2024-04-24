class BodySegmentGameObject extends GameObject{
    constructor(name = "BodySegmentGameObject"){
        super(name);
        this.addComponent(new Rectangle("black"))
    }
    
}

window.BodySegmentGameObject = BodySegmentGameObject