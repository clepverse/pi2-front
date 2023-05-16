import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
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

import LogoSvg from '../assets/logo.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Dimensions, Pressable } from 'react-native';
import { useAuth } from '../contexts/authContext';

export function SignIn() {
  const { signIn } = useAuth();

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleNewAccount() {
    navigation.navigate('SignUp');
  }

  // const handleSignIn = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://10.0.0.101:3333/api/user/login',
  //       {
  //         email,
  //         password,
  //       },
  //     );

  //     setEmail('');
  //     setPassword('');

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Center mt={16} mb={5}>
          <LogoSvg />
        </Center>
        <Center>
          <Box
            p="2px"
            bg={{
              linearGradient: {
                colors: ['purple.200', 'gray.500'],
                start: [0, 0],
                end: [1, 0],
              },
            }}
            rounded="xl"
          >
            <Box
              pt={16}
              pb={10}
              px={12}
              bg={{
                linearGradient: {
                  colors: ['#201F1F', '#473645'],
                  start: [0, 0],
                  end: [1, 0],
                },
              }}
              p="12"
              rounded="xl"
              _text={{
                fontSize: 'md',
                fontWeight: 'medium',
                color: 'warmGray.50',
                textAlign: 'center',
              }}
            >
              <Container
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                margin={'auto'}
              >
                <Button
                  width={120}
                  borderLeftRadius={12}
                  borderRightRadius={0}
                  bgColor="green.500"
                  color="gray.900"
                >
                  Entrar
                </Button>
                <Button
                  width={
                    Dimensions.get('window').width > 500
                      ? Dimensions.get('window').width / 3
                      : Dimensions.get('window').width / 2.5
                  }
                  borderRightRadius={12}
                  borderLeftRadius={0}
                  bgColor="gray.200"
                  onPress={handleNewAccount}
                >
                  Registre-se
                </Button>
              </Container>
              <Center>
                <Text
                  fontFamily="heading"
                  fontSize="lg"
                  mt={10}
                  mb={5}
                  color="gray.100"
                >
                  Acesse sua conta
                </Text>
                <Stack space={4} w="90%" maxW="300px" mx="auto" mb={10}>
                  <Input
                    value={email}
                    onChangeText={setEmail}
                    color="#fff"
                    placeholder="Entre com seu email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    variant="underlined"
                  />
                  <Input
                    value={password}
                    onChangeText={setPassword}
                    color="#fff"
                    placeholder="Digite sua senha"
                    variant="underlined"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        <Icon
                          as={
                            <Icon
                              as={FontAwesome}
                              name={show ? 'eye' : 'eye-slash'}
                            />
                          }
                          size={5}
                          mr="2"
                          color="muted.400"
                        />
                      </Pressable>
                    }
                  />

                  <Link href="#" justifyContent="flex-end">
                    <Text color="gray.200" fontSize="sm">
                      Esqueceu a senha?
                    </Text>
                  </Link>
                </Stack>

                <Stack alignItems="center" space={6}>
                  <Button
                    onPress={handleSignIn}
                    width="180px"
                    borderRadius={12}
                    bgColor="green.500"
                    color="gray.900"
                  >
                    Entrar
                  </Button>
                  {/* <Text fontFamily="body" fontSize="sm" color="gray.100">
                    Entre com redes sociais
                  </Text>
                  <Stack flexDirection="row">
                    <Icon
                      as={FontAwesome}
                      name="facebook-square"
                      size={10}
                      mr="6px"
                      color="gray.100"
                    />
                    <Icon
                      as={FontAwesome}
                      name="twitter"
                      size={10}
                      mr="6px"
                      color="gray.100"
                    />
                    <Icon
                      as={FontAwesome}
                      name="google"
                      size={10}
                      color="gray.100"
                    />
                  </Stack> */}
                </Stack>
              </Center>
            </Box>
          </Box>
        </Center>
      </VStack>
    </ScrollView>
  );
}
