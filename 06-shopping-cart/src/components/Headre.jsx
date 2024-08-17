import React from 'react'
import { Filters } from './Filters'

export const Headre = ({changeFilters}) => {
  return (
    <>
        <h1>Take Me Down ⚠️</h1>
        <Filters onChangeFilters={changeFilters}/>
    </>
  )
}
