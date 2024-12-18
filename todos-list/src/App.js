// import logo from "./logo.svg";
import "./App.css";

import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2",
    },

    {
      sno: 3,
      title: "Go to the cinema",
      desc: "You need to go to the cinema to get this job done3",
    },
  ];
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
