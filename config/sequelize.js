const Sequelize = require( 'sequelize' );

const CONN = new Sequelize( 'viajes', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
} );

CONN.authenticate()
.then(() =>  console.log('Connection has been established successfully with MySQL.') )
.catch(err =>  console.error('Unable to connect to the MySQL db:', err) );
module.exports=CONN