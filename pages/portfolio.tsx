import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'

const projectsData = [
  {
    title: 'Dummy Coordinate',
    type: 'Open Source',
    summary:
      'Full stack project developed for testing and prototyping applications that use Geographical Coordinates, returning latitude and longitude based on parameters in endpoints',
    highlightFeatures: [
      'Web API development',
      'Documentation Writing',
      'Google Maps API',
      'useFormik',
    ],
    techStack: ['JavaScript', 'TypeScript'],
    actions: [
      {
        text: 'See Code',
        link: 'https://github.com/PedroMarianoAlmeida/random-coordinate',
      },
      { text: 'Visit Page', link: 'https://dummy-coordinate.vercel.app/' },
    ],
    youtubeLink: 'https://www.youtube.com/embed/Ke90Tje7VS0',
  },
]

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
      {projectsData.map((projectData) => (
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
