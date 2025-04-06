// import React from 'react'

import { Cart } from "../../components/Cart"
import { MainPageWrapper } from "../../components/layout"
import MenuListing from "../../components/MenuListing"

import { TopNavigationBar } from "../../components/TopNavigationBar"

const Home = () => {
  return (
    <MainPageWrapper>
      <TopNavigationBar />
      <MenuListing/>
      <Cart/>
   </MainPageWrapper>
  )
}

export default Home