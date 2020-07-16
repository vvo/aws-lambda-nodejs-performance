const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda-nodejs");

class HelloCdkStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    new lambda.NodejsFunction(this, "my-handler");
  }
}

module.exports = { HelloCdkStack };
