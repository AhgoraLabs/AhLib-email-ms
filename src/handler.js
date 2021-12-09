"use strict";

const aws = require('aws-sdk');
const ses = new aws.SES({ region: "us-east-1" });

exports.mail = async function (event) {
  const payload = JSON.parse(event.body);

  var params = {
    Destination: {
      ToAddresses: payload.to,
    },
    Message: {
      Body: {
        Text: { Data: payload.content },
      },

      Subject: { Data: payload.subject },
    },
    Source: "pedrosarkisverani@gmail.com",
  };

  return ses.sendEmail(params).promise()
};
