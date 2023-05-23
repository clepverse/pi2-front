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
  Button,
  Modal,
  Image,
  Heading,
} from 'native-base';
import { useRef, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Input } from '../components/Input';

import { api } from '../axios/api';

import { useNavigation } from '@react-navigation/native';
import { Loading } from '../components/Loading';

export function PerfilPlant({ route }) {
  const navigation = useNavigation();

  const { plant } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const events = plant.diaryEntries.map((entry) => {
    return {
      ...entry,
      date: entry.dateString,
    };
  });

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setModalVisible(true);
    const marked = {};
    marked[date.dateString] = { marked: true };
    setMarkedDates(marked);
  };

  const eventDates = {};
  events.forEach((event) => {
    eventDates[event.date] = { marked: true };
  });

  const shouldRefresh = true;

  const handleAddEvent = async () => {
    setIsLoading(true);
    try {
      await api.put(`/diary/save/${plant._id}`, {
        title: title,
        date: selectedDate,
      });

      navigation.navigate('home', {
        shouldRefresh,
      });

      setSelectedDate(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const handleDeletePlant = async () => {
    setIsLoading(true);
    try {
      await api.delete(`/save/delete/${plant._id}`);

      navigation.navigate('home', {
        shouldRefresh,
      });

      setSelectedDate(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
          <Modal.Content maxWidth="500px" maxHeight={'600px'}>
            <Modal.CloseButton />
            <Modal.Header>
              <Text> Envie um evento para o calendário de sua planta.</Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                style={{ color: '#000' }}
                value={title}
                placeholder="Title do evento a adicionar"
                type="text"
                variant="underlined"
                onChangeText={(text) => setTitle(text)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    handleAddEvent();
                    setModalVisible(false);
                  }}
                >
                  Salvar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Box mt={4}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: '10%',
            }}
          >
            <Button
              style={{
                marginLeft: 'auto',
                backgroundColor: '#FA4141',
                width: '25%',
              }}
              onPress={handleDeletePlant}
            >
              <Text style={{ color: '#FFF' }}> Excluir </Text>
            </Button>
          </Box>
          <VStack alignItems="center" marginX={2}>
            <Image
              source={{ uri: plant.plantUrl.src }}
              alt="Imagem planta"
              w={40}
              h={32}
              rounded="full"
            />
          </VStack>

          <VStack style={{ marginVertical: 20, marginHorizontal: 14 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFF' }}>
              {plant?.popularName}
            </Text>
            <Text style={{ color: '#FFF', fontSize: 16 }}>{plant?.nickName}</Text>
            <Text
              style={{ color: '#FFF', fontSize: 16 }}
            >{`${plant?.dateOfPurchase}`}</Text>
            <Text style={{ color: '#FFF', fontSize: 16 }}>
              {plant?.care.replace(/\d+/g, (match) => `\n${match}-`)}
            </Text>
          </VStack>

          <Calendar
            style={{
              borderRadius: 5,
              width: '100%',
            }}
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: {
                selectedDate: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
              ...eventDates,
            }}
          />
          {/* {selectedDate && (
            <Text style={{ color: '#FFF' }}>Selected date: {selectedDate}</Text>
          )} */}
          {/* <Text
            textAlign="center"
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: '#FFF',
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            {selectedDate && events.length > 0 ? ' Evento selecionado:' : 'Sem eventos'}
          </Text> */}
          {events
            .filter((event) => event.date === selectedDate)
            .map((event, index) => (
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#FFF',
                  marginTop: 10,
                  marginBottom: 4,
                }}
                key={index}
              >
                {` ${event.date} - ${event.title}`}
              </Text>
            ))}
        </Box>
      </VStack>
    </ScrollView>
  );
}
