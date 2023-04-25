export default function MailBox(props) {
  const { unReadMessages } = props;
  return (
    <div>
      {unReadMessages.length
        && <h1>Your have {unReadMessages.length} messaages to read.</h1>}
    </div>
  );
}
