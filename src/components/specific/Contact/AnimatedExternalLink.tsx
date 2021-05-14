import Image from 'next/image'
import { useState } from 'react'

import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

const AnimatedExternalLink = ({ address, alt, src }) => {
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
    >
      <Link href={address} target="_blank" rel="noopener noreferrer">
        <Image
          alt={alt}
          src={`/images/logos/${src}`}
          height={mouseOver ? mouseOverSize : regularSize}
          width={mouseOver ? mouseOverSize : regularSize}
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        />
      </Link>
    </Box>
  )
}

export default AnimatedExternalLink
