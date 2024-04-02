import React from 'react'
import CV from '../../Assets/RanjitMaharjan_CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA