import { FC, useContext } from 'react'
import { TableCell, Typography } from '@mui/material'
import useStyle from './styles'
import { ThemeContext } from '../../../features/theme-provider/ThemeProvider'

interface Props {
  text: string
}

const TableHeadCell: FC<Props> = ({ text }) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)

  return (
    <TableCell align="center">
      <Typography variant="caption" color="primary" sx={styles.text}>
        {text}
      </Typography>
    </TableCell>
  )
}

export default TableHeadCell
