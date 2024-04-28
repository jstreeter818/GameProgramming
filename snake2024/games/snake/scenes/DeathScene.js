import "../components/ScoreReaderComponent.js"
import "../components/EndSceneCounterComponent.js"

class DeathScene extends Scene {
    constructor(){
        super("black")
        this.aspectRatio = 5/8
        this.logicalWidth = 1000
    }
    start(ctx){
        Input.keysDown.splice(0, 1)

        let scoreGameObject = new GameObject("ScoreGameObject")
        scoreGameObject.addComponent(new Text("Score: ", "50px sans", "red"))
        scoreGameObject.addComponent(new ScoreReaderComponent())
        GameObject.instantiate(scoreGameObject, 50, 50)

        let deathTextGameObject = new GameObject("DeathTextGameObject")
        deathTextGameObject.addComponent(new Text("You Died", "50px sans", "red"))
        GameObject.instantiate(deathTextGameObject, 750, 500)

        let endSceneGameObject = new GameObject("EndSceneCounterGameObject")
        endSceneGameObject.addComponent(new EndSceneCounterComponent())
        GameObject.instantiate(endSceneGameObject)
    }
}

window.DeathScene = DeathScene