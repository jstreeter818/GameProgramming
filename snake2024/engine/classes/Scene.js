class Scene {
    gameObjects = []
    hasStarted = false;

    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
        this.hasStarted = false
    }
    _start(ctx){
        if(!this.hasStarted){
            this.hasStarted = true
            if (this.start){
                this.start(ctx);
            }
            for(const gameObject of this.gameObjects){
                if(gameObject.start){
                    gameObject.start(ctx)
                }
            }
        }
    }
    update(ctx){
        for(const gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update(ctx)
            }
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        for (const gameObject of this.gameObjects) {
            if (gameObject.draw) {
                gameObject.draw(ctx)
            }

        }
    }
}

window.Scene = Scene