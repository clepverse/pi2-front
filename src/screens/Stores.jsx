import { VStack, Container, Center, Text, Box, Stack, Link, Icon, ScrollView, Heading, Image } from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Input } from '../components/Input';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function Stores() {
  const [country, setCountry] = useState('');
  const [shops, setShops] = useState([]);

 useEffect(() => {
   HanddleLoja();
 }, [country]);

  const HanddleLoja = async ()  => {
    try{
      let response;
      if (country !== '') {
         response = await axios.post('https://catando-lojas--salomaomdrs.repl.co/findstore', {
          city: country
        })
      }else{
         response = await axios.post('https://catando-lojas--salomaomdrs.repl.co/findstore', {
          city: "Recife"
        })
      }
      console.log(response.data);
      setShops(response.data);
    } catch (err) {
      console.log(err);
    }
  }

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
              onChangeText={setCountry}
              InputLeftElement={
                <Icon as={FontAwesome} name="search" ml={4} size={8} color="gray.100" />
              }
            />
            
          </Stack>
          <Stack>
              {shops.map((shop) => (
                <>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: '#232323',
                      height: 200,
                      width: 300,
                      marginBottom: 10,
                      padding: 5
                    }}
                  >
                  <VStack alignItems="center">
                    <Image
                      source={{
                        uri: 'https://forbes.com.br/wp-content/uploads/2022/06/girassol_04jul22_Mahathir-Mohd-Yasin_EyeEm_Gettyimages-1024x683.jpg',
                      }}
                      alt="Imagem planta"
                      w={40}
                      h={32}
                      rounded="md"
                    />

                    <Heading fontSize="sm" width={'100%'} justifyContent={'center'} textAlign={'center'}  color="white">
                      <Text>{shop.nome}</Text>{'\n'}
                      <Text>{shop.endereco}</Text>
                    </Heading>
                  </VStack>
                  </TouchableOpacity>
                </>
              ))}
          </Stack>
        </Center>
      </VStack>
    </ScrollView>
  );
}
