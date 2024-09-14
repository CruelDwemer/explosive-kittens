import { FC } from 'react'
import styles from './styles'
import { FormControl, FormLabel, TextField } from '@mui/material'

type Props = {
  name: string
  type: string
  label: string
  selector: string
  register: any
  errors: any
  trigger: any
}

const AuthInputElement: FC<Props> = ({
  name,
  type,
  label,
  selector,
  register,
  errors,
  trigger,
}) => {
  return (
    <FormControl sx={styles.element} fullWidth={true}>
      <FormLabel sx={styles.label} htmlFor={name}>
        {label}
      </FormLabel>
      <TextField
        id={selector}
        type={type}
        size="small"
        variant="standard"
        {...register(name)}
        error={errors[name] ? true : false}
        helperText={errors[name]?.message}
        onBlur={() => trigger(name)}
      />
    </FormControl>
  )
}

export default AuthInputElement
