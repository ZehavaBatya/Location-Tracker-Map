function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.7426369589774, lng: -86.87656531479203},
        zoom: 18,
        mapId: '80030035c9fe76e3'
    });

    new goolge.map.Marker({
        position: {lat: 35.7426369589774, lng: -86.87656531479203},
        map,
        title: "Hello-World!"
    });
}

//Tennessee latitude and longitutde
//35.74263695897742, -86.87656531479203

