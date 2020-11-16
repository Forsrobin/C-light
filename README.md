# LIGHT SHOWW
This is a project made for controlling and setting up light modules to your preference.
You have a web interface where you can create custom presetes and also create light shows
for home partys or events.

![Image of Neopixel](https://raw.githubusercontent.com/AchimPieters/Fritzing-Custom-Parts/master/New%20Parts/Neopixel%20Strip%20RGB.png)

### HOW IT WORKS
It works by setting up a network with sockets and calling them with different API calls
for different effects. All the modules have different API calls so look below for information
about all features.

# API
##### Static
Static displays a static color of your choice

```
{ animation: 'static', duration: 1000, color: { r:255, g:0, b:0 } }
```

##### Slide in
The slide in have differnet directions `left` `right` `center`

```
{ animation: 'slide_in', duration: 1000, color: { r:255, g:0, b:0 }, direction: 'left' }
```

##### Snake
The snake effect creates a pulse of `n` leds moving in your direction. Snake have differnet directions `left` `right` `center`

```
{ animation: 'snake', duration: 1000, color: { r:255, g:0, b:0 }, numLeds: 5, direction: 'left' }
```
