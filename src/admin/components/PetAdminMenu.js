import './_pet-admin-menu.scss';
import ReactTooltip from "react-tooltip";


const PetAdminMenu = () => {
  return <div className="pet-admin-menu">
    <ul>
      <li>
        <a href="#"
          data-for="the-tooltip"
          data-tip="Solicitudes de Adopcion"
          data-iscapture="true"
        >
          <span className="icon material-icons-outlined">
            assignment
          </span>
        </a>
      </li>
      <li>
        <a href="#"
          data-for="the-tooltip"
          data-tip="Mascotas"
          data-iscapture="true"
        >
          <span className="icon material-icons-outlined">
            pets
          </span>
        </a>
      </li>
      <li>
        <a href="#"
          data-for="the-tooltip"
          data-tip="Usuarios"
          data-iscapture="true"
        >
          <span className="icon material-icons-outlined">
            supervisor_account
          </span>
        </a>
      </li>
      <li>
        <a href="#"
          data-for="the-tooltip"
          data-tip="Asociacion"
          data-iscapture="true"
        >
          <span className="icon material-icons-outlined">
            domain
          </span>
        </a>
      </li>
    </ul>

    <ReactTooltip
      id="the-tooltip"
      place="right"
      type="dark"
      effect="float"
      multiline={true}
    />
  </div>
}

export default PetAdminMenu;