# Anime.js Attributes Reference

## Animation Parameters

- `targets`: Elements to animate. Can be a CSS selector, DOM node, or an array of elements.
- `duration`: Animation duration in milliseconds.
- `delay`: Delay before starting the animation (in milliseconds).
- `endDelay`: Delay after the animation has finished (in milliseconds).
- `easing`: The easing function for the animation.
- `round`: Rounds the animated values to integers.
- `direction`: Can be 'normal', 'reverse', 'alternate', or 'alternate-reverse'.
- `loop`: Number of times to loop the animation. Use `true` for infinite loops.

## Property Parameters

- `value`: The value to animate to. Can be a number, string, or an array of values.
- `from`: Starting value of the animation.
- `to`: Ending value of the animation.
- `duration`: Duration for this specific property (overrides main duration).
- `delay`: Delay for this specific property.
- `easing`: Easing for this specific property.

## SVG Parameters

- `fill`: Fill color of SVG shapes.
- `stroke`: Stroke color of SVG shapes.
- `strokeDashoffset`: Offset of the stroke dash array.
- `strokeDasharray`: Dash array of the stroke.

## DOM Parameters

- `translateX`, `translateY`, `translateZ`: Translation along X, Y, or Z axis.
- `rotate`, `rotateX`, `rotateY`, `rotateZ`: Rotation in degrees.
- `scale`, `scaleX`, `scaleY`, `scaleZ`: Scaling factor.
- `skew`, `skewX`, `skewY`: Skew transformation in degrees.
- `perspective`: Perspective distance for 3D transforms.
- `opacity`: Opacity of the element.
- `backgroundColor`: Background color of the element.
- `color`: Text color of the element.
- `width`, `height`: Width and height of the element.
- `top`, `right`, `bottom`, `left`: Positioning of the element.

## Object Parameters

- Any custom property of a JavaScript object can be animated.

## Function-based Parameters

- Any parameter can be a function that returns a value.

## Staggering

- `delay`: Function that returns a delay value for each animated element.

## Callback and Promise Parameters

- `update`: Callback function called on every frame of the animation.
- `begin`: Callback function called when the animation begins.
- `complete`: Callback function called when the animation completes.
- `loopBegin`: Callback function called at the beginning of each loop.
- `loopComplete`: Callback function called at the end of each loop.
- `changeBegin`: Callback function called when the animation changes begins.
- `changeComplete`: Callback function called when the animation changes completes.

## Timeline Parameters

- `timelineOffset`: Offset time for adding animations to a timeline.

Remember that some of these attributes are used when creating an animation instance, while others are used as properties within the animation object. Always refer to the official Anime.js documentation for the most up-to-date and detailed information.


# Anime.js Easing Attributes

Easing functions in Anime.js define the rate of change of an animation over time. They can make animations feel more natural by mimicking real-world physics.

## Built-in Easing Functions

Anime.js provides several built-in easing functions:

1. Linear
   - `linear`

2. Quad
   - `easeInQuad`
   - `easeOutQuad`
   - `easeInOutQuad`

3. Cubic
   - `easeInCubic`
   - `easeOutCubic`
   - `easeInOutCubic`

4. Quart
   - `easeInQuart`
   - `easeOutQuart`
   - `easeInOutQuart`

5. Quint
   - `easeInQuint`
   - `easeOutQuint`
   - `easeInOutQuint`

6. Sine
   - `easeInSine`
   - `easeOutSine`
   - `easeInOutSine`

7. Expo
   - `easeInExpo`
   - `easeOutExpo`
   - `easeInOutExpo`

8. Circ
   - `easeInCirc`
   - `easeOutCirc`
   - `easeInOutCirc`

9. Back
   - `easeInBack`
   - `easeOutBack`
   - `easeInOutBack`

10. Bounce
    - `easeInBounce`
    - `easeOutBounce`
    - `easeInOutBounce`

11. Elastic
    - `easeInElastic`
    - `easeOutElastic`
    - `easeInOutElastic`

## Custom Easing

You can also define custom easing functions:

```javascript
anime({
  targets: '.element',
  translateX: 250,
  easing: function(el, i, total) {
    return function(t) {
      return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
});
```

## Cubic Bezier Curves

Anime.js supports cubic Bezier curves for precise control:

```javascript
anime({
  targets: '.element',
  translateX: 250,
  easing: 'cubicBezier(.5, .05, .1, .3)'
});
```

## Spring Physics

For spring-like animations:

```javascript
anime({
  targets: '.element',
  translateX: 250,
  easing: 'spring(1, 80, 10, 0)'
});
```

Parameters: `mass, stiffness, damping, velocity`

## Usage Example

```javascript
anime({
  targets: '.element',
  translateX: 250,
  easing: 'easeInOutQuad'
});
```

Remember to experiment with different easing functions to achieve the desired feel for your animations.