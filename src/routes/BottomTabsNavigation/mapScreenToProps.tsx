import { AppTabBottomTabParamList } from './AppTabNavigator';

interface IconProps {
  label: string;
  icon: {
    focused: string;
    unfocused: string;
  };
  color: string;
}

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['color'];
      unfocused: IconProps['color'];
    };
  }
> = {
  TodoHomeScreen: {
    label: 'TodoApp',
    icon: {
      focused: 'tasks',
      unfocused: 'tasks',
    },
  },
  WeatherHomeScreen: {
    label: 'WeatherApp',
    icon: {
      focused: 'cloud',
      unfocused: 'cloud',
    },
  },
  StoreHomeScreen: {
    label: 'StoreApp',
    icon: {
      focused: 'shopping-bag',
      unfocused: 'shopping-bag',
    },
  },
};
