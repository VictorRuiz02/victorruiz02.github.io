import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

        <div className='about__intro'>
          {name && (
            <h1>
              <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <h2 className='about__role'> {role}</h2>}

          {description &&
            description.map((paragraph) => (
              <p key={paragraph} className='about__desc'>
                {paragraph}
              </p>
            ))}
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Currículum
            </span>
          </a>
        )}

        {social && (
          <>
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon fontSize='large' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
