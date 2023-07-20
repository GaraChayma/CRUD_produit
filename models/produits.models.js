const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    
    reference: String,
    nom : String,
    prix: String,
    quantite: String
}, {timestamps: true})




module.exports = mongoose.model('produits', produitSchema)
