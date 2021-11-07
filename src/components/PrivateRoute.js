import React from "react"
import { Route} from "react-router-dom"
import { NavBar } from "../NavBar"



export default function PrivateRoute({ component: Component, ...rest }) {
   

  return (
    <>
    <NavBar/>
    <div className="container mt-3">
    <Route
      {...rest}
      render={props => {
        
        return  <Component {...props} />
      }}
    ></Route>
    </div>
</>
  )
}