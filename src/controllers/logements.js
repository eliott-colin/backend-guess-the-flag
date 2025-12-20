const Logements = require("../models/Logements.js");

exports.getAllHousing = (req, res, next) => {
  Logements.find()
    .then((logements) => res.status(200).json(logements))
    .catch((error) => res.status(400).json({ error }));
};

exports.getHousingById = (req, res, next) => {
    Logements.aggregate()
      .match({ _id: new Mongoose.Types.ObjectId(req.params.id) })
      .project({
        title: 1,
        cover: 1,
        pictures: 1,
        description: 1,
        host: { nameHost: "$nameHost", pictureHost: "$pictureHost" },
        rating: 1,
        location: 1,
        equipments: 1,
        tags: 1,
      })
      .then((logements) => res.status(200).json(logements[0]))
      .catch((error) => res.status(404).json({ error }));
};

exports.createHousing = (req, res, next) => {
    const logement = new Logements({
      ...req.body, // On décompose toutes les données dans le req.body
    });
    logement
      .save() // On enregistre dans la BDD
      .then(() =>
        res.status(201).json({ message: "Le logement vient d'être créé !" })
      )
      .catch((error) => res.status(400).json({ error: error }));
};

exports.updateHousingById = (req, res, next) => {
  Logements.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: "Logement modifié !" }))
  .catch((error) => res.status(400).json({ error }));
};

exports.deleteHousingById = (req, res, next) => {
  Logements.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Logement supprimé !" }))
    .catch((error) => res.status(400).json({ error }))
};

// Fin du document
