import { useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [current, setCurrent] = useState(0)

  // Lista de diapositivas (el orden es el del carrusel)
  const slides = []
  if (project.videoUrl) {
    slides.push({ id: 'video', type: 'video', src: project.videoUrl })
  }
  if (project.image) {
    slides.push({
      id: `image-${project.image}`,
      type: 'image',
      src: project.image,
    })
  }
  if (project.images) {
    project.images.forEach((img) => {
      slides.push({ id: `image-${img}`, type: 'image', src: img })
    })
  }

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  const slide = slides[current]

  return (
    <div className='project'>
      {slide && (
        <div className='carousel'>
          <div className='carousel__slide'>
            {slide.type === 'video' ? (
              <iframe
                src={`https://www.youtube.com/embed/${slide.src}`}
                title={`${project.name} video`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            ) : (
              <img
                src={
                  slide.src.startsWith('http')
                    ? slide.src
                    : `${process.env.PUBLIC_URL}/images/${slide.src}`
                }
                alt={`${project.name} screenshot`}
              />
            )}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type='button'
                className='carousel__btn carousel__btn--prev'
                onClick={prev}
                aria-label='anterior'
              >
                <ChevronLeftIcon />
              </button>
              <button
                type='button'
                className='carousel__btn carousel__btn--next'
                onClick={next}
                aria-label='siguiente'
              >
                <ChevronRightIcon />
              </button>

              <div className='carousel__dots'>
                {slides.map((s, i) => (
                  <button
                    type='button'
                    key={s.id}
                    className={`carousel__dot ${
                      i === current ? 'carousel__dot--active' : ''
                    }`}
                    onClick={() => setCurrent(i)}
                    aria-label={`ir a la diapositiva ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.date && <p className='project__date'>{project.date}</p>}

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer