import { useQuery } from '@tanstack/react-query';

import { getProducts } from './storeServices';

export function UseStoreApi(path: string) {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['store', path],
    queryFn: () => getProducts(path),
  });

  return { data, isError, isFetching };
}
