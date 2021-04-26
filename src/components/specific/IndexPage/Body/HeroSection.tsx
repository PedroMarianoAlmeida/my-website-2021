import { FunctionComponent } from 'react'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'

import Typography from '@material-ui/core/Typography'

type TypewriterType = FunctionComponent<{
  component?: string
  onInit?: (typewriter: TypewriterClass) => void
  options?: Partial<Options>
}>

const TypewriterEffect: TypewriterType = Typewriter as any

const HeroSection = () => {
  return (
    <Typography variant="h2" align="center">
      Lets{' '}
      <TypewriterEffect
        component="span"
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('🛠️ work 🛠️')
            .pauseFor(2500)
            .deleteAll()
            .typeString('📖 learn 📖')
            .pauseFor(2500)
            .deleteAll()
            .typeString('💻 code 💻')
            .pauseFor(2500)
            .deleteAll()
            .typeString('🌱 grow 🌴')
            .pauseFor(2500)
            .deleteAll()
            .typeString('change the 🌎')
            .pauseFor(2500)
            .deleteAll()
            .start()
        }}
      />{' '}
      together
    </Typography>
  )
}

export default HeroSection
