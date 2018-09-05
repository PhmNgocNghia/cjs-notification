var ghpages = require('gh-pages');
 
ghpages.publish('styleguide', function(err) {
  if(err) {
    throw new Error('Error while deploy ghpages: ' + err)
  }
});