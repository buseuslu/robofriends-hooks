import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import RobotCardList from '../RobotCardList/RobotCardList'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import './Home.css'

export default function Home() {
  const [robots, setRobots] = useState([])
  const [filteredRobots, setFilteredRobots] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setRobots(res.data)
      setFilteredRobots(res.data)
    })
  }, [])

  const onSearchChange = (event) => {
    const filtered = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredRobots(filtered)
  }

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Typography id='title' textAlign='center' sx={{ m: 1, fontSize: 54 }}>
        Robofriends
      </Typography>
      <Search searchChange={onSearchChange} />
      <RobotCardList robots={filteredRobots} />
    </div>
  )
}
