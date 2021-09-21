// import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Button, Input } from 'antd';
// import { InputForm } from '../../components/forms/InputForm'
import * as S from './styles';

export function LoginPage() {
  // const { control } = useForm();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // to do
  }

  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <Input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Fazer login</Button>
        </form>
      </S.ContainerLogin>
    </S.Container>
  );
}
