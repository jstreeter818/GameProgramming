class SnakeBodyComponent extends Component{
    constructor(){
        super()
        this.segments = [];
    }
    start(){
        const headGameObject = new GameObject("headGameObject")
        headGameObject.addComponent(new Rectangle("Black"))

        // set position of head to be the same as snake game object transform
        // the game doesn't draw the head game object, it's just there to represent the position of the head
        let snakeGameObject = GameObject.find("SnakeGameObject")
        headGameObject.transform.x = snakeGameObject.transform.x
        headGameObject.transform.y = snakeGameObject.transform.y
        headGameObject.transform.scaleX = 20
        headGameObject.transform.scaleY = 20
        this.segments.push(headGameObject)

        const testSegmentGameObject = new GameObject("testSegmentGameObject")
        testSegmentGameObject.addComponent(new Rectangle("Black"))
        testSegmentGameObject.transform.x = (headGameObject.transform.x - 20)
        testSegmentGameObject.transform.y = (headGameObject.transform.y - 20)
        testSegmentGameObject.transform.scaleX = 20
        testSegmentGameObject.transform.scaleY = 20
        this.segments.push(testSegmentGameObject)

        
    }
    update(){
        // If head collides with food, add segment
        let snakeGameObject = GameObject.find("SnakeGameObject")
        this.segments[0].transform.x = snakeGameObject.transform.x
        this.segments[0].transform.y = snakeGameObject.transform.y

        // Update position of all segments based on position of head
        for (let i = this.segments.length - 1; i > 0; i--){
            this.segments[i].transform.x = this.segments[i-1].transform.x
            this.segments[i].transform.y = this.segments[i-1].transform.y
        }
    }
    draw(ctx){
        // iterate through each segment
        // call segment.draw() to draw each segment
        for(let i = 1; i < this.segments.length; i++){
            this.segments[i].draw(ctx);
        }
    }
}
window.SnakeBodyComponent = SnakeBodyComponent