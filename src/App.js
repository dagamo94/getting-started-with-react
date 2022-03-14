import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Header from "./Header";
import Greeting from "./Greeting";
import Notifications from "./Notifications";

function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  return (
    <>
      <Header />
      <Greeting language="es" />
      <Notifications notifications={notifications}/>
      <WelcomeBack name="Joe" adjective="funny" />
      <WelcomeBack name="Anna" adjective="clever" />
      <WelcomeBack />
      <Footer />
    </>
  );
}

export default App;
