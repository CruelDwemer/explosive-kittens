import * as React from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material'
import { EmojiEvents } from '@mui/icons-material'
import leaderboardData from './model/testData'
import styles from './styles'
import LeaderboardElement from './ui/leaderboard-element'
import { LEADERBOARD_TABLE_HEAD_ROWS } from './model/constants'
import TableHeadCell from './ui/table-head-cell/table-head-cell'

const Leaderboard = () => (
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
        <TableContainer sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {LEADERBOARD_TABLE_HEAD_ROWS.map((title, index) => (
                  <TableHeadCell key={index} text={title} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardData
                .sort(
                  ({ data: data1 }, { data: data2 }) =>
                    data2.score - data1.score
                )
                .map(({ data }, index) => (
                  <LeaderboardElement key={index} {...data} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  </Box>
)

export default Leaderboard
