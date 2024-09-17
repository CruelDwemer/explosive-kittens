import { FC } from 'react'
import { TableCell, Typography } from '@mui/material'

interface Props {
  text: string
}

const TableHeadCell: FC<Props> = ({ text }) => (
  <TableCell align="center">
    <Typography variant="caption" color="primary">
      {text}
    </Typography>
  </TableCell>
)

export default TableHeadCell
