var AWS = require("aws-sdk");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = event => {
  const sns = new AWS.SNS();


  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
    var params = {
      Message: 'DynamoDB Record: %j', 
      Subject: "Test SNS From Lambda",
      TopicArn: "arn:aws:sns:us-east-2:796072252262:tnc-amplify-dev-sns-topic"
    };
    sns.publish(params, record);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};

/* https://docs.amplify.aws/cli/usage/lambda-triggers/#as-a-part-of-the-graphql-api-types-with-model-annotation
const AWS = require('aws-sdk');
const records = event.Records.map((record) => ({
  new: AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage),
  old: AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage)
}));

 */