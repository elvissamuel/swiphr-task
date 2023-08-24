import React from 'react'
import { Fragment } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd'
import { getArrowOffset } from 'antd/es/style/placementArrow'

const NewProduct = () => {
  return (
    <>
      <div>
        <Button type='' className=''>
            {/* <ArrowLeftOutlined size={50} /> */}
            Back
        </Button>
      </div>
    </>
  )
}

export default NewProduct
