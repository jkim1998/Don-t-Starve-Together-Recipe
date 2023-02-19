import { Recipe, Banner } from "./components";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <Banner />
      <div className="grid grid-cols-4 w-4/5 h-screen bg-slate-500 opacity-80">
        <Recipe />
      </div>
    </div>
  );
}

export default App;
