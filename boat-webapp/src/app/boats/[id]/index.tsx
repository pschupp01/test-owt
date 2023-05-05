import { useParams } from 'react-router-dom';
import BoatDetails from '../../../components/BoatDetails';

const BoatPage = () => {
  const { boatId } = useParams();
  return <BoatDetails boatId={boatId} />;
};

export default BoatPage;
