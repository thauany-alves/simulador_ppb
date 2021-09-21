import React from 'react';
import * as S from './styles';

export function LoginPageComponent() {
  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <form>
          <input type="text" name="username" placeholder="Username" />

          <input type="password" name="password" placeholder="Password" />

          <button type="submit">Entrar</button>
        </form>
      </S.ContainerLogin>
    </S.Container>
  );
}
