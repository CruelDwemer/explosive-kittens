import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import Picker from 'emoji-picker-react'
import styles from './styles'
import { MouseDownEvent } from 'emoji-picker-react/dist/config/config'
import { updateComment } from '../../entities/forum/lib'

interface PropsType {
  reactions?: string,
  commentId: number
}
export const EmojiPicker = ({ reactions, commentId }: PropsType) => {
  const [showPicker, setShowPicker] = useState(false)
  const [userReactions, setUserReactions] = useState(reactions)

  const onEmojiClick: MouseDownEvent = async (event) => {
    setUserReactions(userReactions + event.emoji)
    const emoji = userReactions + event.emoji
    const result = await updateComment(commentId, emoji)
    setShowPicker(false)
  }

  return (
    <div className="picker-container">
      {userReactions && userReactions.length > 0 && (
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
