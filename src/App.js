import './App.css';
import Layout from "./components/Layout";
import Faq from "./components/Faq";
import "./assets/styles/index.scss";

function App() {
  return (
    <div className="App">
		  <Layout>
		    <div className="container">
			    <Faq />
		    </div>
		  </Layout>
    </div>
  );
}

export default App;
