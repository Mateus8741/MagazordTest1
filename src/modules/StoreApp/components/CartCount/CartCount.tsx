import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { useNavigation } from '@react-navigation/native';
import { useCart, useToastService } from '@services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CartCountProps {
  product: StoreDTO;
}

export function CartCount({ product }: CartCountProps) {
  const { goBack } = useNavigation();
  const { showToast } = useToastService();

  const { products, addProduct, reduceProduct, clearCart } = useCart();

  function handleClearCart() {
    clearCart();
    goBack();
    showToast({
      message: 'Carrinho limpo com sucesso!',
    });
  }

  function watchQuantity() {
    const productQuantity = products.find(item => item.id === product.id);

    if ((productQuantity?.quantity ?? 0) >= 1 && products.length > 1) {
      return reduceProduct(product);
    } else {
      return handleClearCart();
    }
  }

  function quantityHandler() {
    if (product.quantity === 1) {
      return (
        <Pressable hitSlop={10} onPress={() => watchQuantity()}>
          <Icon name="trash-can-outline" size={20} color="green" />
        </Pressable>
      );
    } else {
      return (
        <Pressable hitSlop={10} onPress={() => reduceProduct(product)}>
          <Icon name="minus" size={20} color="green" />
        </Pressable>
      );
    }
  }

  return (
    <View className="flex-row w-24 justify-between items-center bg-white rounded-md shadow-md p-2">
      {quantityHandler()}

      <Text className="text-green-600">{product.quantity}</Text>
      <Icon
        name="plus"
        size={20}
        color="green"
        onPress={() => addProduct(product)}
      />
    </View>
  );
}
