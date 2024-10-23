import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import Picker from 'emoji-picker-react'
import styles from './styles'

interface PropsType {
  reactions?: string
}
export const EmojiPicker = ({ reactions }: PropsType) => {
  const [showPicker, setShowPicker] = useState(false)
  const [userReactions, setUserReactions] = useState(reactions)

  const onEmojiClick = (event: any) => {
    setUserReactions(userReactions + event.emoji)
    //TODO: saving
    setShowPicker(false)
  }

  return (
    <div className="picker-container">
      {reactions && reactions.length > 0 && (
        <Box sx={styles.emojiBox}>{userReactions}</Box>
      )}
      <IconButton onClick={() => setShowPicker(val => !val)}>
        <InsertEmoticonIcon />
      </IconButton>
      {showPicker && (
        <Picker
          style={{ position: 'absolute', right: 0, zIndex: 1001 }}
          onEmojiClick={onEmojiClick}
          reactionsDefaultOpen={true}
        />
      )}
    </div>
  )
}

export default EmojiPicker
