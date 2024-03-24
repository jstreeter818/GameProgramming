class Input{
    static keysDown = []
    static mousePosition = { x: 0, y: 0 }

    static mousemove(e) {
        Input.mousePosition.x = e.clientX
        Input.mousePosition.y = e.clientY
    }

    static keyup(e) {
        //not using this code is also game specific
        //let index = Input.keysDown.indexOf(e.code)
        //Input.keysDown.splice(index, 1)
    }

    static keydown(e) {
        // This logic is game specific - should probably change/move this
        if (Input.keysDown.length == 1){
            Input.keysDown.splice(0, 1)
        }
        if (!Input.keysDown.includes(e.code)) {
            Input.keysDown.push(e.code)
        }
    }
}

window.Input = Input
export default Input