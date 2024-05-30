class ScoreUpdaterComponent extends Component {
    start(){
      Globals.score = 0
      EventSystem.registerListener(this)
    }
    handleEvent(event){
      if(event.name == "foodCollision"){
        Globals.score += 1
        if(Globals.score % 5 == 0){
          let event = {
            name: "speedIncrease"
          }
          EventSystem.fireEvent(event)
        }
      }
    }
    update(){
        this.parent.getComponent("Text").text = "Score: " + Globals.score
    }
}
  
window.ScoreUpdaterComponent = ScoreUpdaterComponent