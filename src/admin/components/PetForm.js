import * as userService from '../../services/user.service';
import * as petService from '../../services/pet.service';
import { useState } from 'react';

const persistForm = ({ name, description, location, isNew = true, adopted }) => {
  const { company } = userService.getCurrentUser();

  const pet = {
    name, description, location, company
  };

  const callWs = async (pet) => {

    // new record
    if (isNew) {
      petService.createPet(pet);
    }

    // existing record
    if (!isNew) {
      pet.adopted = adopted;
      petService.updatePet(pet);
    }
  }

  callWs();
}



const PetForm = ({ uid = null, name='', description = 'thedescription', location, adopted = false }) => {
  const [sUid, setUid] = useState(uid);
  const [sName, setName] = useState(name);
  const [sDescription, setDescription] = useState(description);
  const [sLocation, setLocation] = useState(location);
  const [sAdopted, setAdopted] = useState(adopted);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const pet = {
      name: sName,
      description: sDescription,
      location: sLocation,
      adopted: sAdopted
    };

    console.log(pet);
  }

  return <form onSubmit={handleSubmit}>
    <input name="name" value={sName} onChange={(e) => setName(e.target.value)} />
    <textarea name="description" value={sDescription} onChange={(e) => setDescription(e.target.value)}></textarea>
    <button type="submit">Save changes</button>
  </form>
}

export default PetForm;