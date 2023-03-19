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
  HStack,
  Heading,
} from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';

import LogoHome from '../assets/logoHomePage.svg';
import { HomeHeader } from '../components/HomeHeader';
import { PlantsCard } from '../components/PlantsCard';

export function Home() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <HomeHeader />
        <Center mt={2}>
          {/* <LogoHome width="30%" /> */}
          <Stack space={4} w="90%" maxW="300px" mx="auto" my={4}>
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
        <VStack flex={1} px={6}>
          <HStack mb={4}>
            <Heading color="gray.200" fontSize="lg" my={2}>
              Minhas plantas:
            </Heading>
          </HStack>

          <PlantsCard />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
