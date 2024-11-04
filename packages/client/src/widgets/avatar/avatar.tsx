import { Avatar, Button, Card, CardMedia, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { BASE_URL } from '../../shared/constants'
import { IUserAvatar } from '../../pages/user/model/userData'
import { Create } from '@mui/icons-material'
import styled from '@emotion/styled'
import { updateAvatar } from '../../entities/user/api'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const UserAvatar = ({ user, setUser, header = false }: IUserAvatar) => {
  const [isAvatarChanging, setIsAvatarChanging] = useState(false)
  const [avatarFormData, setAvatarFormData] = useState<FormData | null>(null)
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('avatar', file)
      setIsAvatarChanging(true)
      setUser({
        avatar: URL.createObjectURL(file),
      })
      setAvatarFormData(formData)
    }
  }

  const handleAvatarUpdate = async () => {
    if (!avatarFormData) return
    try {
      const response: Response = await updateAvatar(avatarFormData)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data: { avatar: string } = await response.json()
      setUser({ avatar: data.avatar })
    } catch (error) {
      console.error('Error updating avatar:', error)
    } finally {
      setIsAvatarChanging(false)
    }
  }

  return (
    <>
      {!header ? (
        <CardMedia sx={styles.container}>
          <Card variant="outlined" sx={styles.image_container}>
            <Avatar
              src={
                isAvatarChanging
                  ? user.avatar
                  : `${BASE_URL}/resources${user.avatar}`
              }
              sx={styles.image}
            />
          </Card>

          <Typography
            gutterBottom
            variant="caption"
            component="span"
            sx={styles.text}>
            Вы можете сменить свой аватар
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            endIcon={<Create />}
            size="small"
            sx={styles.button}>
            Сменить аватар
            <VisuallyHiddenInput type="file" onChange={handleAvatarChange} />
          </Button>
          {isAvatarChanging && avatarFormData && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleAvatarUpdate()
              }}>
              Сохранить
            </Button>
          )}
        </CardMedia>
      ) : (
        <Avatar
          src={`${BASE_URL}/resources${user.avatar}`}
          sx={styles.user_image}
        />
      )}
    </>
  )
}

export default UserAvatar
