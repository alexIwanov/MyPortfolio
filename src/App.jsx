import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/main.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectItem from './pages/ProjectItem'

function App() {


	return (
		<div className='app'>

			<Router>
				<Navbar />
				<Routes>
					<Route path='/MyPortfolio' element={<Home />} />
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/projectItem/:id' element={<ProjectItem />} />
				</Routes>

				<Footer />
			</Router>

		</div >



	)
}

export default App
