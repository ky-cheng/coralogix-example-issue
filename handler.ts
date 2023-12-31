import middy from '@middy/core';
import doNotWaitForEmptyEventLoop from '@middy/do-not-wait-for-empty-event-loop';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';

const helloWorldHandler = async (event: any) => {
  console.log(event);
  console.log('returning hello world!')
  return {
    statusCode: 200,
    body: "Hello World!"
  };
};

const helloWorld = middy(helloWorldHandler)
  .use(doNotWaitForEmptyEventLoop())
  .use(httpHeaderNormalizer())
  .use(httpErrorHandler());

  module.exports = { helloWorldHandler, helloWorld };