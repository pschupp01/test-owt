import { render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import BoatsPage from '..';
import wrapper from '../../../tests/util/wrapper.util';

nock('http://localhost:3000')
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true',
  })
  .get('/api/boats')
  .reply(200, [
    {
      id: 1,
      name: 'testBoat',
      description: 'testBoat description',
    },
  ]);

test('Renders name and description', async () => {
  render(<BoatsPage />, { wrapper });
  await waitFor(() => {
    const nameElement = screen.getByText('testBoat');
    return expect(nameElement).toBeInTheDocument();
  });

  await waitFor(() => {
    const descriptionElement = screen.getByText('testBoat description');
    expect(descriptionElement).toBeInTheDocument();
  });
});
