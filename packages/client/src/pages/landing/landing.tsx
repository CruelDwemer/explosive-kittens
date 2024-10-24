import { Box, Container, Grid2, Paper, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import LandingCard from '../../widgets/landing-card'
import { Info } from './model/data'
import INFO from './model/constants'
import styles from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const Landing: FC = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <Container sx={styles.container}>
      <Paper sx={styles.header}>
        <Typography component="h4" variant="h4" sx={styles.text}>
          Инструкция
        </Typography>
      </Paper>

      <Grid2 container spacing={5} gap={5}>
        {INFO.map((item: Info) => {
          const { image, title, description, id } = item
          return (
            <Grid2 size={6} sx={styles.cardContainer}>
              <LandingCard
                id={id}
                image={image}
                title={title}
                description={description}
              />
            </Grid2>
          )
        })}
      </Grid2>
    </Container>
  )
}

export default Landing
