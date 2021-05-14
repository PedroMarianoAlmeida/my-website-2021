import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Project from '../src/components/specific/Portfolio/Project'
import portfolioData from './../src/data/portfolioData'
import PageTitle from '../src/components/specific/Others/PageTitle'
import TitleAndDescriptionSEO from '../src/components/reusable/TitleAndDescriptionSEO'

const useStyles = makeStyles((theme) => ({
  titleResponsive: {
    fontSize: '2rem',
    marginTop: theme.spacing(2),
  },
}))

const Portfolio = ({ desktopLayout }) => {
  const classes = useStyles()

  return (
    <>
      <TitleAndDescriptionSEO
        title="Pedro Programmer | Portfolio"
        description="The best projects of Pedro Programmer"
      />
      <Container>
        <PageTitle title="Portfolio" desktopLayout={desktopLayout} />
        {portfolioData.map((projectData) => (
          <Project desktopLayout={desktopLayout} projectData={projectData} />
        ))}
      </Container>
    </>
  )
}

export default Portfolio
