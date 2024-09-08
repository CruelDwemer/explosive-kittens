import React, { FC } from 'react'
import { TableCell, Typography } from '@mui/material'

interface IProps {
  text: string
}

const TableHeadCell: FC<IProps> = ({ text }) => (
  <TableCell align="center">
    <Typography variant="caption" color="primary">
      {text}
    </Typography>
  </TableCell>
)

export default TableHeadCell
