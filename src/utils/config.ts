const config = {
  'oauth_uri': 'https://github.com/login/oauth/authorize',
  'redirect_uri': 'http://localhost/login', // 请修改成你的信息
  'client_id': 'VUELEMDEMO', // 请修改成你的信息
  'client_secret': 'AE8D8ADD8762FACD97E5B2E3221A87D6', // 请修改成你的信息
};

// 本地开发环境下 （如下的信息在本地开发可以当测试用）
if (process.env.NODE_ENV === 'development') {
  config.redirect_uri = "http://localhost:3001/login"
  config.client_id = "502176CEC65773057A9E"
  config.client_secret = "65D444DE381A026301A2C7CFFB6952B9A86AC235"
}
export default config;
