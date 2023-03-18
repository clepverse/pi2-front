import { Spinner, Center } from 'native-base';
import { View, StatusBar } from 'react-native';

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner size="lg" />
    </Center>
  );
}
