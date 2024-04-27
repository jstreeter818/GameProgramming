class BodySegmentGameObject extends GameObject{
    constructor(isLinkedToHead, name = "BodySegmentGameObject"){
        super(name);
        this.addComponent(new Rectangle("black"))
        this.isLinkedToHead = isLinkedToHead
    }
}

window.BodySegmentGameObject = BodySegmentGameObject