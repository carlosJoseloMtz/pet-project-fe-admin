import * as userService from '../../services/user.service';
import * as petService from '../../services/pet.service';
import { useEffect, useState } from 'react';

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



const PetForm = ({
  id: initialId,
  name: initialName,
  description: initialDescription,
  location,
  adopted: initialAdopted }) => {
  const [sUid, setUid] = useState('');
  const [sName, setName] = useState('');
  const [sDescription, setDescription] = useState('');
  const [sLocation, setLocation] = useState(null);
  const [sAdopted, setAdopted] = useState('');

  const handlePetSubmit = (ev) => {
    ev.preventDefault();

    const pet = {
      name: sName,
      description: sDescription,
      location: sLocation,
      adopted: sAdopted
    };

    console.log(pet);
  }

  useEffect(() => {
    setUid(initialId || '');
    setName(initialName || '');
    setDescription(initialDescription || '');
    setAdopted(initialAdopted || '');
  }, [initialId, initialName, initialDescription, initialAdopted]);

  return <div>

    <form onSubmit={handlePetSubmit} className="pet-info">
      <h3>Informacion basica</h3>
      <div>
        <label htmlFor="id">Codigo</label>
        <input id="id" name="id" value={sUid || 'No asignado'} disabled placeholder="codigo" />
      </div>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          value={sName}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descripcion</label>
        <textarea
          id="description"
          name="description"
          value={sDescription}
          required
          onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit">Save changes</button>
    </form>

    <form>
      <h3>Imagenes</h3>
    </form>

    <form>
      <h3>Ubicacion</h3>
    </form>
  </div>;
}

export default PetForm;