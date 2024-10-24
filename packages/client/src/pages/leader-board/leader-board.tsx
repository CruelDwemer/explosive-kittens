import React, { FC, useContext } from 'react'
import { Box, Typography, Card, CardContent, CardHeader } from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'
import styles from './styles'
import { LeaderBoardTable } from '../../widgets'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'

const LeaderBoard: FC = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardHeader
          title={
            <Box sx={styles.title}>
              <Typography
                variant="h2"
                component="span"
                color="primary"
                sx={styles.text}>
                Рекорды
              </Typography>
              <EmojiEvents sx={styles.emoji} />
            </Box>
          }
        />
        <CardContent>
          <LeaderBoardTable />
        </CardContent>
      </Card>
    </Box>
  )
}

export default LeaderBoard
