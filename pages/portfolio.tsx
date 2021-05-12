import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'
import portfolioData from './../src/data/portfolioData'

const useStyles = makeStyles((theme) => ({
  titleResponsive: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
  },
}))

const Portfolio = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        variant="h1"
        align="center"
        className={desktopLayout ? '' : classes.titleResponsive}
      >
        Portfolio
      </Typography>
      {portfolioData.map((projectData) => (
        <Project
          desktopLayout={desktopLayout}
          title={projectData.title}
          type={projectData.type}
          summary={projectData.summary}
          actions={projectData.actions}
          youtubeLink={projectData.youtubeLink}
          key={projectData.title}
          techStack={projectData.techStack}
        />
      ))}
    </Container>
  )
}

export default Portfolio
