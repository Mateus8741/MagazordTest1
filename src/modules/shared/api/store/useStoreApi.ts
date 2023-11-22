import { useQuery } from '@tanstack/react-query';

import { apiConfigStore } from './apiConfigStore';

export function UseStoreApi(path: string) {
  const {} = useQuery({
    queryKey: ['store', path],
    queryFn: () => apiConfigStore.get(path),
  });
}
