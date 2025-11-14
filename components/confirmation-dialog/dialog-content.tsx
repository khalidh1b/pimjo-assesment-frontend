interface DialogContentProps {
  title: string;
  message: string;
  userName?: string;
};

export const DialogContent = ({ title, message, userName }: DialogContentProps) => {
  const formattedMessage = userName ? message.replace('{userName}', userName) : message;

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-center text-sm mb-8">
        {formattedMessage}
      </p>
    </>
  );
};