import React, { FC } from 'react'
import { Avatar, TableCell, TableRow } from '@mui/material'
import styles from './styles'
import { ILeaderboardUserData } from '../../model/leaderboardUserData'
import { BASE_URL } from '../../../../shared/constants/api'

const LeaderboardElement: FC<ILeaderboardUserData> = ({
  avatar,
  name,
  score,
}) => (
  <TableRow>
    <TableCell align="center">
      <Avatar
        sx={styles.avatar}
        src={avatar ? `${BASE_URL}/resources/${avatar}` : undefined}
      />
    </TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="right">{score}</TableCell>
  </TableRow>
)

export default LeaderboardElement
