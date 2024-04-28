class ScoreReaderComponent extends Component {
    update(){
        this.parent.getComponent("Text").text = "Score: " + Globals.score
    }
}
  
window.ScoreReaderComponent = ScoreReaderComponent