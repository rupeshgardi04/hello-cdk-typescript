import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { join } from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { handler } from "../restServices/node-lambda/hello";
export class HelloCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloLambdaNodeJs = new NodejsFunction(this, "helloLambdaNodeJs", {
      entry: join(__dirname, "..", "restServices", "node-lambda", "hello.ts"),
      handler: "handler",
    });
  }
}
