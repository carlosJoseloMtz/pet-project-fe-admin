import { useEffect, useState } from 'react';
import PetForm from '../components/PetForm';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SearchInput from '../components/SearchInput';


const PetsPage = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(async () => {
    const fetchCompanyPets = async () => {
      return [{
        id: "random-id-10",
        name: "Renata",
        description: "Border collie de aproximadamente 2 anios. Es muy juguetona, le encanta esta corriendo todo el tiempo",
        adopted: false,
        location: {
          longitude: 1.00,
          latitude: 1.00,
          street: "algun lugar sin numero"
        }
      }];
    }

    try {
      const results = await fetchCompanyPets();
      setPets(results);
    } catch (err) {
      console.error('error while trying to fetch all the pets', err);
    }
  }, []);


  return <div>
    <div className="filters-section">
      <h1>Mascotas</h1>
      <h3>Filtros</h3>
      <SearchInput
        onSearch={(form) => {
          const obj = {};

          const formData = new FormData(form);

          formData.forEach((val, key) => {
            obj[key] = val;
          });

          setSelectedPet(null);

          console.log(obj);
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
                  onClick={() => setSelectedPet(pet)}
                >
                  <td>{pet.id}</td>
                  <td>{pet.id}</td>
                  <td>{pet.id}</td>
                  <td>{pet.id}</td>
                  <td>{pet.id}</td>
                </tr>)
            }
          </tbody>
        </table>
      </ResponsiveContainer>
    </div>
    {
      selectedPet &&
      <PetForm {...selectedPet} />
    }
  </div>;
};

export default PetsPage;