import { FC } from 'react';
import { useQuery } from 'react-query';
import apiClient from '../../config/http-config';
import { Boat } from '../../entities';

interface BoatDetailsProps {
  boatId?: string;
}
const BoatDetails: FC<BoatDetailsProps> = ({ boatId }) => {
  const { data } = useQuery('boat', () =>
    apiClient.get<Boat>(`/boats/${boatId}`),
  );
  return (
    <div>
      <h1>Boat Details</h1>
      <p>{data?.data.name}</p>
      <p>{data?.data.description}</p>
    </div>
  );
};

export default BoatDetails;
