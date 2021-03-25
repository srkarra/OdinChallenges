// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
let dynamoData = new AWS.DynamoDB({apiVersion: 'latest'});

// Call DynamoDB to retrieve the list of tables
dynamoData.listTables({Limit: 10}, function(err, data) {
    if (err) {
        console.log("Error", err.code);
    } else {
        console.log("Table names are ", data.TableNames);
    }
});
dynamoData.scan({TableName: "Users"})
.promise()
.then(data =>console.log(data.Items))
    .catch(console.error)