import React from 'react'

const TestPage = async ({params}: {Params:Promise<{slug: string}>} ) => {
    const id = await params

    console.log(id)

  return (
    <div>
            catch All....
    </div>
  )
}

export default TestPage