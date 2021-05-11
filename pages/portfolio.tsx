import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'

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
        className={desktopLayout && classes.titleResponsive}
      >
        Portfolio
      </Typography>
      <Project desktopLayout={desktopLayout} />
    </Container>
  )
}

export default Portfolio
