import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';

import { LinearGradient } from 'expo-linear-gradient';

import { THEME } from './src/theme/index';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export default function App() {
  const [fontsLoads] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME} config={config}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoads ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}
