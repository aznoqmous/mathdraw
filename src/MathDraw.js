export default class MathDraw {
    constructor(func, opts={}){
        this.func = func
        this.opts = Object.assign({
            minX: -Math.PI,
            maxX: Math.PI,
            minY: -Math.PI,
            maxY: Math.PI,
            height: 200, 
            width: 200
        }, opts)
        this.build()
        this.draw()
    }
    get minX(){ return this.opts.minX }
    get maxX(){ return this.opts.maxX }
    get minY(){ return this.opts.minY }
    get maxY(){ return this.opts.maxY }
    get width(){ return this.opts.width }
    get height(){ return this.opts.height }
    get canvas(){ return this.c }

    build(){
        this.c = document.createElement('canvas')
        this.ctx = this.c.getContext('2d')
        this.c.width = this.width
        this.c.height = this.height
    }

    draw(){
        const ratioX = (this.maxX - this.minX) / this.width
        const ratioY = (this.maxY - this.minY) / this.height
        let pixelX = 0
        
        this.ctx.strokeStyle = "#ddd"
        this.ctx.beginPath()
        this.ctx.moveTo(-this.minX / ratioX, 0)
        this.ctx.lineTo(-this.minX / ratioX, this.height)
        this.ctx.stroke()
        this.ctx.beginPath()
        this.ctx.moveTo(0, -this.minY / ratioY)
        this.ctx.lineTo(this.width, -this.minY / ratioY)
        this.ctx.stroke()

        this.ctx.strokeStyle = "#666"
        for(let x = this.minX; x < this.maxX; x += ratioX){
            let pixelY = this.func(x) / ratioY - this.minY / ratioY
            this.ctx.fillStyle = "#0055ff"
            this.ctx.fillRect(pixelX, this.height - pixelY, 1, 1)
            pixelX++
        }
        

    }

    static draw(func, opts={}){
        const mdraw = new MathDraw(func, opts)
        return mdraw.canvas
    }

}