import './App.css';
import { Provider } from 'react-redux';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import store from './Utilis/Store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import Watch from './Components/Watch';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <Header />
      <RouterProvider router={approutes} />
      <Footer />
    </div>
    </Provider>
  );
}


const approutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <Maincontainer />
        },
        {
          path: '/watch',
          element: <Watch />
        }
      ]
    }
  ]
)

export default App;
