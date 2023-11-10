import React from 'react'
import { useSearchParams } from 'next/navigation'

const user = () => {
  const searchParams = useSearchParams()

  const event = searchParams?.get('event')


  return (
    <>
    <h1>{event}</h1>
    <div>Please enter your UIN</div>
    </>
  )
}

export default user