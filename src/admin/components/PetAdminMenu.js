import './_pet-admin-menu.scss';

const PetAdminMenu = () => {
  return <div className="pet-admin-menu">
    <ul>
      <li>
        <a href="#"
          title="Solicitudes de Adopcion"
        >
          <span className="icon material-icons-outlined">
            assignment
          </span>
          <span className="description">Solicitudes de adopcion</span>
        </a>
      </li>
      <li>
        <a href="#"
          title="Mascotas"
        >
          <span className="icon material-icons-outlined">
            pets
          </span>
          <span className="description">Mascotas</span>
        </a>
      </li>
      <li>
        <a href="#"
          title="Usuarios"
        >
          <span className="icon material-icons-outlined">
            supervisor_account
          </span>
          <span className="description">Usuarios</span>
        </a>
      </li>
      <li>
        <a href="#"
          title="Asociacion"
        >
          <span className="icon material-icons-outlined">
            domain
          </span>
          <span className="description">Asociacion</span>
        </a>
      </li>
    </ul>
  </div>
}

export default PetAdminMenu;