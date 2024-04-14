class KeyboardComponent extends Component{
    constructor(){
        super()
        
    }
    start(){
        Globals.speed = 100
        this.secondsSinceLastFrame = 0;
    }
    update(){
        this.secondsSinceLastFrame += Time.deltaTime
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.x -= Globals.speed * this.secondsSinceLastFrame
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.x += Globals.speed * this.secondsSinceLastFrame
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.y -= Globals.speed * this.secondsSinceLastFrame
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.y += Globals.speed * this.secondsSinceLastFrame
        this.start()
    }
}

window.KeyboardComponent = KeyboardComponent