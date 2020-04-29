# Unbrellapp - React hooks, Recharts, Material UI

## [LIVE DEMO] (https://umbrellapp.now.sh) &rarr; https://umbrellapp.now.sh



## Why build this app?

I built this project to teach myself how to use React hooks and to work on understanding how to create better UI. 

* The UI was created with [Material-UI] (https://material-ui.com/)
* The charts are made with [Recharts] (https://https://recharts.org/en-US/). 
* The weather icons were created by [Lance Snider] (https://codecanyon.net/user/dxc).


## Key Features

### Geolocation API

Upon launch, the app will ask for your permission to use your browser's geolocation coordinates to automatically fetch relevant weather data. If denied, you'll be presented with a simple search bar.

### Search, Map, Weather

I used the [MapBox API] (https://mapbox.com) to retrieve the coordinates of any search location. 

A really cool byproduct of this is that MapBox handles misspelled words and finds the location of a place that most closely resembles what you might be looking for.

Once MapBox gets the coordinate information, I send that info to the [Dark Sky API] (https://darksky.net) to retrieve weather info.

### Charts for better Data Visualization

I used Recharts to display all the weather data.

### Responsive Design

I've barely scratched the surface with understanding and utilizing all the advanced features of Material UI. In particular, I would like to dive deeper into theming and heavier component customizations. This app began with MUI's dashboard template and I built it up from there.


The UI is completely responsive and works across all screen sizes.
