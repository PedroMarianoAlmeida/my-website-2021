import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LateralCard from '../src/components/specific/IndexPage/LateralCard/LateralCard'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BodyStructure from '../src/components/specific/IndexPage/Body/BodyStructure'

export default function Home() {
  const matches = useMediaQuery('(min-width:960px)') //md break point

  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={9}>
        <BodyStructure />
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <LateralCard fitHeight={matches} />
      </Grid>
    </Grid>
  )
}
