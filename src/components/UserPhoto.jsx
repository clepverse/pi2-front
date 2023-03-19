import { Image } from 'native-base';

export function UserPhoto({ size, ...rest }) {
  return (
    <Image w={size} h={size} {...rest} rounded={'full'} borderWidth={2} borderColor="gray.400" />
  );
}
