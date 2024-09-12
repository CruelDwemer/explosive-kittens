import { Avatar, Button, Card, CardMedia, Typography } from '@mui/material'
import { useState } from 'react'
import { BASE_URL } from '../../shared/constants/api'
import { IUser, IUserAvatar } from '../../pages/user/model/userData'
import { Create } from '@mui/icons-material'
import styled from '@emotion/styled'
import { updateAvatar } from '../../entities/user/api'
import styles from './styles'

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

const UserAvatar = (props: IUserAvatar) => {
  const [isAvatarChanging, setIsAvatarChanging] = useState(false)
  const [avatarFormData, setAvatarFormData] = useState<FormData>(new FormData())
  const { user, setUser } = props

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('avatar', file)
      setIsAvatarChanging(true)
      setUser((prevUser: IUser) => ({
        ...prevUser,
        avatar: URL.createObjectURL(file),
      }))
      setAvatarFormData(formData)
    }
  }

  const handleAvatarUpdate = async () => {
    const response = await updateAvatar(avatarFormData)
    const data = await response.json()
    setUser((prevUser: IUser) => ({ ...prevUser, avatar: data.avatar }))
    setIsAvatarChanging(false)
  }

  return (
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

      <Typography gutterBottom variant="caption" component="span">
        Вы можете сменить свой аватар
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        endIcon={<Create />}
        size="small">
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
  )
}

export default UserAvatar
