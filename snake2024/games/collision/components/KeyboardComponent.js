class KeyboardComponent extends Component{
    constructor(){
        super()
    }
    update(){
        if(Input.keysDown.includes("ArrowLeft")){
            this.transform.x -= 10
        }
        if(Input.keysDown.includes("ArrowRight")){
            this.transform.x += 10
        }
        if(Input.keysDown.includes("ArrowUp")){
            this.transform.y -= 10
        }
        if(Input.keysDown.includes("ArrowDown")){
            this.transform.y += 10
        }
    }
}

window.KeyboardComponent = KeyboardComponent