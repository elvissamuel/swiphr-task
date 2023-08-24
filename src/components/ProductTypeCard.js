import React from 'react'

const ProductTypeCard = ({card}) => {
  return (
    <div>
      <div className={`border shadow-md h-[113px] p-3 bg-[#FFFFFF] text-slate-800 rounded-md cursor-pointer ${card.current ? 'border-green-400' : ''}` }>
        <div className='flex gap-2'>
            <img src={card.icon} alt="" width={30} />
            <p className={`font-bold ${card.current ? 'text-green-400' : ''}`}>{card.title}</p>
        </div>
        <p className='text-[15px]'>{card.body}</p>

      </div>
    </div>
  )
}

export default ProductTypeCard
