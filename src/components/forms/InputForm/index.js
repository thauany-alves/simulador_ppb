import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import * as S from './styles';

export function InputForm({ control, name, error, isPassword, isRequired = false, ...rest }) {
  return (
    <S.Container>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Input onChange={onChange} value={value} {...rest} />
        )}
        name={name}
        control={control}
        rules={{
          required: isRequired,
        }}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
