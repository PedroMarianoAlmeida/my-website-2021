import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const WorkTypes = ({ desktopLayout }) => {
  return (
    <Box my={3}>
      <Typography align="center" variant="h3">
        I worked with
      </Typography>

      <Box
        display="flex"
        flexDirection={desktopLayout ? 'row' : 'column'}
        justifyContent="space-around"
        mt={1}
      >
        <Typography align="center" variant="h4">
          Open Source
        </Typography>

        <Typography align="center" variant="h4">
          Commercial
        </Typography>

        <Typography align="center" variant="h4">
          Freelancer
        </Typography>
      </Box>
    </Box>
  )
}

export default WorkTypes
