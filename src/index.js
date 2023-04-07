import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import "./assets/main.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const root = ReactDOM.createRoot(document.getElementById("root"))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    }
  }
})

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
