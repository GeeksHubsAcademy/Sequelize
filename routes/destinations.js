const express = require( 'express' );
const router = express.Router();
const DestinationModel = require( '../models/Destination' );
const Sequelize = require( 'sequelize' )
const Op = Sequelize.Op;
router.get( '/', ( req, res ) => {
    // DestinationModel.find( { id: { $gt: 1 } } ) //mongodb query
    DestinationModel.findAll( {
            where: {
                [ Op.gt ]: [ { id: 1 } ] }
        } ).then( destinations => res.send( destinations ) )
        .catch( console.log )
} )
router.post( '/', ( req, res ) => {
    console.log( req.body );
    DestinationModel.create( req.body )
        .then( destination => res.send( destination ) )
        .catch( console.log )
} )
module.exports = router;
