import { Box, Button, Grid2, Pagination, TextField } from '@mui/material'
import { FC, useState } from 'react'
import styles from './styles'

const CreateForumTopic: FC = () => {
  const [isCreate, setIsCreate] = useState(false)
  return (
    <>
      <Grid2 container sx={styles.container}>
        <Box>
          <Button variant="contained" onClick={() => setIsCreate(!isCreate)}>
            {isCreate ? 'Закрыть' : 'Создать топик'}
          </Button>
        </Box>

        <Box>
          <Pagination count={10} color="primary" />
        </Box>
      </Grid2>
      {isCreate && (
        <Box sx={styles.input_container}>
          <TextField
            placeholder="Напишите топик"
            id="outlined-size-small"
            size="small"
            sx={styles.input}
          />
          <Button variant="contained">Создать</Button>
        </Box>
      )}
    </>
  )
}

export default CreateForumTopic
