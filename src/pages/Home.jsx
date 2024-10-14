import React from 'react'
import CircleTop from '../components/CircleTop'
import CircleBottom from '../components/CircleBottom'
import Navabar from '../components/Navabar'
import HomeContainer from '../components/HomeContainer'
import { FaChevronDown } from 'react-icons/fa'


const Home = () => {
    return (
        <div className='' >
            <CircleTop />
            <CircleBottom />
            <Navabar />
            <HomeContainer />
            
        </div>
    )
}

export default Home