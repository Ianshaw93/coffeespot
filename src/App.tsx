import Home from "./components/Home";
import NavComponent from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import DealOfTheWeek from "./components/DealOfTheWeek";

function App() {

	return (
		<div>
			<NavComponent />
			<Home />
			<DealOfTheWeek />
			<Products />
			<About />
			
			<Articles />
			<Contact />
		</div>
	);
}

export default App;
