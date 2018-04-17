function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 41.2915464, lng: 69.2280823},
        type: 'ROADMAP',
        mapTypeId: 'terrain'
    });

    setMarkers(map);

}


var locations = [
    ['Bondi Beach', 41.2915464, 69.2980823, 4],
    ['Coogee Beach', 41.2915460, 69.2080823, 5],
    ['Cronulla Beach', 41.2915470, 69.2180823, 3],
    ['Manly Beach', 41.2915474, 69.2380823, 2],
    ['Maroubra Beach', 41.2915464, 69.2290823, 1],
    ['MediaLux.uz', 41.327919, 69.274059, 9]
];

function setMarkers(map) {

    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var marker = new google.maps.Marker({
            position: {lat: location[1], lng: location[2]},
            map: map,
            icon: image,
            shape: shape,
            title: location[0],
            zIndex: location[3]
        });
    }
}