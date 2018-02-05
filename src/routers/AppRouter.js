import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/starter/Header'
import HomePage from '../components/starter/HomePage'
import ContactPage from '../components/starter/ContactPage'
import PortfolioItemPage from '../components/starter/PortfolioItemPage'
import PortfolioPage from '../components/starter/PortfolioPage'

/** 簡單的Starter結構 */
const starterRouter = (
  <BrowserRouter>
    <div id="app_containter">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} /> {/* 404頁面 */}
      </Switch>
    </div>
  </BrowserRouter>
)

const AppRouter = () => {
  return starterRouter
};

export default AppRouter
