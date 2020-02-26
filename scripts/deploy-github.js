const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish('private', {
  branch: 'master',
  repo: 'https://github.com/rustyblue100/sebastienfrancisque.github.io.git',
});
