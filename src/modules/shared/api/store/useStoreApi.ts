import { useQuery } from '@tanstack/react-query';

import { apiConfigStore } from './apiConfigStore';

export function UseStoreApi(path: string) {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['store', path],
    queryFn: () => apiConfigStore.get(path),
  });

  return { data, isError, isFetching };
}
