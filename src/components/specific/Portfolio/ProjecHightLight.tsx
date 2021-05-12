import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  techStack: {
    display: 'flex',
    alignItems: 'center',
  },

  chip: {
    margin: theme.spacing(1),
  },
}))

const ProjectHightLight = ({ highlightFeatures }) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      <Typography variant="h6" display="inline" className={classes.techStack}>
        Highlight Features:{' '}
      </Typography>
      <Box>
        {highlightFeatures.map((highlightFeature) => (
          <Chip
            label={highlightFeature}
            color="secondary"
            className={classes.chip}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ProjectHightLight
