const awsIot = require("aws-iot-device-sdk");
const uuid = require('uuid');

exports.publishSchedules = (schedules)=>{
    const device = awsIot.device({
        keyPath: './IOT Certificates/private.pem.key',
        certPath: './IOT Certificates/certificate.pem.crt',
        caPath: './IOT Certificates/CA1.pem',
        clientId: "test-" + uuid.v1(),
        host: 'aa831y5q6lqw4-ats.iot.us-east-1.amazonaws.com',
        debug:true,

    });
    device
        .on('connect', function() {

            device.publish('Pet_Feeder/inSchedule', JSON.stringify({ schedules : schedules }));
        });
}