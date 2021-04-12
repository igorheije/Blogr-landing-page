import CircleBG from "./components/CircleBG";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {ImgNotebook,ImgGraphic} from "./components/ImgNotebook";
import TextSection from "./components/TextSection";

function App() {
  return (
    <div className="App">
      <Header />
      <TextSection title="Designed for the future"/>
      <ImgGraphic/>
      <TextSection title="Introducing an extensible editor"> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
          change the looks of a blog.</TextSection>
      <TextSection title=" Robust content management">Flexible content management enables users to easily move through posts. Increase the usability of your blog
          by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</TextSection>
      <CircleBG />
      <ImgNotebook/>
      <TextSection title=" Free, open, simple">Blogr is a free and open source application backed by a large community of helpful developers. It supports
        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</TextSection>
      <TextSection title=" Powerful tooling">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites.</TextSection>
      <Footer/>
    </div>
  );
}

export default App;
