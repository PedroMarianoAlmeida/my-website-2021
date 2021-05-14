import { useState } from 'react'
import Box from '@material-ui/core/Box'

import EmailCopiedSnackbar from './../Others/EmailCopiedSnackbar'

const AnimatedExternalLink = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const regularSize = '40px'
  const mouseOverSize = '50px'

  return (
    <Box
      height={mouseOverSize}
      width={mouseOverSize}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <EmailCopiedSnackbar size={mouseOver ? mouseOverSize : regularSize} />
    </Box>
  )
}

export default AnimatedExternalLink
