import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function Search(props) {
  return (
    <Box textAlign='center'>
      <Typography component={'span'}>
        <TextField
          sx={{ width: '40%', ml: 3 }}
          id='outlined-basic'
          color='success'
          variant='outlined'
          placeholder='Search robots...'
          onChange={(event) => props.searchChange(event)}
        />
      </Typography>
    </Box>
  )
}
