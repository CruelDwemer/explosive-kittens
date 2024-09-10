import React, { FC } from 'react'
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
import styles from './styles'
import { LeaderBoardElement } from '../../entities/leader-board/ui'
import {
  LEADER_BOARD_TABLE_HEAD_ROWS,
  leaderBoardData,
} from '../../entities/leader-board/constants'
import { TableHeadCell } from '../../shared/ui'

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
        <TableContainer sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {LEADER_BOARD_TABLE_HEAD_ROWS.map((title, index) => (
                  <TableHeadCell key={index} text={title} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderBoardData
                .sort(
                  ({ data: data1 }, { data: data2 }) =>
                    data2.score - data1.score
                )
                .map(({ data }, index) => (
                  <LeaderBoardElement key={index} {...data} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  </Box>
)

export default LeaderBoard
