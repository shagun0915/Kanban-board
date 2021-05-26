import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectInfo from './components/ProjectInfo';
import ViewBar from './components/ViewBar';
import ToDo from './components/ToDo';
import InProgress from './components/InProgress';
import Review from './components/Review';
import Completed from './components/Completed';

function App() {
	return (
		<div className="app row">
			<div className="col-md-2 d-none d-md-block" style={{padding: "0", margin: "0"}}>
				<Sidebar />
			</div>
			<div className="col-md-10" style={{padding: "0", margin: "0", backgroundColor: "#ffffff"}}>
				<Header />
				<ProjectInfo />
				<ViewBar />
				<div style={{margin: "10px 30px"}}>
				<div className="row">
					<ToDo />
					<InProgress />
					<Review />
					<Completed />
				</div>
				</div>
			</div>
		</div>
	);
}

export default App;
