import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import {Favourite} from "./components/pages/favourite/Favourite.tsx";
import {MainPage} from "./components/pages/main/MainPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ContextProvider} from "./components/Providers/ContextProvider.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<ContextProvider />}>
            <Route index element={<MainPage />} />
            <Route path='favourite' element={<Favourite />} />
        </Route>
    )
)


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
          </QueryClientProvider>
  </React.StrictMode>,
)
