function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapId: '8baf7d3c6cfded63'
    });

    new goolge.map.Marker({
        position: { lat: -25.363, lng: 131.044 },
        map,
        title: "Hello-World!"
    });

}

// Insert latitude and longitutde of locations