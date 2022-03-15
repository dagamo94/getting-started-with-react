import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Header from "./Header";
import Greeting from "./Greeting";
import Notifications from "./Notifications";
import ShoppingList from "./ShoppingList";

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

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
      <ShoppingList items={todos} />
      <Footer />
    </>
  );
}

export default App;
