var fs = require('fs');

var filesToCheck = [
"eatdrink-main_solid_24px.svg",
"fast-food_solid_24px.svg",
"eatdrink-coffee_solid_24px.svg",
"night-club_solid_24px.svg",
"bar-pub_solid_24px.svg",
"karaoke_solid_24px.svg",
"billiards-pool-hall_solid_24px.svg",
"video-arcade-game-room_solid_24px.svg",
"beer-garden_solid_24px.svg",
"cinema_solid_24px.svg",
"theatre-music-culture_solid_24px.svg",
"gambling-lottery-betting_solid_24px.svg",
"travel-agent-ticketing_solid_24px.svg",
"landmark-attraction_solid_24px.svg",
"gallery_solid_24px.svg",
"museum_solid_24px.svg",
"religious-place_solid_24px.svg",
"generic_solid_24px.svg",
"marina_solid_24px.svg",
"natural-geographical_solid_24px.svg",
"airport_solid_24px.svg",
"train-station_solid_24px.svg",
"bus-station_solid_24px.svg",
"underground-train-subway_solid_24px.svg",
"commuter-rail-station_solid_24px.svg",
"ferry_solid_24px.svg",
"taxi_solid_24px.svg",
"tollbooth_solid_24px.svg",
"lightrail_solid_24px.svg",
"monorail_solid_24px.svg",
"aerial-tramway_solid_24px.svg",
"inclined-rail_solid_24px.svg",
"rest-area_solid_24px.svg",
"parking_solid_24px.svg",
"scenic-overlook-rest-area_solid_24px.svg",
"hotel-motel_solid_24px.svg",
"hotel_solid_24px.svg",
"lodging_solid_24px.svg",
"outdoor-recreation_solid_24px.svg",
"park-recreation-area_solid_24px.svg",
"amusement_solid_24px.svg",
"zoo_solid_24px.svg",
"ski-resort_solid_24px.svg",
"shopping-mall_solid_24px.svg",
"drugstore-pharmacy_solid_24px.svg",
"bookstore_solid_24px.svg",
"bank_solid_24px.svg",
"atm_solid_24px.svg",
"police-fire-emergency_solid_24px.svg",
"laundry_solid_24px.svg",
"business-service_solid_24px.svg",
"post_solid_24px.svg",
"tourist-information_solid_24px.svg",
"fueling-station_solid_24px.svg",
"ev-charging-station_solid_24px.svg",
"car-sales_solid_24px.svg",
"car-repair-service_solid_24px.svg",
"car-wash-detailing_solid_24px.svg",
"car-rental-agency_solid_24px.svg",
"hospital-health-care-facility_solid_24px.svg",
"hospital-emergency-room_solid_24px.svg",
"government-community-facility_solid_24px.svg",
"border-crossing_solid_24px.svg",
"education-facility_solid_24px.svg",
"library_solid_24px.svg",
"event-spaces_solid_24px.svg",
"parking-garage_solid_24px.svg",
"park-ride_solid_24px.svg",
"sports-facility-venue_solid_24px.svg",
"swimming-pool_solid_24px.svg",
"bowling-center_solid_24px.svg",
"fitness-health-club_solid_24px.svg",
"golf-course_solid_24px.svg",
"bike-park_solid_24px.svg",
"cemetry_solid_24px.svg",
"public-restroom-toilets_solid_24px.svg",
"business-main_solid_24px.svg"
];


console.log(`
++++++++++++++++++++++++++++++++++++++++++++++++++++++
 LIST OF FILES THAT DO NOT EXIST IN 'SVG' DIRECTORY:
++++++++++++++++++++++++++++++++++++++++++++++++++++++  
`);
filesToCheck.forEach ( (file) => {

  fs.stat('SVG/'+file, function(err) {
    if (!err) {
        //console.log(file, ': exists');
    }
    else if (err.code === 'ENOENT') {
        console.log(file);
    }
  });  

});


