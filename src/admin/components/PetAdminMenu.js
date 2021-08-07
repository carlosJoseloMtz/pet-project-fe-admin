import './_pet-admin-menu.scss';

const PetAdminMenu = () => {
  return <div className="pet-admin-menu">
    <ul>
      <li>
        <a href="#">
          <span className="icon material-icons-outlined">
            assignment
          </span>
          <span className="description">Solicitudes de adopcion</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon material-icons-outlined">
            pets
          </span>
          <span className="description">Mascotas</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon material-icons-outlined">
            supervisor_account
          </span>
          <span className="description">Usuarios</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon material-icons-outlined">
            domain
          </span>
          <span className="description">Asociacion</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon material-icons-outlined">
            add_location
          </span>
          <span className="description">Locaciones</span>
        </a>
      </li>
    </ul>
  </div>
}

export default PetAdminMenu;