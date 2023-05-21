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
} from 'native-base';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Input } from '../components/Input';

import { api } from '../axios/api';

import { useNavigation } from '@react-navigation/native';

export function PerfilPlant({ route }) {
  const navigation = useNavigation();

  const [selected, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  // const [event, setEvent] = useState([]);

  const { plant } = route.params;

  const events = plant.diaryEntries.map((entry) => {
    return {
      ...entry,
      date: entry.dateString,
    };
  });

  // const events = [
  //   {
  //     date: '2023-05-19',
  //     title: 'Evento 1',
  //     description: 'Descrição do evento 1',
  //   },
  //   {
  //     date: '2023-05-20',
  //     title: 'Evento 2',
  //     description: 'Descrição do evento 2',
  //   },
  // ];

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

  const handleDeletePlant = async () => {
    try {
      await api.delete(`/save/delete/${plant._id}`);

      navigation.navigate('home');
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
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
          <Modal.Content maxWidth="400px" maxHeight={'400px'}>
            <Modal.CloseButton />
            <Modal.Header>
              <Text> Envie um evento para o calendario de sua planta.</Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                placeholder="Descrição do evento a adicionar"
                type="text"
                variant="underlined"
              />
              <Input placeholder="Digite a data" type="text" variant="underlined" />
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Center mt={4}>
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
                backgroundColor: '#FFF',
                width: '15%',
              }}
            >
              <Text> V </Text>
            </Button>

            <Button
              style={{
                backgroundColor: '#FA4141',
                width: '25%',
              }}
              onPress={handleDeletePlant}
            >
              <Text style={{ color: '#FFF' }}> Excluir </Text>
            </Button>
          </Box>

          <Text style={{ color: '#FFF' }}>{plant?.popularName}</Text>
          <Text style={{ color: '#FFF' }}>{plant?.nickName}</Text>
          <Text style={{ color: '#FFF' }}>{`${plant?.dateOfPurchase}`}</Text>

          <Calendar
            style={{
              borderRadius: 5,
            }}
            onDayPress={handleDateSelect}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
              ...eventDates,
            }}
          />

          {selected && <Text style={{ color: '#FFF' }}>Selected date: {selected}</Text>}
          {events
            .filter((event) => event.date === selected)
            .map((event, index) => (
              <Text style={{ color: '#FFF' }} key={index}>
                {event.title}
              </Text>
            ))}
        </Center>
      </VStack>
    </ScrollView>
  );
}
