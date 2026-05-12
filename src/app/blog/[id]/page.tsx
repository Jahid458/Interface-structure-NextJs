import React from 'react'

export default async function Blog({params}: {Params:Promise<{slug: string}>} ) {

    const {id} = await params
  return (
    <div>
        <h1>we got dynamic id: {id}</h1>
    </div>
  )
}
