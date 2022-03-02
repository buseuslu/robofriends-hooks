import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function RobotCard(props) {
  return (
    <Card style={{ backgroundColor: 'lightgreen' }}>
      <CardContent sx={{ minHeight: 400, minWidth: 300 }}>
        <Box display='flex' flexDirection='column' textAlign='center'>
          <img
            alt='robots'
            src={`https://robohash.org/${props.robot.id}?size=200x200`}
          />
          <Typography sx={{ m: 1, fontSize: 24 }}>
            {props.robot.name}
          </Typography>
          <Typography sx={{ m: 1 }}>{props.robot.email}</Typography>
          <Typography sx={{ m: 1 }}>{props.robot.address.city}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
