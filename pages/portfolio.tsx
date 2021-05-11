import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Project from '../src/components/specific/Portfolio/Project'

const Portfolio = ({ desktopLayout }) => {
  return (
    <Container>
      <Typography variant="h1" align="center">
        Projects Page
      </Typography>
      <Project desktopLayout={desktopLayout} />
    </Container>
  )
}

export default Portfolio
