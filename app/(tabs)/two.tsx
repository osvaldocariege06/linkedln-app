import { Stack } from 'expo-router';

import { Container } from '@/components/Container';
import { Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <Container>
        <Text>Two</Text>
      </Container>
    </>
  );
}
