import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarIcon from '@mui/icons-material/Star';

const StarRating = () => {
    const [rating,setRating]=useState([true,false,false,false,false])
    const [hoverIndex,setHoverIndex]=useState(-1)
    const cmarr=['Poor','Average','Great','Excelent','Perfect']
    const [comment,setComment]=useState(0)

    const handleMouseEnter=(ind)=>{ 
        setHoverIndex(ind)


    }
    const handleClick=(ind)=>{
        const newRating=rating.map((item,index)=>{
            return index<=ind
        })
        setRating(newRating)
        setComment(ind)
    }
  return (
    <div className='star-main'>
        <div className='star-div'>
            <div><span>How many stars would you give to our program?</span></div>
            <div>
                {
                    rating.map((item,index)=>{
                        let btnClass="star"
                        if(item || (index<=hoverIndex)){
                            btnClass="star-active"

                        }
                        else{
                            btnClass="star"
                        }

                        return (<StarIcon  
                            key={index} 
                            style={{fontSize: "50px"}} 
                            className= {btnClass} 
                            onMouseEnter={()=>handleMouseEnter(index)}
                            onMouseLeave={()=>setHoverIndex(-1)}
                            onClick={()=>{handleClick(index)}}
                            
                            /> 
    
                        
                         )

                    })
                }
                </div>
            <div>{cmarr[comment]}</div>

        </div>


    </div>
  )
}

export default StarRating