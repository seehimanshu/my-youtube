import { Children } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components.js/Body';
import Header from './components.js/Header';
import MainContainer from './components.js/MainContainer';
import WatchPage from './components.js/WatchPage';
import appStore from './utils/appStore';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
          <div className="">
      
            <Header/>
            <RouterProvider router={appRouter}></RouterProvider>
          </div>
    </Provider>
    
  );
}

export default App;
