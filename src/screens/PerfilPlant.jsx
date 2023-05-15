import { VStack, Container, Center, Text, Box, Stack, Link, Icon, ScrollView, Button, Modal } from 'native-base';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Input } from '../components/Input';

export function PerfilPlant() {
  const [selected, setSelectedDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const events = [
    { title: 'Event 1', date: '2023-05-10' },
    { title: 'Event 2', date: '2023-05-12' },
    { title: 'Event 3', date: '2023-05-15' },
  ];

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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false) }>
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
              <Input
                placeholder="Digite a data"
                type="text"
                variant="underlined"
              />  
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Center mt={4}>

        <Box style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: '10%' }}>
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
          >
          <Text style={{ color: '#FFF' }}> Excluir </Text>
          </Button>
        </Box>

          <Text style={{ color: '#FFF'}}>Vitinho</Text>
          <Text style={{ color: '#FFF'}}>Plant</Text>
          <Text style={{ color: '#FFF'}}>Adotada em 21/02/2023</Text>
          
          <Calendar
           style={{
             borderRadius: 5,
           }}
           onDayPress={handleDateSelect}
           markedDates={{ [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}, ...eventDates }}
          />

           

      {selected && <Text style={{ color: '#FFF'}} >Selected date: {selected}</Text>}
      {events
        .filter((event) => event.date === selected)
        .map((event, index) => (
          <Text style={{ color: '#FFF'}} key={index}>{event.title}</Text>
        ))}
        </Center>
      </VStack>
    </ScrollView>
  );
}
