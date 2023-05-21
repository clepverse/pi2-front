import { StatusBar } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';

import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { AuthProvider } from './src/contexts/authContext';

import { Routes } from './src/routes';

import { LinearGradient } from 'expo-linear-gradient';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme/index';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoads] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NativeBaseProvider theme={THEME} config={config}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          {fontsLoads ? <Routes /> : <Loading />}
        </NativeBaseProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
