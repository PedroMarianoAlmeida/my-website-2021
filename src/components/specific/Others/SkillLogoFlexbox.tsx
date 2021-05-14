import Image from 'next/image'

import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'

import skills from '../../../data/skillsAndLogo'

const getSkillPath = (name) => {
  const getObject = skills.filter((skill) => skill.name === name)[0]
  return getObject.path
}

const SkillLogoFlexbox = ({ skillNames, justifyContent }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
    >
      {skillNames.map((skillName) => (
        <Tooltip title={skillName} placement="top" key={skillName}>
          <Box m={1}>
            <Image
              alt={skillName}
              src={`/images/logos/${getSkillPath(skillName)}`}
              height={40}
              width={40}
            />
          </Box>
        </Tooltip>
      ))}
    </Box>
  )
}

export default SkillLogoFlexbox
