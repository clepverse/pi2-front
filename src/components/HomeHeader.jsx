import { TouchableOpacity } from 'react-native';

import { Heading, HStack, Icon, VStack } from 'native-base';
import { UserPhoto } from './UserPhoto';

import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../contexts/authContext';

export function HomeHeader() {
  const { signOut, user } = useAuth();
  return (
    <HStack bg="gray.800" pt={10} pb={2} alignItems="center" px={6}>
      <UserPhoto
        size={14}
        source={{ uri: 'https://github.com/clepverse.png' }}
        alt="Imagem perfil"
        mr={3}
      />
      <VStack flex={1}>
        <Heading color="gray.100">{`@${user?.name}`}</Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" size={8} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  );
}
