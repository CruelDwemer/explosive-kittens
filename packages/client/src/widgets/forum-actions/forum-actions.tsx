import { Box, Button, Grid2, Pagination, TextField } from '@mui/material'
import { FC, useContext, useState } from 'react'
import styles from './styles'
import { ThemeContext } from '../../features/theme-provider/ThemeProvider'
import useStyle from './styles'

const CreateForumTopic: CreateTopicType = ({ createTopic }) => {
  const [isCreate, setIsCreate] = useState(false)
  const { theme } = useContext(ThemeContext)
  const styles = useStyle(theme)
  return (
    <>
      <Grid2 container sx={styles.container}>
        <Box>
          <Button
            variant="contained"
            onClick={() => setIsCreate(!isCreate)}
            sx={styles.button}>
            {isCreate ? 'Закрыть' : 'Создать топик'}
          </Button>
        </Box>

        <Box>
          <Pagination count={10} color="primary" sx={styles.pagination} />
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
          <Button variant="contained" sx={styles.button} onClick={createTopic}>
            Создать
          </Button>
        </Box>
      )}
    </>
  )
}

export default CreateForumTopic
