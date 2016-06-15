var map;

function initialize() {
  console.log('Map initialized');

  //TODO: Move map options to separated file
  var stylesArray = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#444444"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
    }, {
      "lightness": 45
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "color": "#46bcec" //#46bcec
    }, {
      "visibility": "on"
    }]
  }]

  var map_center = {
    lat: 59.942571,
    lng: 30.258854
  };
  
  var options = {
    center: map_center,
    mapTypeControlOptions: {
      mapTypeIds: []
    },
    zoom: 10,
    styles: stylesArray,
    fullscreenControl: true
  }

  map = new google.maps.Map(document.getElementById('map'), options);
  console.log(map.getBounds());
  google.maps.event.addDomListener(window, "resize", function() {
      google.maps.event.trigger(map, "resize");
      map.setCenter(map_center);
  });

  google.maps.event.addListener(map, "dragend", function() {
      map_center = map.getCenter();
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
