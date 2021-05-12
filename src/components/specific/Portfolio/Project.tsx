import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'

import ProjectMedia from './ProjectMedia'
import ProjectText from './ProjectText'
import ProjectCard from './ProjectCard'
import ProjectActions from './ProjectActions'
import ProjectTechStack from './ProjectTechStack'
import ProjectHightLight from './ProjecHightLight'

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

const Project = ({ desktopLayout, projectData }) => {
  const classes = useStyles()

  return (
    <ProjectCard desktopLayout={desktopLayout}>
      <CardHeader
        title={projectData.title}
        align="center"
        className={classes.headerDesktop}
      />

      <ProjectMedia
        desktopLayout={desktopLayout}
        youtubeLink={projectData.youtubeLink}
      />

      <CardContent className={classes.contentDesktop}>
        <ProjectText field="Type" description={projectData.type} />
        <ProjectText field="Summary" description={projectData.summary} />
        <ProjectTechStack techStack={projectData.techStack} />
        <ProjectHightLight highlightFeatures={projectData.highlightFeatures} />
      </CardContent>

      <ProjectActions actions={projectData.actions} />
    </ProjectCard>
  )
}

export default Project
