import React from "react"
import "../App.css"
import { HashRouter as Router, Routes, Route, Link} from "react-router-dom"
const App = () => {

  return(
    <Router>
      <Routes>

        <Route path="/" element={
          <>
          <h1>HOME</h1>
          <Link to="/53254/">ZIP CODE</Link>
          </>
      }/>

        <Route path="/:zip">
          <Route path="events" element={<h1>Events</h1>}/>
          <Route path="flights" element={<h1>Flights</h1>}/>
          <Route path="hotels" element={<h1>Hotels</h1>}/>
        </Route>

      </Routes>
    </Router>
  )

}

export default App