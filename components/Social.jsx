import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const icons = [
  {
    icon: <FaGithub />, path: "https://github.com/Aryan2002-star"
  },
  {
    icon: <FaLinkedin />, path: ""
  },

];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
