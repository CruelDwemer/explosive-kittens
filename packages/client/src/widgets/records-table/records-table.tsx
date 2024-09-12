import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { RECORDS, ROWS } from '../../pages/user/model/constants'
import styles from './styles'

const RecordsTable = () => {
  return (
    <TableContainer component={Box} sx={styles.table_container}>
      <Table stickyHeader>
        <TableHead sx={styles.table_header}>
          <TableRow>
            {ROWS.map(row => (
              <TableCell align="center">
                <Typography variant="caption" color={'primary'}>
                  {row}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={styles.table_body}>
          {RECORDS.map((record, index) => (
            <TableRow key={record.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{record.date}</TableCell>
              <TableCell align="center">{record.value}</TableCell>
              <TableCell align="center">
                <Chip
                  label={record.status}
                  color={record.isWinner ? 'success' : 'default'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RecordsTable
