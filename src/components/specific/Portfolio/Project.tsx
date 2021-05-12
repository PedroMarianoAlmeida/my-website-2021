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
import ProjectTechStack from './ProjectTechStack'

const useStyles = makeStyles((theme) => ({
  headerDesktop: {
    gridArea: 'header',
  },

  contentDesktop: {
    gridArea: 'content',
  },

  techStack: {
    display: 'flex',
    alignItems: 'center',
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
        <ProjectTechStack techStack={techStack} />
      </CardContent>

      <ProjectActions actions={actions} />
    </ProjectCard>
  )
}

export default Project
