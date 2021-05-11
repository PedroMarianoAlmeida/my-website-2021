import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'

const projectsData = [
  {
    title: 'Dummy Coordinate',
    type: 'Open Source',
    description:
      'Full stack project developed for testing and prototyping applications that use Geographical Coordinates, returning latitude and longitude based on parameters in endpoints',
    actions: [{ text: 'See Code' }, { text: 'Visit Page' }],
    youtubeLink: 'https://www.youtube.com/embed/Ke90Tje7VS0',
  },
]

const useStyles = makeStyles((theme) => ({
  titleResponsive: {
    fontSize: '2rem',
  },
}))

const Portfolio = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        variant="h1"
        align="center"
        className={desktopLayout ? classes.titleResponsive : ''}
      >
        Portfolio
      </Typography>
      {projectsData.map((projectData) => (
        <Project
          desktopLayout={desktopLayout}
          title={projectData.title}
          type={projectData.type}
          description={projectData.description}
          actions={projectData.actions}
          youtubeLink={projectData.youtubeLink}
        />
      ))}
    </Container>
  )
}

export default Portfolio
