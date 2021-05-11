import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'

import ProjectMedia from './ProjectMedia'
import ProjectText from './ProjectText'
import ProjectCard from './ProjectCard'
import ProjectActions from './ProjectActions'

const useStyles = makeStyles((theme) => ({
  headerDesktop: {
    gridArea: 'header',
  },

  contentDesktop: {
    gridArea: 'content',
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

      <ProjectActions
        actions={[{ text: 'See Code' }, { text: 'Visit Page' }]}
      />
    </ProjectCard>
  )
}

export default Project
