import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={Model3}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelY}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Existing Inventory"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Solar Roof"
          desc="Lowest Cost Solar Panels in America"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Accessories"
          desc=""
          descLink=""
          backgroundImg={Accessories}
          leftBtnText="Shop Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="false"
        />
      </div>
    </div>
  );
}

export default App;
