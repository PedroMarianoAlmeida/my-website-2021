import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'
import portfolioData from './../src/data/portfolioData'
import PageTitle from '../src/components/specific/Others/PageTitle'

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
      <PageTitle title="Portfolio" desktopLayout={desktopLayout} />
      {portfolioData.map((projectData) => (
        <Project desktopLayout={desktopLayout} projectData={projectData} />
      ))}
    </Container>
  )
}

export default Portfolio
