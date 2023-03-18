import { Spinner, Center } from 'native-base';
import { View, StatusBar } from 'react-native';

export function Loading() {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner size="lg" color="green.500" />
    </Center>
  );
}
