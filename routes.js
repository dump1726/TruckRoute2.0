// Initialize the map
var map = L.map('map').setView([37.5, -78.5], 7); // Centered on Virginia

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample GeoJSON for approved truck routes
var approvedRoutes = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [-77.5, 37.5],
          [-77.4, 37.6],
          [-77.3, 37.7]
        ]
      },
      "properties": {
        "name": "Sample Approved Truck Route"
      }
    }
  ]
};

// Add approved routes layer
L.geoJSON(approvedRoutes, {
  style: { color: "blue", weight: 4 },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
}).addTo(map);

// Sample GeoJSON for weight-restricted bridges
var restrictedBridges = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-77.5, 37.6]
      },
      "properties": {
        "name": "Sample Weight-Restricted Bridge (15 tons)"
      }
    }
  ]
};

// Add restricted bridges layer
L.geoJSON(restrictedBridges, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
}).addTo(map);
