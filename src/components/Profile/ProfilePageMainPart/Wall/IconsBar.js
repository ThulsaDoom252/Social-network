import React, { useEffect, useState } from 'react'
import {
     AiOutlineDislike, AiOutlineLike, AiOutlineShareAlt
} from 'react-icons/ai'

import { FaRegComment } from 'react-icons/fa'

const IconsBar = () => {
     const [likes, likesNumber] = useState(0)
     const [dislikes, dislikesNumber] = useState(0)

     const randomNumberInRange = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min
     }
     useEffect(() => {
          likesNumber(randomNumberInRange(1, 40))
          dislikesNumber(randomNumberInRange(1, 5))
     }, [])
     return (
          <div className={'profile-icons-bar'}>
               <button className={'profile-icons-bar-item'}>
                    <AiOutlineLike />{likes}
               </button>
               <button className={'profile-icons-bar-item'}>
                    <AiOutlineDislike />{dislikes}
               </button>
               <button className={'profile-icons-bar-item profile-comment-icon'}>
                    <FaRegComment />
               </button>
               <button className={'profile-icons-bar-item profile-share-icon'}>
                    <AiOutlineShareAlt />
               </button>
          </div>
     )
}

export default IconsBar