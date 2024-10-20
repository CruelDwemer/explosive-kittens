import { FormGroup } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import IOSSwitch from './iosSwitcher'

interface ThemeToggleProps {
  theme: string
  toggleTheme: () => void
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <FormGroup>
      <Tooltip title="Сменить тему">
        <IOSSwitch
          sx={{ m: 1 }}
          checked={theme === 'dark'}
          onChange={() => toggleTheme()}
        />
      </Tooltip>
    </FormGroup>
  )
}

export default ThemeToggle
