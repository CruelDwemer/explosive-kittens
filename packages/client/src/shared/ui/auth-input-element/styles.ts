import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  element: {
    position: 'relative',
    margin: theme.spacing(0, 0, 3.5),
  },
  label: {
    fontSize: '0.8rem !important',
  },
}))

export default useStyles
