var program = require('commander');
var pkg = require('./package.json');
var db = require('./helpers/db');
var connection = db.connection;
var User = db.User;

program
  .version(pkg.version);

program
  .command('createuser <username> <password>')
  .description('creates a user with the provided information')
  .action(function(username, password) {
    var user = new User({
      username: username,
      password: password
    });

    user.save(function(err, user) {
      if (err) {
        console.error('An error occured when creating the user:', JSON.stringify(err));
        return;
      }

      connection.close();

      console.log('User', username, 'was created');
    });
  });

program.parse(process.argv);
