import React from "react"
import './App.css';
import data from "./convertcsv.json"

function App() {
  const table1Val = data.map(c => {
    return (<>
        <tr>
          <td>{c["Index #"]}</td>
          <td>
            {c.Value}
          </td>
        </tr>     
    </>)
  })


  function Tab() {
    const Alpha = 2+28
    const Beta = 80 / 5
    const Charlie = 90 * 3

    return (<>
    <tr>
      <td>Alpha</td>
      <td>{Alpha}</td>
    </tr>
    <tr>
      <td>Beta</td>
      <td>{Beta}</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>{Charlie}</td>
    </tr>
    </>)
  }

  return (<>
  <div className="table1">
    <h2>Table 1</h2>
    <table>
        <tr>
          <th>Value</th>
          <th>Index</th>
        </tr>
        {table1Val}
    </table>
  </div>
    
    <div className="tab2">
      <h2>Table 2</h2>
      <table>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
          < Tab />
      </table>
    </div>
  </>)
    
}

export default App;
