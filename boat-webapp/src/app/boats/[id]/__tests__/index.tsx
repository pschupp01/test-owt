import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import BoatDetailsPage from '..';
import wrapper from '../../../../tests/util/wrapper.util';
import Router from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

nock('http://localhost:3000')
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true',
  })
  .get('/api/boats/1')
  .reply(200, {
    id: 1,
    name: 'testBoat',
    description: 'testBoat description',
  });

test('Renders name and description', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ boatId: '1' });

  render(<BoatDetailsPage />, { wrapper });
  await waitFor(() => {
    const nameElement = screen.getByText('testBoat');
    return expect(nameElement).toBeInTheDocument();
  });

  await waitFor(() => {
    const descriptionElement = screen.getByText('testBoat description');
    expect(descriptionElement).toBeInTheDocument();
  });
});
