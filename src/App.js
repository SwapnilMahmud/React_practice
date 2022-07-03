import React  from "react";
import NestedMap from "./components/NestedMap/NestedMap";
import Card from "./components/NestedMap/Card";
import Cardone from "./components/NestedMap/Cardone";
import Bootstrap from "./components/NestedMap/bootstrapuse";
import STATE from "./components/NestedMap/state";
import LoginPanel from "./components/LoginPanel/Index";
import Event_Handler_class  from "./components/Event_Handler_class/index";
import Usestatefunction from "./components/Event_Handler_class/Usestatefunction";
import Form from "./components/Form/form";
import Form2 from "./components/Form/form2";
import Child from "./components/Form/parenttochild";
import Home from "./components/Todo/Home";
function App() {
  const data="I am from parent";
  const handleChildData=(childData)=>{
    console.log("App: " + childData);

  };
  return (
    <div>
      <Home/>

      {/* <Child onChildData={handleChildData}/>
      <Form2/>
      <Form/>
      <NestedMap/>
      <Card name="American International University" Description="Where leaders are created" />
      <Cardone name="calss components"/>
      <Bootstrap/>
      <STATE/>
      <LoginPanel/>
      <Event_Handler_class/>
      <Usestatefunction/> */}
    </div>
  );
}

export default App;
