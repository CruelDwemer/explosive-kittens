import { Box, Button, CardContent, Divider, TextField } from '@mui/material'
import styles from './styles'
import { changePassword } from '../../entities/user/api'
import { passwordSchema } from '../../entities/user/lib'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { NewPasswordData } from '../../entities/user/models'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'

const schema = Joi?.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
})

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<NewPasswordData>({
    resolver: joiResolver(schema),
    mode: 'onBlur',
  })

  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  const handleSubmitPasswordChange = (data: NewPasswordData) => {
    event?.preventDefault()
    changePassword(data)
  }

  return (
    <CardContent
      component="form"
      noValidate
      onSubmit={handleSubmit(handleSubmitPasswordChange)}
      sx={{ padding: '24px' }}>
      <Box sx={styles.container}>
        <TextField
          id="oldPassword"
          type="password"
          placeholder="Старый пароль"
          {...register('oldPassword')}
          error={errors.oldPassword ? true : false}
          helperText={errors.oldPassword?.message}
          onBlur={() => trigger('oldPassword')}
          sx={styles.input}
        />

        <TextField
          id="newPassword"
          type="password"
          placeholder="Новый пароль"
          {...register('newPassword')}
          error={errors.newPassword ? true : false}
          helperText={errors.newPassword?.message}
          onBlur={() => trigger('newPassword')}
          sx={styles.input}
        />
      </Box>

      <Divider orientation="horizontal" flexItem sx={styles.divider} />

      <Box sx={styles.button_container}>
        <Button type="submit" variant="contained" sx={styles.button}>
          Сохранить
        </Button>
      </Box>
    </CardContent>
  )
}

export default ChangePassword
