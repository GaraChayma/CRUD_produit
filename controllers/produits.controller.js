const produits = require("../models/produits.models.js");
const Validateproduit = require("../validation/produits.validation.js");
const Addproduit = async (req, res) => {
  const { errors, isValid } = Validateproduit(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await produits.findOne({ reference: req.body.reference }).then(async (exist) => {
        if (exist) {
          errors.reference = "produit Exist";
          res.status(404).json(errors);
        } else {
          await produits.create(req.body);
          res.status(201).json({ message: "produit added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllproduits = async (req, res) => {
  try {
    const data = await produits.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglproduit = async (req, res) => {
  try {
    const data = await produits.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const Updateproduit = async (req, res) => {
  const { errors, isValid } = Validateproduit(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await produits.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const Deleteproduit = async (req, res) => {
  try {
    await produits.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "produit deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  Addproduit,
  FindAllproduits,
  FindSinglproduit,
  Updateproduit,
  Deleteproduit,
};
