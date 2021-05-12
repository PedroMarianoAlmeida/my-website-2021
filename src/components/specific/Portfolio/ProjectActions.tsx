import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
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
        <Link
          key={action.text}
          href={action.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary" size="small">
            {action.text}
          </Button>
        </Link>
      ))}
    </CardActions>
  )
}

export default ProjectActions
