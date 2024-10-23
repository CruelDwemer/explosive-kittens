import React, { FC, useContext } from 'react'
import { Avatar, TableCell, TableRow } from '@mui/material'
import styles from './styles'
import { LeaderBoardUserData } from '../../models'
import { BASE_URL } from '../../../../shared/constants/api'
import { ThemeContext } from '../../../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const LeaderBoardElement: FC<LeaderBoardUserData> = ({
  avatar,
  name,
  score,
}) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <TableRow>
      <TableCell align="center">
        <Avatar sx={styles.avatar} src={avatar ? avatar : undefined} />
      </TableCell>
      <TableCell align="center" sx={styles.text}>
        {name}
      </TableCell>
      <TableCell align="right" sx={styles.text}>
        {score}
      </TableCell>
    </TableRow>
  )
}

export default LeaderBoardElement
