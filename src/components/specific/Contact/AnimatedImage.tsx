import Image from 'next/image'
import { useState } from 'react'

import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

const AnimatedImage = ({ address, alt, src }) => {
  const [mouseOver, setMouseOver] = useState(false)
  const regularSize = '40px'
  const mouseOverSize = '50px'
  return (
    <Box
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      height={mouseOverSize}
      width={mouseOverSize}
    >
      <Link href={address} target="_blank" rel="noopener noreferrer">
        <Image
          alt={alt}
          src={`/images/logos/${src}`}
          height={mouseOver ? regularSize : 'mouseOverSize'}
          width={mouseOver ? regularSize : 'mouseOverSize'}
        />
      </Link>
    </Box>
  )
}

export default AnimatedImage
