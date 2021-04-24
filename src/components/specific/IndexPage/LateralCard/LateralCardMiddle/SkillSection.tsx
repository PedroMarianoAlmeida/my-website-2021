import Image from 'next/image'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'

const skills = [
  { name: 'Bootstrap', path: 'bootstrap.svg' },
  { name: 'CSS', path: 'css.svg' },
  { name: 'Firebase', path: 'firebase.svg' },
  { name: 'Git', path: 'git.svg' },
  { name: 'Github', path: 'github.svg' },
  { name: 'Graphql', path: 'graphql.svg' },
  { name: 'Heroku', path: 'heroku.svg' },
  { name: 'HTML', path: 'html.svg' },
  { name: 'JavaScript', path: 'javascript.svg' },
  { name: 'Material UI', path: 'material-ui.svg' },
  { name: 'Next.js', path: 'next-js.svg' },
  { name: 'Prettier', path: 'prettier.svg' },
  { name: 'React', path: 'react.svg' },
  { name: 'Tailwind', path: 'tailwind.svg' },
]

const SkillSection = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box my={1}>
        <Typography align="center" variant="h6">
          Tech Stack
        </Typography>

        <Box display="flex" flexDirection="row" flexWrap="wrap" px={2}>
          {skills.map((skill) => (
            <Tooltip title={skill.name} placement="top" key={skill.name}>
              <Box m={1}>
                <Image
                  alt={skill.name}
                  src={`/images/logos/${skill.path}`}
                  height={40}
                  width={40}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default SkillSection