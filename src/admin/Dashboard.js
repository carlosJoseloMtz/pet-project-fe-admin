import PetAdminMenu from './components/PetAdminMenu';
import PetsPage from "./pages/PetsPage";
import './_dashboard.scss';
import 'react-responsive-modal/styles.css';

const Dashboard = () => (
  <div className="pet-admin-dashboard">
    <PetAdminMenu />
    <div className="admin-content">
      <PetsPage />
    </div>
  </div>
);


export default Dashboard;