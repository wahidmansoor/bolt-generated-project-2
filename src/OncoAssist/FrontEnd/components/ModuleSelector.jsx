import { Box, Button, ButtonGroup } from '@mui/material'

const modules = [
  'Oncology Outpatient',
  'Chemotherapy Day Unit',
  'Inpatient Oncology',
  'Palliative Care'
]

const ModuleSelector = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <ButtonGroup variant="contained" aria-label="module selector">
        {modules.map((module) => (
          <Button key={module}>{module}</Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}

export default ModuleSelector
