import ProductListUI from '@/views/product/product-list'
import React from 'react'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4'>
      <ProductListUI/>
    </div>

  )
}

export default page