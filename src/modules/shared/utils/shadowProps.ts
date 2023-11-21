import { useColorScheme } from 'react-native';

export function useShadowProps() {
  function getShadowProps(colorScheme: string | null | undefined) {
    return {
      elevation: 10,
      shadowColor: colorScheme === 'dark' ? '#FFF' : '#000',
      shadowOpacity: 0.05,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: -3 },
    };
  }

  const deviceColorScheme = useColorScheme();
  const shadowProps = getShadowProps(deviceColorScheme);

  return shadowProps;
}
