import { Button } from 'antd';
import * as S from './styles';

export function LoginPageComponent() {
  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <form>
          <input type="text" name="username" placeholder="Username" />

          <input type="password" name="password" placeholder="Password" />

          <Button type="submit">Fazer login</Button>
        </form>
      </S.ContainerLogin>
    </S.Container>
  );
}
