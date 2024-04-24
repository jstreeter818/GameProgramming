class KeyboardComponent extends Component{
    up = "UP"
    down = "DOWN"
    left = "LEFT"
    right = "RIGHT"

    nextBodySegment

    constructor(){
        super()
        this.timeLeftToMove = 1
        this.timeBetweenMoves = 1
        this.nextMove = this.down
        this.speed = 20
        this.isGrowingThisFrame = false
        
    }
    start(){
        EventSystem.registerListener(this)
    }

    handleEvent(event){
        if(event.name == "foodCollision"){
            console.log(event.name)
            this.isGrowingThisFrame = true
        }
    }
    update(){
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.nextMove = this.left
        if (Input.keysDown.includes("ArrowRight"))
            this.nextMove = this.right
        if (Input.keysDown.includes("ArrowUp"))
            this.nextMove = this.up
        if (Input.keysDown.includes("ArrowDown"))
            this.nextMove = this.down
        
        this.timeLeftToMove -= Time.deltaTime

        if(this.timeLeftToMove <= 0){
            this.timeLeftToMove = this.timeBetweenMoves

            let movingFromX = this.transform.x
            let movingFromY = this.transform.y

            if(this.nextMove == this.up)
                this.transform.y -= this.speed
            if(this.nextMove == this.down)
                this.transform.y += this.speed
            if(this.nextMove == this.left)
                this.transform.x -= this.speed
            if(this.nextMove == this.right)
                this.transform.x += this.speed

            let bodyPart = this.nextBodyPart

            while(bodyPart){
                let bodyPartOldX = bodyPart.transform.x
                let bodyPartOldY = bodyPart.transform.y
    
                bodyPart.transform.x = movingFromX
                bodyPart.transform.y = movingFromY
    
                movingFromX = bodyPartOldX
                movingFromY = bodyPartOldY
    
                if(this.isGrowingThisFrame == true && !bodyPart.nextBodyPart){
                    let toInstantiate = new BodySegmentGameObject();
                    GameObject.instantiate(toInstantiate, movingFromX, movingFromY, 20, 20)
                    bodyPart.nextBodyPart = toInstantiate;
                    this.isGrowingThisFrame = false
                    break;
                }
                bodyPart = bodyPart.nextBodyPart
            }
        }
    }
}

window.KeyboardComponent = KeyboardComponent