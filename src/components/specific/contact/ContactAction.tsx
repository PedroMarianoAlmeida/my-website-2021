import Image from 'next/image'
import Link from '@material-ui/core/Link'

const ContactAction = ({ src, alt, address, size }) => {
  return (
    <Link href={address} target="_blank" rel="noopener noreferrer">
      <Image
        alt={alt}
        src={`/images/logos/${src}`}
        height={size}
        width={size}
      />
    </Link>
  )
}

export default ContactAction
