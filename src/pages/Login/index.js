import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/forms/InputForm';
import * as S from './styles';

export function LoginPage() {
  const { control, handleSubmit } = useForm();

  function handleLogin(event) {
    event.preventDefault();
    // to do
  }

  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <InputForm control={control} name="username" placeholder="Usuário" />

          <InputForm control={control} name="password" placeholder="Senha" isPassword />

          <Button type="submit">Fazer login</Button>
        </form>
      </S.ContainerLogin>
    </S.Container>
  );
}
