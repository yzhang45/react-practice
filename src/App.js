import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="Course">
          <header className="Course-header">
            <table>
              <thead>
              <tr>
                <th>College</th>
                <th>Department</th>
                <th>Number</th>
                <th>Section</th>
                <th>Professor</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>CAS</td>
                <td>CS</td>
                <td>112</td>
                <td>B1</td>
                <td>Sullivan</td>
              </tr>

              <tr>
                <td>CAS</td>
                <td>CS</td>
                <td>332</td>
                <td>A1</td>
                <td>Bun</td>
              </tr>

              <tr>
                <td>CAS</td>
                <td>CS</td>
                <td>350</td>
                <td>A1</td>
                <td>Sarkar</td>
              </tr>

              </tbody>
            </table>

          </header>
        </div>

    );
  }
}
export default App;
