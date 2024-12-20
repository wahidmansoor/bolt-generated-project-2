import { Box, TextField, Button, Paper } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ChatComponent = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, mb: 2, overflowY: 'auto' }}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: '#f5f5f5' }}>
          Chat messages will appear here
        </Paper>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          size="small"
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ChatComponent
