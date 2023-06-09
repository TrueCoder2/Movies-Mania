import React from 'react'

const Movies = (Props) => {
  return (
    <div className='movies'>
   <img src={Props.poster} alt='movie poster' /> <br/><br/>
   <p> {Props.title} </p><br/>
   <p> Year: {Props.year} </p>
   <br/>
  <button className='btn'>Watch Now</button>
  <br/><br/>
    </div>
  )
}

export default Movies