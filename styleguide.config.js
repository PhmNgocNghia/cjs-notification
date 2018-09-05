require('vue-loader');
const path = require('path')

module.exports = {
	components: 'src/components/mirror_components/**/*.vue',
	defaultExample: true,
	version: '1.0',
	styles: {
    Playground: {
      preview: {
        background: '#333333'
      }
    }
  },
  require: [
    path.join(__dirname, './node_modules/bootstrap/dist/css/bootstrap.min.css')
  ]
};
