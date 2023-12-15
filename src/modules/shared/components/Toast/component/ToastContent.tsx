import React from 'react';
import { Dimensions, Text, View, ViewStyle } from 'react-native';

import { Toast } from '@services';
import { useShadowProps } from '@shared';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const type = toast?.type;

  const mapNameAndColor = {
    success: {
      name: 'check-circle',
      color: 'green',
    },
    error: {
      name: 'error',
      color: 'red',
    },
    info: {
      name: 'info-outline',
      color: 'blue',
    },
    warning: {
      name: 'warning',
      color: 'orange',
    },
  };

  return (
    <View {...$boxStyles} style={[{ top: 110 }, useShadowProps()]}>
      <Icon
        name={mapNameAndColor[type!].name}
        color={mapNameAndColor[type!].color}
        size={24}
        style={{ marginRight: 16 }}
      />

      <Text className="font-regular text-md" style={{ flexShrink: 1 }}>
        {toast?.message}
      </Text>
    </View>
  );
}

const $boxStyles: ViewStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 16,
  borderRadius: 16,
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
