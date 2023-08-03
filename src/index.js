import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

ReactDOM.render(
  <Provider store={store}>
    <Header title="Todo App" />
    <Hero />
    <App />
    <Footer />
  </Provider>,
  document.getElementById("root")
)
