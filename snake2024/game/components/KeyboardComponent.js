class KeyboardComponent extends Component{
    up = "UP"
    down = "DOWN"
    left = "LEFT"
    right = "RIGHT"

    //nextBodySegment

    constructor(){
        super()
        this.timeLeftToMove = 1
        this.timeBetweenMoves = 1
        this.nextMove = null
        this.speed = 20
        this.isGrowingThisFrame = false
        this.isLinkedToHead
        
    }
    start(){
        EventSystem.registerListener(this)
    }

    handleEvent(event){
        if(event.name == "foodCollision"){
            this.isGrowingThisFrame = true
        }
    }

    update(){
        // update input and store the next move
        if (Input.keysDown.includes("ArrowLeft"))
            this.nextMove = this.left
        if (Input.keysDown.includes("ArrowRight"))
            this.nextMove = this.right
        if (Input.keysDown.includes("ArrowUp"))
            this.nextMove = this.up
        if (Input.keysDown.includes("ArrowDown"))
            this.nextMove = this.down
        
        this.timeLeftToMove -= Time.deltaTime

        // check if it's time to move, then moves
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

            let currentBodyPart = this

            // update body segments
            while(currentBodyPart){
                let currentBodyPartOldX = currentBodyPart.transform.x
                let currentBodyPartOldY = currentBodyPart.transform.y
    
                currentBodyPart.transform.x = movingFromX
                currentBodyPart.transform.y = movingFromY
    
                movingFromX = currentBodyPartOldX
                movingFromY = currentBodyPartOldY
    
                if(this.isGrowingThisFrame == true && !currentBodyPart.nextBodyPart){
                    if(!GameObject.find("BodySegmentGameObject")){
                        this.isLinkedToHead = true
                    }else{
                        this.isLinkedToHead = false
                    }

                    let toInstantiate = new BodySegmentGameObject(this.isLinkedToHead);
                    GameObject.instantiate(toInstantiate, movingFromX, movingFromY, 20, 20)

                    currentBodyPart.nextBodyPart = toInstantiate;
                    this.isGrowingThisFrame = false
                    break;
                }
                currentBodyPart = currentBodyPart.nextBodyPart
            }
        }
    }
}

window.KeyboardComponent = KeyboardComponent