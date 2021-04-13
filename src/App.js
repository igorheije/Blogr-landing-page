import CircleBG from "./components/CircleBG";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionFuture from "./components/SectionFuture";
import SectionNotebook from "./components/SectionNotebook";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionFuture/>
      <CircleBG />
      <SectionNotebook/>
      <Footer/>
    </div>
  );
}

export default App;
