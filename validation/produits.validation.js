const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Validateproduit(data) {
  let errors = {};
  data.reference = !isEmpty(data.reference) ? data.reference : "";
  data.nom = !isEmpty(data.nom) ? data.nom : "";
  data.prix = !isEmpty(data.prix) ? data.prix : "";
  data.quantite = !isEmpty(data.quantite) ? data.quantite : "";
 

  if (validator.isEmpty(data.reference)) {
    errors.reference = "Required reference";
  }
  if (validator.isEmpty(data.nom)) {
    errors.nom = "Required nom";
  }
  if (validator.isEmpty(data.prix)) {
    errors.prix = "Required prix";
  }
  if (validator.isEmpty(data.quantite)) {
    errors.quantite = "Required reference";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};
