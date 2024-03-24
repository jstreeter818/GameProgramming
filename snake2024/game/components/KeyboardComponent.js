class KeyboardComponent extends Component{
    constructor(){
        super()
        
    }
    start(){
        Globals.speed = 100
    }
    update(){
        
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.x -= Globals.speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.x += Globals.speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.y -= Globals.speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.y += Globals.speed / Time.fps
    }
}

window.KeyboardComponent = KeyboardComponent
export default KeyboardComponent