import { Button as ButtonNativeBase, Text } from 'native-base';

export function Button({ children, ...rest }) {
  return (
    <ButtonNativeBase width="120px" _pressed={{ color: 'red.500' }} {...rest}>
      <Text fontFamily="body">{children}</Text>
    </ButtonNativeBase>
  );
}
