import './App.css';
import Header from './component/header'
import FirstSection from './component/firstSection';
import Expertise from './component/expertise'
import CarsAndSellers from './component/carsAndSellers'
import WidgetSection from './component/widgetSection'
import Footer from './component/footer'

function App() {
  return (
    <>
      <Header></Header>
      <div className="main-page-container">
        <FirstSection></FirstSection>
        <Expertise></Expertise>
        <CarsAndSellers></CarsAndSellers>
        <WidgetSection></WidgetSection>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
