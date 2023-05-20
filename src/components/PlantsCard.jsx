import axios from 'axios';
import { Heading, HStack, Image, VStack, Row, Column, Container } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';

export function PlantsCard({ navigation, plants, ...rest }) {
  return (
    <FlatList
      {...rest}
      data={plants}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('perfilplant', { plant: item });
          }}
        >
          <VStack alignItems="center" marginX={2}>
            <Image
              source={{ uri: item.plantUrl.src }}
              alt="Imagem planta"
              w={40}
              h={32}
              rounded="md"
            />

            <Heading fontSize="lg" color="white">
              {item.popularName}
            </Heading>
          </VStack>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
