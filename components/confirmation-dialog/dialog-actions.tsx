interface DialogActionsProps {
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  confirmVariant?: 'primary' | 'danger';
};

const confirmVariantConfig = {
  primary: {
    className: 'bg-blue-600 text-white hover:bg-blue-700',
  },
  danger: {
    className: 'bg-red-600 text-white hover:bg-red-700',
  },
};

export const DialogActions = ({ 
  onCancel, 
  onConfirm, 
  cancelText = 'Cancel', 
  confirmText = 'Confirm',
  confirmVariant = 'primary'
}: DialogActionsProps) => {
  const confirmClasses = confirmVariantConfig[confirmVariant].className;

  return (
    <div className="flex gap-3">
      <button
        onClick={onCancel}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        {cancelText}
      </button>
      <button
        onClick={onConfirm}
        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${confirmClasses}`}
      >
        {confirmText}
      </button>
    </div>
  );
};