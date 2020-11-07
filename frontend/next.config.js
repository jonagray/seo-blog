// Environmental variables

// const withCSS = require('@zeit/next-css');

module.exports = {
  publicRuntimeConfig: {
    APP_NAME: 'SEOBLOG',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'https://seoblog.com',
    DISQUS_SHORTNAME: 'seotechblog-2',
    GOOGLE_CLIENT_ID: '288528131918-51mkp05a0bi5gp5bbf6etat5q6n2aa3s.apps.googleusercontent.com'
  }
};