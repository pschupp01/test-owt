import { render, screen } from '@testing-library/react';
import BoatDetails from '..';
import { BrowserRouter } from 'react-router-dom';

test('Renders name and description', () => {
  render(
    <BoatDetails
      boat={{ id: 3, name: 'testBoat', description: 'testBoat description' }}
    />,
    { wrapper: BrowserRouter },
  );
  const nameElement = screen.getByText('testBoat');
  expect(nameElement).toBeInTheDocument();

  const descriptionElement = screen.getByText('testBoat description');
  expect(descriptionElement).toBeInTheDocument();
});
