import { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';

import PetForm from '../components/PetForm';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SearchInput from '../components/SearchInput';
import './_pets-page.scss';


const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  useEffect(async () => {
    const fetchCompanyPets = async () => {
      return [{
        id: "random-id-10",
        name: "Renata",
        description: "Border collie de aproximadamente 2 anios. Es muy juguetona, le encanta esta corriendo todo el tiempo",
        adopted: false,
        size: 'md',
        sex: 'f',
        species: 'dog',
        location: "somewhere over the rainbow"
      }, {
        id: "random-id-11",
        name: "Renata2",
        description: "222222Border collie de aproximadamente 2 anios. Es muy juguetona, le encanta esta corriendo todo el tiempo",
        adopted: false,
        size: 'md',
        sex: 'f',
        species: 'dog',
        location: null
      }];
    }

    try {
      const results = await fetchCompanyPets();
      setPets(results);
    } catch (err) {
      console.error('error while trying to fetch all the pets', err);
    }
  }, []);


  return <div className="pets-page">
    <h1>Mascotas</h1>
    <div className="new-register">
      <button
        className="new-register"
        onClick={() => {
          setSelectedPet({});
          handleOpenModal();
        }}>
        Registrar nueva mascota
      </button>
    </div>
    <div className="filters-section">
      <h3>Filtros</h3>
      <SearchInput
        onSearch={(form) => {
          const obj = {};

          const formData = new FormData(form);

          formData.forEach((val, key) => {
            obj[key] = val;
          });

          setSelectedPet(null);
          handleCloseModal();
        }}
      >
        <div>
          <label htmlFor="adopted">Adoptado</label>
          <input id="adopted" name="adopted" value="true" type="checkbox" />
        </div>
      </SearchInput>
    </div>

    <div className="search-results">
      <ResponsiveContainer>
        <table>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Adoptado</th>
              <th>Registrado</th>
              <th>Modificado</th>
            </tr>
          </thead>
          <tbody>
            {
              pets.map(pet =>
                <tr
                  key={pet.id}
                  onClick={() => {
                    setSelectedPet({ ...pet });
                    handleOpenModal();
                  }}
                >
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.adopted ? 'Si' : 'No'}</td>
                  <td>{pet.id}</td>
                  <td>{pet.id}</td>
                </tr>)
            }
          </tbody>
        </table>
      </ResponsiveContainer>
    </div>
    {
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        center>
        <PetForm {...selectedPet} />
      </Modal>
    }
  </div>;
};

export default PetsPage;