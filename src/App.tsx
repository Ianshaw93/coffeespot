import Home from "./components/Home";
import NavComponent from "./components/Navbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {

	return (
		<div>
			<NavComponent />
			<Home />
			<Products />
			<Menu />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
