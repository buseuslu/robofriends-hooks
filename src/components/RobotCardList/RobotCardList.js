import React from 'react'
import Box from '@mui/material/Box'
import RobotCard from '../RobotCard/RobotCard'

export default function RobotCardList(props) {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      sx={{ m: 2 }}
    >
      {props.robots.map((robotCard, i) => {
        return (
          <Box key={i} sx={{ m: 1 }}>
            <RobotCard robot={robotCard} />
          </Box>
        )
      })}
    </Box>
  )
}
