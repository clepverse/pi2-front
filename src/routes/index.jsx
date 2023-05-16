import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useAuth } from '../contexts/authContext';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { colors } = useTheme();

  const { isAuthenticated } = useAuth();

  console.log(isAuthenticated);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[900];

  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
