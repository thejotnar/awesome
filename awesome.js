var express = require('express');
var app = express()
var request = require('superagent');

var pn532 = require('pn532');
var SerialPort = require('serialport').SerialPort;

var serialPort = new SerialPort('/dev/cu.usbmodem1411', { baudrate: 115200 });
var rfid = new pn532.PN532(serialPort);

rfid.on('ready', function() {
    rfid.scanTag().then(function(tag) {
        console.log('tag:', tag.uid);
        console.log('taco');
        // var url = "http://192.168.2.103:3000/api/v1/checkins/p25GC3kR9BkppubYC/2870116671";

        // request
        // 	.post(url)
        // 	.end(function(err, res) {
        // 		if (err) {
        // 			console.log(err)
        // 		} else {
        // 			console.log(res)
        // 		}
        // 	})


    });
});





app.use(express.static('public'));
app.listen(3000, function() {
	console.log('hey sup')
	rfid.on('ready', function() {
		console.log('ready');
    rfid.scanTag().then(function(tag) {
        console.log('tag:', tag.uid);
        console.log('taco');
        // var url = "http://192.168.2.103:3000/api/v1/checkins/p25GC3kR9BkppubYC/2870116671";

        // request
        // 	.post(url)
        // 	.end(function(err, res) {
        // 		if (err) {
        // 			console.log(err)
        // 		} else {
        // 			console.log(res)
        // 		}
        // 	})


    });
});
});


//console.log("ground control to major tom");
