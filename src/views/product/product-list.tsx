import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

type Props = {}

const ProductListUI = (props: Props) => {
  return (
    <div className=''>
        <h1>Products</h1>
        <div className='flex justify-end'>
            <Button>
                <Plus/> Add Product
            </Button>
        </div>
    </div>
  )
}

export default ProductListUI