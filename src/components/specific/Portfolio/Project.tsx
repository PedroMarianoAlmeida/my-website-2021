import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'

import ProjectMedia from './ProjectMedia'
import ProjectText from './ProjectText'
import ProjectCard from './ProjectCard'

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

  headerDesktop: {
    gridArea: 'header',
  },

  contentDesktop: {
    gridArea: 'content',
  },

  actionsDesktop: {
    gridArea: 'actions',
    display: 'flex',
    justifyContent: 'space-around',
  },
}))

const Project = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <ProjectCard desktopLayout={desktopLayout}>
      <CardHeader
        title="Dummy Coordinate"
        align="center"
        className={classes.headerDesktop}
      />

      <ProjectMedia desktopLayout={desktopLayout} />

      <CardContent className={classes.contentDesktop}>
        <ProjectText field="Type" description="Open Source" />
        <ProjectText
          field="Description"
          description="Full stack project developed for testing and prototyping
            applications that use Geographical Coordinates, returning latitude
            and longitude based on parameters in endpoints"
        />

        <Box>
          <Typography variant="h6" display="inline">
            Tech Stack:{' '}
          </Typography>
          <Typography display="inline">Lorem </Typography>
        </Box>
      </CardContent>

      <CardActions className={classes.actionsDesktop}>
        <Button variant="contained" color="primary" size="small">
          See Code
        </Button>
        <Button variant="contained" color="primary" size="small">
          Visit Page
        </Button>
      </CardActions>
    </ProjectCard>
  )
}

export default Project
