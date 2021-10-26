const awsIot = require("aws-iot-device-sdk");
const uuid = require('uuid');
const DateOperations = require("./DateOperations")

exports.publishSchedules = (operation, id, title, date_time) => {
    const device = awsIot.device({
        keyPath: './IOT Certificates/SPF-private.pem.key',
        certPath: './IOT Certificates/SPF-certificate.pem.crt',
        caPath: './IOT Certificates/SPF_CA1.pem',
        clientId: "Pet_Feeder-" + uuid.v1(),
        host: 'a2w34sx94ep89b-ats.iot.us-east-1.amazonaws.com',
        debug: true,

    });
    device
        .on('connect', function () {

            if (operation !== "Delete") {
                device.publish('Pet_Feeder/Schedules', JSON.stringify({
                    operation: operation,
                    id: id,
                    title: title,
                    date: DateOperations.extractDate(date_time),
                    time: DateOperations.extractTime(date_time)
                }));
            } else {
                device.publish('Pet_Feeder/Schedules', JSON.stringify({
                    operation: operation,
                    id: id,
                }));
            }

        });
}