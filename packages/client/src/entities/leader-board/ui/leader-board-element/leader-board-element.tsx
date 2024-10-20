import React, { FC } from 'react'
import { Avatar, TableCell, TableRow } from '@mui/material'
import styles from './styles'
import { LeaderBoardUserData } from '../../models'
import { BASE_URL } from '../../../../shared/constants/api'

const LeaderBoardElement: FC<LeaderBoardUserData> = ({
  avatar,
  name,
  score,
}) => (
  <TableRow>
    <TableCell align="center">
      <Avatar sx={styles.avatar} src={avatar ? avatar : undefined} />
    </TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="right">{score}</TableCell>
  </TableRow>
)

export default LeaderBoardElement

// src={avatar ? `${BASE_URL}/resources${avatar}` : undefined}
