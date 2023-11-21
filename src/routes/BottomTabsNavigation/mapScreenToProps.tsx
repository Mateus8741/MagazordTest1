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
  HomeScreen: {
    label: 'TodoApp',
    icon: {
      focused: 'home',
      unfocused: 'home',
    },
  },
  ScheduleScreen: {
    label: 'WeatherApp',
    icon: {
      focused: 'calendar',
      unfocused: 'calendar',
    },
  },
  HistoryScreen: {
    label: 'StoreApp',
    icon: {
      focused: 'history',
      unfocused: 'history',
    },
  },
};
