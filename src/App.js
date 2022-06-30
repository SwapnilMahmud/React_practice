import React  from "react";
import NestedMap from "./components/NestedMap/NestedMap";
import Card from "./components/NestedMap/Card";
import Cardone from "./components/NestedMap/Cardone";
import Bootstrap from "./components/NestedMap/bootstrapuse";
import STATE from "./components/NestedMap/state";
import LoginPanel from "./components/LoginPanel/Index";

function App() {
  return (
    <div>
      <NestedMap/>
      <Card name="American International University" Description="Where leaders are created" />
      <Cardone name="calss components"/>
      <Bootstrap/>
      <STATE/>
      <LoginPanel/>
    </div>
  );
}

export default App;
