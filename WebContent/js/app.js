"use strict";

function search(){
	
	var locationValue = document.getElementbyId("location").value;
	$.ajax({
		  url: "https://api.foursquare.com/v2/venues/search?client_id=ANNWWLGLZ1TZYWX1KZQTZSKIYDFW2ZS30LOL20CBA4JM0RBP&client_secret=MSL014OPY1RLI4P2K35ZYMOFPO3GPKBLPFOF44KJFG2UBTGE&v=20130815&ll=London",
		  context: document.body
		}).done(function() {
		  alert("done");
		});
	
}
