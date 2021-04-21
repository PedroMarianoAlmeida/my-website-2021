import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  root: {
    backgroundColor: '#5DA9AC',
  },
}))

const SkillSection = () => {
  const classes = useStyles()

  return (
    <Box
      py={5}
      className={classes.root}
      display="flex"
      flexDirection="column"
      boxShadow={5}
    >
      <Box my={1}>
        <Typography align="center" variant="h5">
          Tech Stack
        </Typography>

        <Box display="flex" flexDirection="row" flexWrap="wrap">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <FontAwesomeIcon icon={faJs} size="2x" />
          <FontAwesomeIcon icon={faHtml5} size="2x" />
          <FontAwesomeIcon icon={faCss3} size="2x" />
          <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faBootstrap} size="2x" />
          <FontAwesomeIcon icon={faGit} size="2x" />
          <FontAwesomeIcon icon={faGoogle} size="2x" />
          <FontAwesomeIcon icon={faNode} size="2x" />
        </Box>
      </Box>
    </Box>
  )
}

export default SkillSection
