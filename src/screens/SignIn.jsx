import {
  VStack,
  Container,
  Center,
  Button,
  Text,
  Box,
  Stack,
  Input,
  Link,
  Icon,
} from 'native-base';

import { FontAwesome } from '@expo/vector-icons';

import LogoSvg from '../assets/logo.svg';

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.900">
      <Center mt={16} mb={12}>
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
            <Container flexDirection="row">
              <Button width="120px" borderLeftRadius={12} borderRightRadius={0} bgColor="green.500">
                <Text fontFamily="body" color="gray.900">
                  Entrar
                </Text>
              </Button>
              <Button width="120px" borderRightRadius={12} borderLeftRadius={0} bgColor="gray.200">
                <Text fontFamily="body" color="gray.100">
                  Registre-se
                </Text>
              </Button>
            </Container>
            <Center>
              <Text fontFamily="heading" fontSize="lg" mt={10} mb={5} color="gray.100">
                Acesse sua conta
              </Text>
              <Stack space={4} w="90%" maxW="300px" mx="auto" mb={10}>
                <Input variant="underlined" placeholder="Entre com seu email" type="text" />
                <Input variant="underlined" placeholder="Digite sua senha" type="password" />

                <Link href="#" justifyContent="flex-end">
                  <Text color="gray.200" fontSize="sm">
                    Esqueceu a senha?
                  </Text>
                </Link>
              </Stack>

              <Stack alignItems="center" space={6}>
                <Button width="160px" borderRadius={12} bgColor="green.500">
                  <Text fontFamily="body" color="gray.900">
                    Entrar
                  </Text>
                </Button>
                <Text fontFamily="body" fontSize="sm" color="gray.100">
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
                  <Icon as={FontAwesome} name="twitter" size={10} mr="6px" color="gray.100" />
                  <Icon as={FontAwesome} name="google" size={10} color="gray.100" />
                </Stack>
              </Stack>
            </Center>
          </Box>
        </Box>
      </Center>
    </VStack>
  );
}
