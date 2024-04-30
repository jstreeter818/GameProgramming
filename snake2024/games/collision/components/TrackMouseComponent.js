class TrackMouseComponent extends Component{
    constructor(){
        super()
    }

    update(){
        this.transform.x = Input.mousePosition.x
        this.transform.y = Input.mousePosition.y
    }
}

window.TrackMouseComponent = TrackMouseComponent