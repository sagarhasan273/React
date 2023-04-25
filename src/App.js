/* eslint-disable import/no-cycle */
import MailBox from './components/MailBox';

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <MailBox unReadMessages={messages} />
  );
}

export default App;
