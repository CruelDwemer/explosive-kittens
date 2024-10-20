import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { FC, useContext } from 'react'
import { Info } from '../../pages/landing/model/data'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const LandingCard: FC<Info> = ({ image, title, description }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Card sx={styles.container}>
      <CardMedia
        component="img"
        height="480px"
        image={image}
        sx={styles.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={styles.text}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: description }}
          sx={styles.text}
        />
      </CardContent>
    </Card>
  )
}

export default LandingCard
