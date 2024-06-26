const {
    createClient,
    createHttpClient,
    createAuthForClientCredentialsFlow,
  } = require ('@commercetools/sdk-client-v2')
  const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
  
  const fetch = require("node-fetch");
  const projectKey = process.env.CTP_PROJECT_KEY;
  const getClient = () => {
    
    const authMiddleware = createAuthForClientCredentialsFlow({
      host: process.env.CTP_AUTH_URL,
      projectKey,
      credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET,
      },
      fetch,
    });
  const httpMiddleware = createHttpClient({
      host: process.env.CTP_API_URL,
      fetch,
    });
  const ctpClient = createClient({
      middlewares: [authMiddleware, httpMiddleware],
    });
    return ctpClient;
  };

  module.exports.apiRoot = createApiBuilderFromCtpClient(getClient());

module.exports.projectKey = projectKey;