class ScoreUpdaterComponent extends Component {
    start(){
      Globals.score = 0
    }
    update(){
        this.parent.components[1].text = "Score: " + Globals.score
    }
}
  
window.ScoreUpdaterComponent = ScoreUpdaterComponent
export default ScoreUpdaterComponent