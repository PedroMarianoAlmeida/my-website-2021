import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  actionsDesktop: {
    gridArea: 'actions',
    display: 'flex',
    justifyContent: 'space-around',
  },
}))

const ProjectActions = ({ actions }) => {
  const classes = useStyles()

  return (
    <CardActions className={classes.actionsDesktop}>
      {actions.map((action) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          key={action.text}
        >
          {action.text}
        </Button>
      ))}
    </CardActions>
  )
}

export default ProjectActions
