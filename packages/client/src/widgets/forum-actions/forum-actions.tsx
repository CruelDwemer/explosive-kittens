import { Box, Button, Grid2, Pagination, TextField } from '@mui/material'
import { useState } from 'react'
import styles from './styles'
const ForumActions = () => {
  const [create, setCreate] = useState(false)
  return (
    <>
      <Grid2 container sx={styles.container}>
        <Box>
          {create ? (
            <Button variant="contained" onClick={() => setCreate(!create)}>
              Закрыть
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setCreate(!create)}>
              Создать топик
            </Button>
          )}
        </Box>

        <Box>
          <Pagination count={10} color="primary" />
        </Box>
      </Grid2>
      {create ? (
        <Box sx={styles.input_container}>
          <TextField
            placeholder="Напишите топик"
            id="outlined-size-small"
            size="small"
            sx={styles.input}
          />
          <Button variant="contained">Создать</Button>
        </Box>
      ) : null}
    </>
  )
}

export default ForumActions
