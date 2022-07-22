import { NotifMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <NotifMessage>{message}</NotifMessage>
    </>
  );
};
