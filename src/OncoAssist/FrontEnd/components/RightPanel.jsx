import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const RightPanel = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Calculators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Module-specific calculators will appear here
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RightPanel
