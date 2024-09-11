import React, { FC } from 'react'
import { Box, Typography, Card, CardContent, CardHeader } from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'
import styles from './styles'
import { LeaderBoardTable } from '../../widgets'

const LeaderBoard: FC = () => (
  <Box sx={styles.container}>
    <Card>
      <CardHeader
        title={
          <Box sx={styles.title}>
            <Typography variant="h2" component="span" color="primary">
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

export default LeaderBoard
