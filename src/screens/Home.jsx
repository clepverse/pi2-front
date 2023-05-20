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

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';

// import LogoHome from '../assets/logoHomePage.svg';
import { HomeHeader } from '../components/HomeHeader';
import { PlantsCard } from '../components/PlantsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../axios/api';
import { useAuth } from '../contexts/authContext';

export function Home({ navigation }) {
  const [plants, setPlants] = useState([]);

  const { isAuthenticated } = useAuth();

  console.log({ isAuthenticated });

  useEffect(() => {
    (async () => {
      const storagedToken = await AsyncStorage.getItem('@token');

      const response = await api.get('/save', {
        headers: {
          Authorization: `Bearer ${storagedToken}`,
        },
      });

      const requests = response.data.map(async (plant) => {
        const response = await axios.post(
          'https://catando-lojas--salomaomdrs.repl.co/plantimg',
          {
            plant: plant.popularName,
          },
        );
        return { plantUrl: response.data, ...plant };
      });

      const responseData = await Promise.all(requests);

      const updatedPlants = responseData.map((item, index) => {
        return { ...plants[index], ...item };
      });

      setPlants(updatedPlants);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const requests = allPlantsPopularName.map(async (plant) => {
  //       const response = await axios.post(
  //         'https://catando-lojas--salomaomdrs.repl.co/plantimg',
  //         {
  //           plant: plant,
  //         },
  //       );
  //       return response.data;
  //     });

  //     const responseData = await Promise.all(requests);
  //     setPlantUrl(responseData);
  //   })();
  // }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
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
          <PlantsCard navigation={navigation} plants={plants} />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
