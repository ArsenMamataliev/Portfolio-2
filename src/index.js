import React from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.scss';
import ErrorPage from './projects/photo gallery/components/errorPage/ErrorPage';
import Projects from './pages/projects/Projects';
import GalleryApp from './projects/photo gallery/GalleryApp';
import ProjectsList from './projects/photo gallery/components/projectList/ProjectsList';
import BookingApp from './projects/booking/BookingApp';
import Main from './pages/main/Main';
import CurrencyExchangeApp from './projects/currency exchange/CurrencyExchangeApp';
import MovieInfoApp from './projects/movie info/MovieInfoApp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects",
    element: <Projects />,
    children: [
      {
        path: "list",
        element: <ProjectsList />
      },
      {
        path: "photo_gallery",
        element: <GalleryApp />
      },
      {
        path: "booking",
        element: <BookingApp />
      },
      {
        path: "movie_info",
        element: <MovieInfoApp/>
      },
      {
        path: "currency_exchange",
        element: <CurrencyExchangeApp/>
      }
      ],
    },
 
]);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
