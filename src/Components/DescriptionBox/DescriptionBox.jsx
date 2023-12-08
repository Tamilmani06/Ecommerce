import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">  Description</div>
        <div className="descriptionbox-nav-box fade">  Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur placeat porro autem doloremque repellendus accusantium necessitatibus? Facilis illum debitis alias porro ad vero reprehenderit, asperiores, aut voluptatibus, .</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur incidunt molestias consequatur doloremque, obcaecati reprehenderit esse eveniet, blanditiis tenetur ratione harum veritatis dolores assumenda quod magnam iusto possimus porro?
        </p>
        </div>
    </div>
  )
}

export default DescriptionBox