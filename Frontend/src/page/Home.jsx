
  import { useState } from 'react'
  import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
  import '../page/Style.css'
  const navigation = [
    { name: 'منتجات', href: '#product' },
    { name: 'الخدمات', href: '#service' },
  ]
  
  export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <div className="global max-sm:h-96">
        <header className="absolute inset-x-0 top-0">
          <nav className=" p-6 lg:px-8">
            <div className='flex items-center btn justify-center lg:justify-end lg:gap-8 gap-3 sm:w-full '>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className=" border border-amber-700 font-semibold text-2xl leading-6 text-amber-700 px-4 py-2 rounded-md bg-white">
                  {item.name}
                </a>
              ))}
            </div>
            
          </nav>
          
        </header>
      </div>
    )
  }
  

// import React from 'react'

// const Home = () => {
//     return (
//         // <div className='flex flex-col justify-between h-full'>
//         //     <div>

//         //     </div>
//         //     <div className='flex justify-center items-center gap-3 w-full h-full '>
//         //         <div className='border border-yellow-300 p-5 py-3 rounded-md text-yellow-300 hover:bg-yellow-300 hover:text-white'>
//         //             <button> المنتجات</button>
//         //         </div>
//         //         <div className='border border-yellow-300 p-5 py-3 rounded-md text-yellow-300 hover:bg-yellow-300 hover:text-white'>
//         //             <button> تواصل</button>
//         //         </div>
//         //     </div>
//         //     <div className=''>
//         //         <ul>
//         //             <li>whatsapp</li>
//         //             <li>facebook</li>
//         //         </ul>
//         //     </div>
//         // </div>
//         <div className='p-0 m-0 h-screen flex flex-col justify-between'>
//             <nav></nav>
//             <header className='flex flex-col justify-evenly'>
//                 <h1 className='text-6xl'>شاومي فوون</h1>
//                 <div className='flex justify-center items-center gap-3 h-96'>
//                 <div className='border border-yellow-300 p-5 py-3 rounded-md text-yellow-300 hover:bg-yellow-300 hover:text-white'>
//                     <button> المنتجات</button>
//                 </div>
//                 <div className='border border-yellow-300 p-5 py-3 rounded-md text-yellow-300 hover:bg-yellow-300 hover:text-white'>
//                     <button> تواصل</button>
//                 </div>
//                 </div>
//             </header>
//             <footer className='bg-black h-32'>
                
//             </footer>
//         </div>
//     )
// }

// export default Home