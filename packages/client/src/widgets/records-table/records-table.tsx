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
import { useContext } from 'react'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const RecordsTable = () => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <TableContainer component={Box} sx={styles.table_container}>
      <Table stickyHeader>
        <TableHead sx={styles.table_header}>
          <TableRow>
            {ROWS.map(row => (
              <TableCell align="center" key={row} sx={styles.table_header}>
                <Typography
                  variant="caption"
                  color={'primary'}
                  sx={styles.text}>
                  {row}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={styles.table_body}>
          {RECORDS.map((record, index) => (
            <TableRow key={record.id}>
              <TableCell align="center" sx={styles.text}>
                {index + 1}
              </TableCell>
              <TableCell align="center" sx={styles.text}>
                {record.date}
              </TableCell>
              <TableCell align="center" sx={styles.text}>
                {record.value}
              </TableCell>
              <TableCell align="center">
                <Chip
                  label={record.status}
                  color={record.isWinner ? 'success' : 'default'}
                  sx={record.isWinner ? styles.chip : styles.text}
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
