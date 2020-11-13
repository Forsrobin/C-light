#LIGHT SHOWW
This is a project made for controlling and setting up light modules to your preference.
You have a web interface where you can create custom presetes and also create light shows
for home partys or events.

###HOW IT WORKS
It works by setting up a network with sockets and calling them with different API calls
for different effects. All the modules have different API calls so look below for information
about all features.

## API
```
fadeIn duration color {r,g,b} direction
```
`
Exmample:
{ animation: 'fadeIn', duration: 1000, color: { r:255, g:0, b:0 }, direction: 'left' }
`
```
colorWipeLeftRight animationTime duration color {r,g,b}
```
```
clear duration
```
```
theaterChase duration color {r,g,b}
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
