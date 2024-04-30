class Circle extends Component{
    constructor(fill = "blue", stroke = "purple"){
        super()
        this.fill = fill
        this.stroke = stroke
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.fill
        ctx.strokeStyle = this.stroke
        ctx.lineWidth = 10
        ctx.arc(this.transform.x, this.transform.y, this.transform.scaleX, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }
    asGeometry(){
        return new Circle2(this.transform.x, this.transform.y, this.transform.scaleX)
    }
}

window.Circle = Circle