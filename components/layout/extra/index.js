import React, { useContext } from 'react'

import { TagContext } from '../../../store/tag'

import Tag from '../../tag'
import { Spinner } from '../../icons'

import styles from './extra.module.css'

const Extra = ({ marginTop = 24 }) => {
  const { tagState } = useContext(TagContext)

  return (
    <div >
      
    </div>
  )
}

export default Extra
