import "./styles.css";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="page container-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
