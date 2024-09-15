import styles from './styles'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import {
  LEADER_BOARD_TABLE_HEAD_ROWS,
  leaderBoardData,
} from '../../entities/leader-board/constants'
import { TableHeadCell } from '../../shared/ui'
import { LeaderBoardElement } from '../../entities/leader-board/ui'
import React, { FC } from 'react'

const LeaderBoardTable: FC = () => (
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
          .sort(({ data: data1 }, { data: data2 }) => data2.score - data1.score)
          .map(({ data }, index) => (
            <LeaderBoardElement key={index} {...data} />
          ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default LeaderBoardTable
