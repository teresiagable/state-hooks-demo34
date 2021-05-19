import './App.css';
import TempClassComponent from './components/TempClassComponent';
import TempFunctionComponent from './components/TempFunctionComponent';

function App() {
	return (
		<div className='App'>
			<div className='flex-container'>
				<div className='col'>
					<TempClassComponent />
				</div>
				<div className='col '>
					<TempFunctionComponent />
				</div>
			</div>
		</div>
	);
}

export default App;
