class CameraMoverComponent extends Component{
    start(ctx){
        this.lastMouseX
        this.lastMouseY
    }
    update(ctx){

        let scene = Engine.currentScene

        let logicalWidthNoZoom = scene.logicalWidth
        let logicalHeightNoZoom = logicalWidthNoZoom/scene.aspectRatio

        let screenXWOLetterBoxing = Input.mousePosition.x
        let screenYWOLetterBoxing = Input.mousePosition.y

        let screenXWithLetterBoxing = screenXWOLetterBoxing - scene.letterBox1End
        let screenYWithLetterBoxing = screenYWOLetterBoxing

        let cameraXAsPercent = screenXWithLetterBoxing/scene.logicalWidthViewWidthInPixels
        let cameraYAsPercent = screenYWithLetterBoxing/scene.logicalWidthViewHeightInPixels

        if(this.lastMouseX && this.lastMouseY){
            let cameraZoom = Camera.main.transform.scaleX

            if(Input.mouseDown){
                let x = Input.mousePosition.x
                let y = Input.mousePosition.y

                let diffX = x - this.lastMouseX
                let diffY = y - this.lastMouseY

                let logicalWidth = Engine.currentScene.logicalWidth
                let logicalHeight = logicalWidth / Engine.currentScene.aspectRatio

                Camera.main.transform.x -= (diffX * logicalWidth/Engine.currentScene.logicalWidthViewWidthInPixels) / cameraZoom
                Camera.main.transform.y -= (diffY * logicalHeight/Engine.currentScene.logicalWidthViewHeightInPixels) / cameraZoom
            }

            if(Input.wheelDelta != 0){
                let cameraZoom1 = cameraZoom

                if(Input.wheelDelta > 0){
                    cameraZoom *= 1.1

                    Camera.main.transform.scaleX = cameraZoom
                    Camera.main.transform.scaleY = cameraZoom
                }

                if(Input.wheelDelta < 0){
                    cameraZoom /= 1.1

                    Camera.main.transform.scaleX = cameraZoom
                    Camera.main.transform.scaleY = cameraZoom
                }

                let cameraDeltaX = cameraXAsPercent*logicalWidthNoZoom*(1/cameraZoom1-1/cameraZoom)
                let cameraDeltaY = cameraYAsPercent*logicalHeightNoZoom*(1/cameraZoom1-1/cameraZoom)

                Camera.main.transform.x += cameraDeltaX
                Camera.main.transform.y += cameraDeltaY
            }
        }
        this.lastMouseX = Input.mousePosition.x
        this.lastMouseY = Input.mousePosition.y
    }
}

window.CameraMoverComponent = CameraMoverComponent