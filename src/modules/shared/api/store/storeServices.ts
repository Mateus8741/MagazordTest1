import { apiConfigStore } from '@api';

export function getProducts(path: string) {
  return apiConfigStore.get(path);
}
