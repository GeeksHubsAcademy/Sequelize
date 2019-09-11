const CONN=require('../config/sequelize');
const Sequelize=require('sequelize');

const DestinationModel=CONN.define('destination',{
    travel:Sequelize.STRING
},{
    timestamps: false //
})

module.exports=DestinationModel