import { VStack, Container, Center, Text, Box, Stack, Link, Icon, ScrollView } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';

export function Stores() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Center mt={20}>
          <Stack space={4} w="90%" maxW="300px" mx="auto" mb={10} mt={'10'}>
            <Input
              placeholder="Pesquisar plantas ou nome da loja"
              placeholderTextColor="gray.100"
              type="text"
              variant="solid"
              bg={'gray.500'}
              rounded={'full'}
              height={14}
              InputLeftElement={
                <Icon as={FontAwesome} name="search" ml={4} size={8} color="gray.100" />
              }
            />
          </Stack>
        </Center>
      </VStack>
    </ScrollView>
  );
}
