import { Recipe, Banner } from "./components";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center h-screen w-screen font-DST app">
      <Banner />
      <div className="grid main">
        <Recipe />
      </div>
      <div className="flex flex-col items-center w-full mt-10 bg-red-900 footer">
        footer
      </div>
    </div>
  );
}

export default App;
