import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import {useColorScheme} from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutLined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { display } from '@mui/system'

function ModeSelect() {
  const { mode, setMode} =useColorScheme()
  const handleChange = (event) => {
    const selectMode = event.target.values
    setMode(selectMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LightModeIcon fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('prefers-color-schema: dark')
  // const prefersLightMode = useMediaQuery('prefers-color-schema: light')
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}


function App() {
  return (
    <>
      <ModeSelect />
      <hr/>
      <ModeToggle/>
      <hr/>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
