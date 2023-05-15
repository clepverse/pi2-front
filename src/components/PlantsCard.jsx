import { Heading, HStack, Image, VStack, Row, Column, Container } from 'native-base';
import { TouchableOpacity } from 'react-native';

export function PlantsCard({ navigation, ...rest }) {
  return (
      <Container space={4} justifyContent="space-between">
        <Row space={6}>
          <Column size={2}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('perfilplant');
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

              <Heading fontSize="lg" color="white">
                Girasol
              </Heading>
            </VStack>
            </TouchableOpacity>
          </Column>

          <Column>
          <TouchableOpacity>
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

              <Heading fontSize="lg" color="white">
                Girasol
              </Heading>
            </VStack>
            </TouchableOpacity>
          </Column>
        </Row>

        <Row space={6}>
          <Column>
          <TouchableOpacity>
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

              <Heading fontSize="lg" color="white">
                Girasol
              </Heading>
            </VStack>
            </TouchableOpacity>
          </Column>

          <Column>
          <TouchableOpacity>
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

              <Heading fontSize="lg" color="white">
                Girasol
              </Heading>
            </VStack>
            </TouchableOpacity>
          </Column>
        </Row>
      </Container>
  );
}

{
  /* <VStack alignItems="center">
          <Image
            source={{
              uri: 'https://forbes.com.br/wp-content/uploads/2022/06/girassol_04jul22_Mahathir-Mohd-Yasin_EyeEm_Gettyimages-1024x683.jpg',
            }}
            alt="Imagem planta"
            w={40}
            h={32}
            rounded="md"
          />

          <Heading fontSize="lg" color="white">
            Girasol
          </Heading>
        </VStack>

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

          <Heading fontSize="lg" color="white">
            Girasol
          </Heading>
        </VStack>

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

          <Heading fontSize="lg" color="white">
            Girasol
          </Heading>
        </VStack> */
}
