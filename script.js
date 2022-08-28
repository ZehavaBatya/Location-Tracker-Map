function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.7426369589774, lng: -86.87656531479203},
        zoom: 5,
        mapId: '{insert here}'
    });

    const marker = new google.maps.Marker({
        position: { lat: 41.95593944635574, lng: -87.56869780981485 },
        map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
        content: "Mario V. - Managing Director & Man of Steel",
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });


}

//Tennessee latitude and longitutde
//35.74263695897742, -86.87656531479203

//Chicago latittude and longitude
//41.95593944635574, -87.56869780981485
