import { VStack, Container, Center, Text, Box, Stack, Link, Icon, ScrollView } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function AddPlant() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Center flex={1}>
          <Box
            bg={{
              linearGradient: {
                colors: ['green.500', 'green.400'],
                start: [0, 0],
                end: [1, 0],
              },
            }}
            p="20"
            rounded="full"
          >
            <Icon as={FontAwesome} name="camera" size={12} color="gray.700" />
          </Box>
          <Stack space={4} w="90%" maxW="300px" mx="auto" mb={10} mt={'10'}>
            <Input placeholder="Digite o Nome da Planta" type="text" variant="underlined" />
            <Input
              placeholder="Digite Apelido Para Planta (Opcional)"
              type="text"
              variant="underlined"
            />
            <Input
              placeholder="Digite a data da compra da planta (Opcional)"
              type="text"
              variant="underlined"
            />
          </Stack>
          <Button width="180px" borderRadius={12} bgColor="green.500" color="gray.900">
            Adicionar
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}
