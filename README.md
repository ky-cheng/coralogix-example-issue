# coralogix-example-issue
Coralogix integration issue example
* make sure you have coralogix send your data key setup in Parameter Store /coralogix/send-your-data-key
# to deploy
sls deploy --region ap-southeast-2 --force --aws-s3-accelerate -s dev
