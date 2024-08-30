import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    bottom: '2rem',
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    maxWidth: '16rem',
  },
}))

export default useStyles
