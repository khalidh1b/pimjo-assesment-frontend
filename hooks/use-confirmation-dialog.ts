import { useState, useCallback } from 'react';

interface UseConfirmationDialogReturn {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  confirm: () => void;
};

export const useConfirmationDialog = (onConfirm?: () => void): UseConfirmationDialogReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback((): void => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const confirm = useCallback((): void => {
    onConfirm?.();
    closeDialog();
  }, [onConfirm, closeDialog]);

  return {
    isOpen,
    openDialog,
    closeDialog,
    confirm,
  };
};