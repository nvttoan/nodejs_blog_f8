const express = require('express');
const router = express.Router();

const pokemonController = require('../app/controllers/PokemonController');


router.get('/create', pokemonController.create);
router.post('/store', pokemonController.store);
router.get('/:id/edit', pokemonController.edit);
router.put('/:id', pokemonController.update);
router.get('/:slug', pokemonController.show);

module.exports = router;
