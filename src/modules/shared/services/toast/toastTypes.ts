export interface Toast {
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
