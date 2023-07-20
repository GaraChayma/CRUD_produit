const express = require("express");
const {
  Addproduit,
  FindAllproduits,
  FindSinglproduit,
  Updateproduit,
  Deleteproduit,
} = require("../controllers/produits.controller");
const router = express.Router();

/* add produit */
router.post("/produits", Addproduit);

/* find all produits */
router.get("/produits", FindAllproduits);

/* find single produit */
router.get("/produits/:id", FindSinglproduit);

/* add produit */
router.put("/produits/:id", Updateproduit);

/* add produit */
router.delete("/produits/:id", Deleteproduit);

module.exports = router;
