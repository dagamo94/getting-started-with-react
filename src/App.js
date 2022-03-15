import "./App.css";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Header from "./Header";
import Greeting from "./Greeting";
import Notifications from "./Notifications";
import ShoppingList from "./ShoppingList";
import Quote from "./Quote";

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

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
      <Quote quote={quote} />
      <Footer />
    </>
  );
}

export default App;
