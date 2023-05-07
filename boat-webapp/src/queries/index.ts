import apiClient from './http-config';
import { Boat } from '../entities';

const getAuthorizationHeader = () => {
  const bearer = localStorage.getItem('bearer');
  return {
    headers: {
      ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}),
    },
  };
};

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  const { data: response } = await apiClient.post('/login', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return response;
};

export const getBoats = async () => {
  const headers = getAuthorizationHeader();
  return apiClient.get<Boat[]>('/boats', headers);
};

export const getBoat = (boatId: string) => async () =>
  apiClient.get<Boat>(`/boats/${boatId}`, getAuthorizationHeader());

export const addBoat = async (boat: Partial<Boat>) => {
  if (!boat.name || !boat.description) {
    throw new Error('Name and description are required');
  }
  return apiClient.post('/boats', boat, getAuthorizationHeader());
};

export const deleteBoat = async ({ boatId }: { boatId: number }) => {
  const { data: response } = await apiClient.delete(
    `/boats/${boatId}`,
    getAuthorizationHeader(),
  );
  return response;
};

export const updateBoat = async ({
  boatId,
  boat,
}: {
  boatId: number;
  boat: Partial<Boat>;
}) => {
  if (!boat.name || !boat.description) {
    throw new Error('Name and description are required');
  }

  const { data: response } = await apiClient.put(
    `/boats/${boatId}`,
    {
      name: boat.name,
      description: boat.description,
    },
    getAuthorizationHeader(),
  );
  return response;
};
