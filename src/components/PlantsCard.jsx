import { Heading, HStack, Image, VStack, Row, Column, Container } from 'native-base';
import { TouchableOpacity } from 'react-native';

export function PlantsCard({ ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <Container space={4} justifyContent="space-between">
        <Row space={6}>
          <Column size={2}>
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
          </Column>

          <Column>
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
          </Column>
        </Row>

        <Row space={6}>
          <Column>
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
          </Column>

          <Column>
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
          </Column>
        </Row>
      </Container>
    </TouchableOpacity>
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
