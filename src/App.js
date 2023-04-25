/* eslint-disable react/jsx-boolean-value */
function UserGreeting() {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting() {
  return <h1>Please, Sign up!</h1>;
}

function Greeting(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  return (
    <Greeting isLoggedIn={true} />
  );
}

export default App;
