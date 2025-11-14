import { DialogHeader } from './dialog-header';
import { DialogIcon } from './dialog-icon';
import { DialogContent } from './dialog-content';
import { DialogActions } from './dialog-actions';

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  userName?: string;
  icon?: 'warning' | 'error' | 'info';
  cancelText?: string;
  confirmText?: string;
  confirmVariant?: 'primary' | 'danger';
};

export const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  userName,
  icon = 'warning',
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  confirmVariant = 'primary',
}: ConfirmationDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-lg relative">
        <DialogHeader onClose={onClose} />
        <DialogIcon icon={icon} />
        <DialogContent 
          title={title} 
          message={message} 
          userName={userName} 
        />
        <DialogActions 
          onCancel={onClose}
          onConfirm={onConfirm}
          cancelText={cancelText}
          confirmText={confirmText}
          confirmVariant={confirmVariant}
        />
      </div>
    </div>
  );
};