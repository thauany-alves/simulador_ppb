import { Button } from 'antd';
import { LoginPageComponent } from '../../components/pages/loginPage';

export function LoginPage() {
  return (
    <>
      <LoginPageComponent />
      <Button type="submit">Entrar</Button>
    </>
  );
}
