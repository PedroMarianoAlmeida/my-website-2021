import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },

  rootDesktop: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `    
      "media header"
      "media content"
      "media actions"
      `,
    padding: theme.spacing(1),
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
}))

const ProjectCard = (props) => {
  const classes = useStyles()
  return (
    <Card
      elevation={1}
      variant="outlined"
      className={`${
        props.desktopLayout ? classes.rootDesktop : classes.rootMobile
      }`}
    >
      {props.children}
    </Card>
  )
}

export default ProjectCard
