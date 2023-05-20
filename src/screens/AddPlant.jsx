import {
  VStack,
  Container,
  Center,
  Text,
  Box,
  Stack,
  Link,
  Icon,
  ScrollView,
} from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';
import { api } from '../axios/api';

export function AddPlant({ navigation }) {
  const [namePlant, setNamePlant] = useState('');
  const [nickName, setNickName] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');

  const handleAddPlant = async () => {
    try {
      await api.post('/plant/create', {
        namePlant,
        nickName,
        dateOfPurchase,
      });

      navigation.navigate('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
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
            <Input
              value={namePlant}
              onChangeText={setNamePlant}
              placeholder="Digite o Nome da Planta"
              type="text"
              variant="underlined"
            />
            <Input
              value={nickName}
              onChangeText={setNickName}
              placeholder="Digite Apelido Para Planta (Opcional)"
              type="text"
              variant="underlined"
            />
            <Input
              value={dateOfPurchase}
              onChangeText={setDateOfPurchase}
              placeholder="Digite a data da compra da planta (Opcional)"
              type="text"
              variant="underlined"
            />
          </Stack>
          <Button
            onPress={handleAddPlant}
            width="180px"
            borderRadius={12}
            bgColor="green.500"
            color="gray.900"
          >
            Adicionar
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}
