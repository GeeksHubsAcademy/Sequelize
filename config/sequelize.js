const db=require('../models/index')

CONN=db.sequelize.authenticate()
.then(() =>  console.log('Connection has been established successfully with MySQL.') )
.catch(err =>  console.error('Unable to connect to the MySQL db:', err) );
module.exports=CONN