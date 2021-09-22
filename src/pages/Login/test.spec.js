import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginPage } from '.';

test('Show fields page', () => {
  render(<LoginPage />);

  // const emailInput = screen.ByPlaceholderText('Usuário');
  // const passwordInput = screen.ByPlaceholderText('Senha');

  // const button = screen.getByRole('button', { name: /Fazer login/i });
  const heading = screen.getByRole('heading', { name: /Login/i });

  // screen.debug();
  // screen.getByRole('');
  // expect(button).toBeEnabled();
  expect(heading).toBeInTheDocument();
  // expect(passwordInput).toBeInTheDocument();
});
