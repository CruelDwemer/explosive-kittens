import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
}))

export default useStyles
