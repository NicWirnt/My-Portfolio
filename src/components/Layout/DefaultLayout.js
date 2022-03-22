import React from 'react'
import { GoUp } from '../go-up/GoUp'
import { Hero } from '../hero/Hero'
import { Footer } from './Footer'

export const DefaultLayout = ({ children }) => {
  return (
    <div className='layout'>
        <Hero></Hero>

        <main>{children}</main>

        <GoUp />
        <Footer />
    </div>
  )
}
