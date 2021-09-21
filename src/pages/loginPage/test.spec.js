import { render, screen } from '@testing-library/react';
import { LoginPage } from '.';

test('Initial condition', () => {
  render(<LoginPage />);
  const checkbox = screen.getByRole('button', {
    name: /Fazer login/i,
  });
  expect(checkbox).toBeInTheDocument();
});
