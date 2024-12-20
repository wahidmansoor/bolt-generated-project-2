import { Box, Grid, Paper } from '@mui/material'
import ModuleSelector from '../ModuleSelector'
import ChatComponent from '../ChatComponent'
import LeftPanel from '../LeftPanel'
import RightPanel from '../RightPanel'

const MainLayout = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ModuleSelector />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 'calc(100vh - 200px)' }}>
            <LeftPanel />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2, height: 'calc(100vh - 200px)' }}>
            <ChatComponent />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, height: 'calc(100vh - 200px)' }}>
            <RightPanel />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainLayout
