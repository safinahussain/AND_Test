"use strict";

function search(){
	
	var locationValue = document.getElementbyId("location").value;
	$.ajax({
		  url: "https://api.foursquare.com/v2/venues/search?ll=51.52,00.03&client_id=ANNWWLGLZ1TZYWX1KZQTZSKIYDFW2ZS30LOL20CBA4JM0RBP&client_secret=MSL014OPY1RLI4P2K35ZYMOFPO3GPKBLPFOF44KJFG2UBTGE&v=20150825",
		  context: document.body
		}).done(function() {
		  alert("done");
		});
	
}
