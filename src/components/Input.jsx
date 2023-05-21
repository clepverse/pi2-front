import { Input as InputNativeBase } from 'native-base';

export function Input({ value, ...rest }) {
  return (
    <InputNativeBase
      value={value}
      placeholderTextColor="gray.200"
      fontSize={'sm'}
      fontFamily="body"
      _focus={{ color: 'gray.100', borderColor: 'green.500' }}
      {...rest}
    />
  );
}
