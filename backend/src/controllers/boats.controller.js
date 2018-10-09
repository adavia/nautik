import db from '../models';

const { Boat } = db.models;

class BoatsController {
  async fetchAll(req, res, next) {
    try {
      const boats = await Boat.find()
        .populate('categories');
      res.status(200).send(boats);
    }
    catch(err) { next(err) }
  }

  async getSelected(req, res, next) {
    const { id } = req.params;
    
    try {
      const boat = await Boat.findById(id)
        .populate('categories');
      res.status(200).send(boat);
    }
    catch(err) { next(err) }
  }

  async addNew(req, res, next) {
    const newBoat = new Boat(req.body);

    try {
      const savedBoat = await newBoat.save(newBoat);
      //const savedBoat = await Boat.populate(boat, { path: 'categories' });
      res.status(201).send(savedBoat);
    }
    catch(err) { next(err) }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const { body } = req;

    try {
      const boat = await Boat.findById(id);
      boat.name = body.name;
      boat.description = body.description;
      boat.pricing = body.pricing;
      boat.categories = body.categories;

      const updatedBoat = await boat.save();
      res.status(200).send(updatedBoat);
    }
    catch(err) { next(err) }
  }
}

const boatsController = new BoatsController();
export default boatsController;