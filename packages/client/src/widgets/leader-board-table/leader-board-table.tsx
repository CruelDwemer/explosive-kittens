import React, { FC, useState, useEffect, useContext } from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { LEADER_BOARD_TABLE_HEAD_ROWS } from '../../entities/leader-board/constants'
import { TableHeadCell } from '../../shared/ui'
import { LeaderBoardElement } from '../../entities/leader-board/ui'
import useStyle from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'

import { getLeaderboard } from '../../entities/leader-board/api'

const LeaderBoardTable: FC = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([])
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  useEffect(() => {
    const getLeaderBoardData = async () => {
      const response = await getLeaderboard(
        JSON.stringify({
          ratingFieldName: 'catsRating',
          cursor: 0,
          limit: 10,
        })
      )
      const result = await response.json()
      const { ratings } = result[0].data
      setLeaderBoardData(ratings)
    }

    getLeaderBoardData()
  }, [])

  return (
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
          {leaderBoardData.map((data, index) => (
            //@ts-expect-error bug for no reason
            <LeaderBoardElement key={index} {...data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LeaderBoardTable
