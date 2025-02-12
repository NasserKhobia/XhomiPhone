import React from 'react'

const Section = (props) => {
  return (
    <div>
      {/* هون ل السماعات */}
      <div className='' id={props.id}>
            <div className='text-3xl text-end pt-5 font-bold' id='#'>
              <h1>{props.nameType}</h1>
            </div>
            <div className='mt-6 pt-7 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            { props.products.map((product) => product.type === props.type ? 
            <div key={product.id} className="group relative hover:border-orange-200 hover:border-solid border-2 rounded-md">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75   lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between px-10">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>:"")}
            </div>
        </div>
    </div>
  )
}

export default Section
