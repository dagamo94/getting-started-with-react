import "./App.css";

function WelcomeBack({ name = "valued customer", adjective = "nice" }) {
  return (
    <p>
      Welcome back, {adjective} {name}!
    </p>
  );
}

function App() {
  return (
    <>
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack name="Anna" adjective="clever" />
      <WelcomeBack />
    </>
  );
}

export default App;
