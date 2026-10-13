import uniqid from 'uniqid'
import { entrevistas } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Entrevistas.css'

const Entrevistas = () => {
  if (!entrevistas.length) return null

  return (
    <section id='entrevistas' className='section entrevistas'>
      <h2 className='section__title'>Ruedas de Prensa y Entrevistas</h2>

      <div className='entrevistas__grid'>
        {entrevistas.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Entrevistas
