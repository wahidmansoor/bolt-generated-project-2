import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const LeftPanel = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Common Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Suggested questions will appear here based on the selected module
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default LeftPanel
