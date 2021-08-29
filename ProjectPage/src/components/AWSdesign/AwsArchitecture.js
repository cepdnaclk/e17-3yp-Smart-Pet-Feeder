import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import aws from "../../assets/images/Aws/AWS.png";

const AwsArchitecture = () => (
  <section id="architecture" className="dark_bg">
    <div className="container">
      <div className="row">
        <div>
          <HeadingSection
            title="AWS Architecture"
            tagline=""
            classAppend="text-white"
          >
            <div className="pb-5">
              <img src={aws} />
            </div>
            Initially the pet feeder will be configured as a thing in the AWS
            IoT. Pet feeder and AWS IoT will communicate using the MQTT
            protocol. When IoT receives a message from pet feeder, AWS IoT will
            execute a lambda function according to the rules that are defined.
            AWS IAM is used for Authentication purposes. AWS DynamoDB is used as
            the storage. It interacts with AWS lambda functions. AWS lambda The
            CRUD operations of AWS DynamoDB is performed by AWS Lambda
            functions.
            <br />
            <br />
            Live streaming data from the pet feeder is directed to the AWS
            Kinesis. That data will be processed using video processing
            application and converts to formats like MPEG4. Converted Streams
            will be sent to the UI for streaming.
            <br />
            <br />
            The UI can communicate with the UI via the AWS API gateway. When
            request is received to the gateway, API gateway will execute
            relevant lambda functions. Before executing relevant lambda
            functions, the request will be validated using another AWS lambda
            function. For that token based authentication is used.
          </HeadingSection>
        </div>
      </div>
    </div>
  </section>
);

export default AwsArchitecture;
