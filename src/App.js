import ContainerAboutMe from "./Components/ContainerAboutMe/ContainerAboutMe";
import ContainerExperiencia from "./Components/ContainerExperiencia/ContainerExperiencia";
import ContainerMain from "./Components/ContainerMain/ContainerMain";
import ContainerPortfolio from "./Components/ContainerPortfolio/ContainerPortfolio";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ContainerMain/>
      <ContainerAboutMe/>
      <ContainerExperiencia/>
      <ContainerPortfolio/>
      <Footer/>
    </div>
  );
}

export default App;
