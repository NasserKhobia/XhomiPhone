
import Section from '../components/Section'
import products from '../data';
import '../page/Style.css'


export default function Product() {
  return (
    <div className="bg-white" >
      <div className='relative pt-20  gap-3 flex flex-col'>
        <h1 id='service' className="pb-7 text-6xl font-bold">الخدمات</h1>
        <div className='flex justify-evenly lg:flex-row  sm:flex-col sm:items-center max-sm:flex-col max-sm:items-center md:flex-col md:items-center'>
          <div >
            <div className='bgR w-96 h-96 rounded-md max-sm:w-80'>
            </div>
          </div>
          <div className='p-2 text-center text-2xl font-sans font-bold text-white lg:items-end items-center flex flex-col justify-center '>
            <div className='flex justify-center items-center p-5 m-2 h-16 rounded-full bg-amber-500'>
              تنزيل برامج _ اكسسوارات _ تسديد فواتير انترنت
            </div>
            <div className='flex justify-center items-center p-5 m-2 bg-amber-500 h-16 rounded-full'>
              صيانة فورية _ تحويل رصيد _ تسديد فواتير
            </div>
            <div className='flex justify-center items-center p-5 m-2 bg-amber-500 h-16 rounded-full'>
            مبيع وشراء اجهزة _ تفعيل خطوط 
            </div>
          </div>
        <div>
        </div>
        </div>
        <div className='flex justify-evenly lg:flex-row  sm:flex-col sm:items-center max-sm:flex-col max-sm:items-center md:flex-col md:items-center'>
          <div >
            <div className='bgL w-96 h-96 rounded-md max-sm:w-80'>
            </div>
          </div>
          <div className='p-4 text-center text-2xl font-sans font-bold text-white lg:items-end items-center flex flex-col'>
            <div className='flex justify-center items-center p-5 m-2 h-16 rounded-full bg-amber-500'>
              صيانة فورية  _  تنزيل برامج  _  مبيع وشراء اجهزة
            </div>
            <div className='flex justify-center items-center p-5 m-2 h-16 rounded-full bg-amber-500'>
              تنزيل وتحديث انظمة
            </div>
          </div>
        <div>
        </div>
        </div>
        <div className='flex justify-evenly lg:flex-row  sm:flex-col sm:items-center max-sm:flex-col max-sm:items-center md:flex-col md:items-center'>
          <div >
            <div className='bgC w-96 h-96 rounded-md max-sm:w-80'>
            </div>
          </div>
          <div className='p-6 text-center text-2xl font-sans font-bold text-white lg:items-end items-center flex flex-col justify-center '>
            <div className='flex justify-center items-center p-5 m-2 h-16 rounded-full bg-amber-500'>
            تركيب وصيانة انظمة مراقبة سلكية و لاسلكية 
            </div>
            <div className='flex justify-center items-center p-5 m-2 bg-amber-500 h-16 rounded-full'>
              بيع وشراء كميراتء
            </div>
          </div>
        <div>
        </div>
        </div>
      </div>
      <div className="mx-auto pt-20 max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900" id="product">
          <span className='text-6xl'>
            المنتجات
          </span>
          <ul className="flex flex-row-reverse justify-evenly gap-10 mt-3 mx-auto lg:mt-4 w-10/12 md:mt-11  text-amber-400 cursor-pointer">
            <li>
              <a href='#airphone'>سماعات</a>
            </li>
            <li>
              <a href='#USB'>وصلات</a>
            </li>
            <li>
              <a href='#Charger'>شواحن</a>
            </li>
            <li>
              <a href='#Speaker'>بفلات</a>
            </li>
            <li>
              <a href='#Cristal'>لزقات</a>
            </li>
            <li>
              <a href='#router'>راوترات</a>
            </li>
            <li>
              <a href='#cover'>كفرات حماية </a>
            </li>
            <li>
              <a href='#Stand'>ستاند </a>
            </li>
            <li>
              <a href='#other'>اخرى </a>
            </li>
          </ul>
        </h2>
        <Section nameType="سماعات" id="airphone" products={products} type={2}/>
        <Section nameType="وصلات" id="USB" products={products} type={1}/>
        <Section nameType="شواحن" id="Charger" products={products} type={4}/>
        <Section nameType="بفلات" id="Speaker" products={products} type={6}/>
        <Section nameType="لزقات" id="Cristal" products={products} type={7}/>
        <Section nameType="راوترات" id="router" products={products} type={5}/>
        <Section nameType="كفرات حماية" id="cover" products={products} type={8}/>
        <Section nameType="ستاند" id="Stand" products={products} type={3}/>
        <Section nameType="اخرى" id="other" products={products} type={10}/>
      </div>
    </div>
  )
}
