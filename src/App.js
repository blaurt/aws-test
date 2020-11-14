import logo from "./logo.svg";
import "./App.css";
const services = ["route 53", "s3", "cloudfront", "cert manager"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AWS test</p>
        <p>v4</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Built with</h2>
        {services.map(service => (
          <li>{service}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
