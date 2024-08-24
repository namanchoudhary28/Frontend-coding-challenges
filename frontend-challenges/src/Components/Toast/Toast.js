import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const Toast = (props) => {
  return (
    <Button variant={props.variant} >{props.name}</Button>
  )
}

export default Toast