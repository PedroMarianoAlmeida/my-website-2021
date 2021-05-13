import Image from 'next/image'
import Link from '@material-ui/core/Link'

const ContactAction = ({ src, alt, address }) => {
  return (
    <Link href={address} target="_blank" rel="noopener noreferrer">
      <Image
        alt={alt}
        src={`/images/logos/${src}`}
        height={'30px'}
        width={'30px'}
      />
    </Link>
  )
}

export default ContactAction
