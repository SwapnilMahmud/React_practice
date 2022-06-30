import React  from "react";
import NestedMap from "./components/NestedMap/NestedMap";
import Card from "./components/NestedMap/Card";
import Cardone from "./components/NestedMap/Cardone";
import Bootstrap from "./components/NestedMap/bootstrapuse";
import STATE from "./components/NestedMap/state";

function App() {
  return (
    <div>
      <NestedMap/>
      <Card name="American International University" Description="Where leaders are created" />
      <Cardone name="calss components"/>
      <Bootstrap/>
      <STATE/>
    </div>
  );
}

export default App;
