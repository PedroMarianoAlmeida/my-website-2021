import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const ProjectType = ({ field, description }) => {
  return (
    <Box>
      <Typography variant="h6" display="inline">
        {`${field}: `}
      </Typography>
      <Typography display="inline">{description}</Typography>
    </Box>
  )
}

export default ProjectType
