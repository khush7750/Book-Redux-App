import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// redux
import {Provider} from "react-redux"
import store from "./redux/store"

import BookContainer from "./components/bookContainer"
import HookBookContainer from "./components/hookBookContainer"
import { Container } from "reactstrap"
const App = () =>{
  return(
    <Container fluid>
    <Provider store={store}>
       <HookBookContainer />
       <br>
       </br>
       <BookContainer/>
       
    </Provider>
    </Container>
  );
}

export default App