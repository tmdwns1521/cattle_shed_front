const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: process.env.VUE_APP_API_URL,
  },
};