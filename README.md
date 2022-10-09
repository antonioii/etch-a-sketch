# Etch-a-sketch

My implementation of an Etch a Sketch (using HTML, CSS and JS) for [The Odin Project](https://theodinproject.com).
The Odin Project is a self-taught course focused on full stack web development.  

![ScreenShot](etch-a-sketch-layout.png)  

An 'Etch A Sketch' is a mechanical drawing toy which you can create pixelated,
or checkered-looking drawings using continuous lines. Learn more [HERE](https://en.wikipedia.org/wiki/Etch_A_Sketch).   

In [this exercise](https://www.theodinproject.com/lessons/foundations-etch-a-sketch), the goal was to create a virtual etch-a-sketch with some basic functionalities:
* Pencil (trace at low saturation that was reinforced with each pass),
* Pen (trace at full saturation),
* Rainbow (special brush to paint with random colors each square) functionality.   

I also add some extra features:   
* Color wheel to let the user pick a color,
* Eraser tool,
* Clear all button,
* Selection box to let the user choose a background color for the canvas,
* Selection box to let  the user choose between 1-32 matrix of rectangles.   

## Some more features which changes the initial concept of a simple Etch A Sketch:

1- The first idea was to use squares in order to compose the canvas, but using
rectangles had a more interesting final aesthetics in my opinion. To change it
back to squares, we could just assing a fix value to the 'canvasboard' width
and height with CSS.
2- Usually, an etch a sketch do not allow pauses between drawing lines, but in
order to make complex drawings easier to make and thus make it more fun, I add
a function to allow drawings to be done through click-drag actions and not simples
mouse moviment over the canvas.

---

## Notes    

* Due the lack of compatibility in many browsers, I prefered to use the "select tag" for the
resize button, instead the "range input type".   
