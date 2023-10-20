# aznoqmous/mathdraw

```js
const canvas = MathDraw.draw((x)=> x > 0.5 ? Math.exp(x) * 2 : Math.sin(x-1), {
    /* Default values */
    minX: -Math.PI,
    maxX: Math.PI,
    minY: -Math.PI,
    maxY: Math.PI,
    height: 200, 
    width: 200
})
document.append(canvas)
```