import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'
import { Info } from '../../pages/landing/model/data'
import styles from './styles'

const LandingCard: FC<Info> = ({ image, title, description }) => {
  return (
    <Card sx={styles.container}>
      <CardMedia
        component="img"
        height="480px"
        image={image}
        sx={styles.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  )
}

export default LandingCard
