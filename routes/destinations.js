const express = require( 'express' );
const router = express.Router();
const DestinationModel = require( '../models/Destination' );
const Sequelize = require( 'sequelize' )
const Op = Sequelize.Op;
router.get( '/', ( req, res ) => {
    // DestinationModel.find( { id: { $gt: 1 } } ) //mongodb query
    DestinationModel.findAll( {
            paranoid:false
        } ).then( destinations => res.send( destinations ) )
        .catch( console.log )
} )
router.post( '/', ( req, res ) => {
    console.log( req.body );
    DestinationModel.create( req.body )
        .then( destination => res.send( destination ) )
        .catch( console.log )
} )
router.patch( '/:id', ( req, res ) => {
    DestinationModel.update( { travel: req.body.travel }, { where: { id: req.params.id } } )
    .then(destination=>res.send(destination))
    .catch(error=>console.log(error));
} )
router.delete('/:id', ( req, res ) => {
    DestinationModel.destroy( { where: { id: req.params.id } } )
    .then(destination=>{
        console.log(destination);
        res.send('Registro eliminado correctamente')
    })
    .catch(error=>console.log(error));
} )
module.exports = router;
