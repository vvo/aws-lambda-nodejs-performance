const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda-nodejs");

class HelloCdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new lambda.NodejsFunction(this, "my-handler");

    // The code that defines your stack goes here
  }
}

module.exports = { HelloCdkStack };
