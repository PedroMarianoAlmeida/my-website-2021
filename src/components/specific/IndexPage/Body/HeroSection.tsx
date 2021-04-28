import { FunctionComponent } from 'react'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

type TypewriterType = FunctionComponent<{
  component?: string
  onInit?: (typewriter: TypewriterClass) => void
  options?: Partial<Options>
}>

const TypewriterEffect: TypewriterType = Typewriter as any

const HeroSection = () => {
  return (
    <Grid item xs={12}>
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
    </Grid>
  )
}

export default HeroSection
