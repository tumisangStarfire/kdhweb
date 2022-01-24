import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css'
import ReactRouterSetup from './route/router';


function App() {

  

  return (
    <div className="container-scroller">
         
          <ReactRouterSetup></ReactRouterSetup>
      
    </div>
   
  );
}

export default App;
