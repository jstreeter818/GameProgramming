class ScoreUpdaterComponent extends Component {
    start(){
      Globals.score = 0
      EventSystem.registerListener(this)
    }
    handleEvent(event){
      if(event.name == "foodCollision"){
        Globals.score += 1
      }
    }
    update(){
        this.parent.getComponent("Text").text = "" + Globals.score
    }
}
  
window.ScoreUpdaterComponent = ScoreUpdaterComponent