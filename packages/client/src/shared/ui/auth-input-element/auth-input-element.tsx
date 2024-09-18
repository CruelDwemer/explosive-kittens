import { FC } from 'react'
import styles from './styles'
import { FormControl, FormLabel, TextField } from '@mui/material'
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form'
import { AuthData } from '../../../entities/user/models'

interface AuthInputElementProps {
  name: keyof AuthData
  type: string
  label: string
  selector: string
  errors: FieldErrors<AuthData>
  register: UseFormRegister<AuthData>
  trigger: UseFormTrigger<AuthData>
}

const AuthInputElement: FC<AuthInputElementProps> = ({
  name,
  type,
  label,
  selector,
  errors,
  register,
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
        error={Boolean(errors[name])}
        helperText={errors[name]?.message}
        onBlur={() => trigger(name)}
      />
    </FormControl>
  )
}

export default AuthInputElement
