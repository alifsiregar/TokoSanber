import React,{useState} from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Weather from './Views/Weather'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

// Selamat datang di aplikasi TokoSanber! Aplikasi ini dibuat untuk proyek pada bootcamp React Web Development di Sanbercode.
// TokoSanber adalah sebuah aplikasi dummy untuk sebuah toko online dimana user bisa melihat produk-produk yang disediakan
// Selain itu, juga disediakan sebuah aplikasi cuaca untuk user mengecek cuaca di berbagai daerah

// Karena aplikasi ini merupakan sebuah aplikasi mobile, maka untuk menggunakannya dengan benar,
// harap window browser diatur seperti layar HP (bisa dengan menggunakan responsive pada developer tools)

// Di halaman App.js ini, saya menggunakannya sebagai template untuk halaman halaman yang lainnya.
// Disini digunakan router untuk switching antara halaman yang tersedia, dan juga untuk membuat url pada tiap laman
// Untuk melihat halaman-halaman yang tersedia, harap membuka folder Views
function App() {
  const gantiMode = useSelector( state => state)
  return (
    <div className={gantiMode ? "relative pb-10 min-h-screen bg-black text-white": "relative pb-10 min-h-screen"}>
      <Router>
        <Header />
        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
