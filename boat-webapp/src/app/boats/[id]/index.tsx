import { useParams } from 'react-router-dom';
import BoatDetails from '../../../components/BoatDetails';
import Layout from '../../../components/Layout';

const BoatPage = () => {
  const { boatId } = useParams();
  return (
    <Layout>
      <BoatDetails boatId={boatId} />
    </Layout>
  );
};

export default BoatPage;
