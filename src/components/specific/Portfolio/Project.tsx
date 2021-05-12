import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'

import ProjectMedia from './ProjectMedia'
import ProjectText from './ProjectText'
import ProjectCard from './ProjectCard'
import ProjectActions from './ProjectActions'
import SkillLogoFlexbox from '../SkillLogoFlexbox'

const useStyles = makeStyles((theme) => ({
  headerDesktop: {
    gridArea: 'header',
  },

  contentDesktop: {
    gridArea: 'content',
  },
}))

const Project = ({
  desktopLayout,
  title,
  type,
  summary,
  actions,
  youtubeLink,
  techStack,
}) => {
  const classes = useStyles()

  return (
    <ProjectCard desktopLayout={desktopLayout}>
      <CardHeader
        title={title}
        align="center"
        className={classes.headerDesktop}
      />

      <ProjectMedia desktopLayout={desktopLayout} youtubeLink={youtubeLink} />

      <CardContent className={classes.contentDesktop}>
        <ProjectText field="Type" description={type} />
        <ProjectText field="Summary" description={summary} />

        <Box>
          <Typography variant="h6" display="inline">
            Tech Stack:{' '}
          </Typography>
          <SkillLogoFlexbox skillNames={techStack} />
        </Box>
      </CardContent>

      <ProjectActions actions={actions} />
    </ProjectCard>
  )
}

export default Project
