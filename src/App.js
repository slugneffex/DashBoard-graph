import './App.css';
import SideBar from './components/Sidebar/SideBar';
import MainBody from './components/MainBody/MainBody';

function App() {
  return (
   <div className='dashboard'>
    <SideBar />
    <MainBody />
   </div>
  );
}

export default App;
