import { render, screen } from '@testing-library/react';
import BoatsList from '../';
import wrapper from '../../../tests/util/wrapper.util';

test('Renders name and description', () => {
  render(
    <BoatsList
      boats={[{ id: 3, name: 'testBoat', description: 'testBoat description' }]}
    />,
    { wrapper },
  );
  const nameElement = screen.getByText('testBoat');
  expect(nameElement).toBeInTheDocument();

  const descriptionElement = screen.getByText('testBoat description');
  expect(descriptionElement).toBeInTheDocument();
});
