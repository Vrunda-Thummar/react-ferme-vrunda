import React from 'react'
import Navbar from '../componentes/Navbar'
import img1 from '../assets1/asset 2.jpeg'
import img2 from '../assets1/asset 4.webp'
import img3 from '../assets1/asset 19.svg'
import img4 from '../assets1/asset 20.svg'
import img5 from '../assets1/asset 21.svg'
import img6 from '../assets1/img3.svg'
import img7 from '../assets1/img1.jpg'
import img8 from '../assets1/asset 3.webp'
import img9 from '../assets1/asset 6.webp'
import img10 from '../assets1/img5.jpg'
import img11 from '../assets1/img2.jpg'
import img12 from '../assets1/asset 5.webp'
import img13 from '../assets1/img4.jpg'
import img14 from '../assets1/asset 7.jpg'
import img15 from '../assets1/asset 8.jpg'
import img16 from '../assets1/asset 9.jpg'
import img17 from '../assets1/asset 22.webp'
import img18 from '../assets1/img9.svg'
import img19 from '../assets1/img10.png'
import img20 from '../assets1/asset 11.jpg'
import img21 from '../assets1/asset 13.jpg'
import img22 from '../assets1/img11.svg'
import img23 from '../assets1/asset 12.jpg'
import img24 from '../assets1/asset 10.jpg'
import Footer from '../componentes/Footer'


const Home = () => {
  return (

    <div>
      <Navbar />
      <div className='pl-20'>
        <div className='flex relative'>
          <div>
            <p className='absolute ml-36 text-teal-900 mt-20 text-9xl text-left font-serif'>Organic<br></br>Food</p>
            <p className='absolute text-left text-teal-900 ml-36 mt-96'>Local, hyper-fresh, zero-waste<br></br> produce grown in TriBeCa and<br></br> Brooklyn</p>
          </div>
          <div className=''>
            <img className='w-7/12 ml-96 h-full pl-3' src={img1} alt="" />
          </div>
        </div>
        <div>
          <button className='bg-teal-900 '>SHOP ORGANIC</button>
        </div>
      </div>
      <div className='p-20 ml-10'>
        <div className='flex'>
          <div className='w-80 h-44 bg-white p-5'>
            <div>
              {/* <img className='' src={img6} alt="" /> */}
            </div>
            <div className='flex'>
              <p className='ml-5 mt-5 text-teal-900 font-serif'>01</p>
              <img className='size-8 ml-52' src={img3} alt="" />
            </div>
            <h1 className='ml-5 mt-5 text-teal-900 font-serif text-lg'>Choose Organic Product</h1>
            <p className='text-xs text-teal-900 ml-5 mt-2'>Browse our organic broducts and selection <br></br>boxes</p>
          </div>
          <div className='pl-10'>
            <div className='w-80 text-2xl h-44 bg-white p-5'>
              <div className='flex'>
                <p className='ml-5 mt-5 text-teal-900 font-serif'>02</p>
                <img className='size-8 ml-52' src={img4} alt="" />
              </div>
              <h1 className='ml-5 mt-5 text-teal-900 font-serif text-lg'>Select a Delivery Date</h1>
              <p className='text-xs text-teal-900 ml-5 mt-2'>Tuesday, Wednesday, Thursday, Friday or <br></br>Saturday</p>
            </div>
          </div>
          <div className='pl-10'>
            <div className='w-80 text-2xl h-44 bg-white p-5'>
              <div className='flex'>
                <p className='ml-5 mt-5 text-teal-900 font-serif'>03</p>
                <img className='size-8 ml-52' src={img5} alt="" />
              </div>
              <h1 className='ml-5 mt-5 text-teal-900 font-serif text-lg'>Free Local Delivery</h1>
              <p className='text-xs text-teal-900 ml-5 mt-2'>We deliver free all over the New York</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-teal-900 flex justify-center font-serif mt-5 text-4xl'>Fresh & Clean</h1>
      </div>
      <div>
      </div>
      <div className='flex justify-center mt-20'>
        <p className='text-teal-900 ml-10'>NEW IN</p>
        <p className='text-teal-900 ml-10'>BUTCHER</p>
        <p className='text-teal-900 ml-10'>DAIRY</p>
        <p className='text-teal-900 ml-10'>FRUITS & VEG</p>
        <p className='text-teal-900 ml-10'>BAKERY</p>
      </div>
      <div>
        <div>
          <div className='flex mt-20 justify-center ml-4'>
            <div className='relative'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56' src={img2} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <img className='size-56' src={img7} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56' src={img8} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <img className='size-56' src={img9} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
          </div>
          <div className='flex'>
            <div className='ml-40 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Beef Shin 500g</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$9.99 – $35.00</p>
            </div>
            <div className='ml-20 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Ginger Snaps 160g</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$4.99</p>
            </div>
            <div className='ml-16 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Semi-Skimmed Milk<br></br> 1l</p>
              <div className='flex mt-2'>
                <p className='text-teal-900 text-sm font-semibold line-through' style={{ fontFamily: 'Montserrat sans-serif', color: '#8c9680' }}>$2.49</p>
                <p className='text-teal-900 text-sm font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$1.49</p>
              </div>
            </div>
            <div className='ml-12 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Blueberry & Acai<br></br> Kefir 250ml</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$3.99</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex mt-20 justify-center ml-4'>
            <div className='relative'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56' src={img10} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <img className='size-56' src={img11} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56' src={img12} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <img className='size-56' src={img13} alt="" />
              {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
          </div>
          <div className='flex'>
            <div className='ml-40 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Free Range Chicken<br></br> Fillets 400g</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$13.49 – $50.00</p>
            </div>
            <div className='ml-12 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Avocados x 2</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$4.99</p>
            </div>
            <div className='ml-24 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Mini Penyston</p>
              <div className='flex mt-2'>
                <p className='text-teal-900 text-sm font-semibold line-through' style={{ fontFamily: 'Montserrat sans-serif', color: '#8c9680' }}>$14.00</p>
                <p className='text-teal-900 text-sm ml-1 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$13.22</p>
              </div>
            </div>
            <div className='ml-24 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Brussels Sprouts</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$2.99</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='mt-40'>
            <h1 className='text-teal-900 flex justify-center text-5xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Our Most Popular Bundles</h1>
            <p className='text-teal-900 mt-5 font-semibold flex justify-center' style={{ fontFamily: 'Cormorant sans-serif' }}>Fresh organic produce bundles delivered to your door</p>
          </div>
          <div className='flex justify-center mt-10'>
            <div>
              <div className='relative ml-6'>
                <div className='absolute ml-72 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                  <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
                </div>
                <img className='size-80' src={img14} alt="" />
                {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
              </div>
            </div>
            <div>
              <div className='relative ml-6'>
                <div className='absolute ml-72 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                  <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
                </div>
                <img className='size-80' src={img15} alt="" />
                {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
              </div>
            </div>
            <div>
              <div className='relative ml-6'>
                <div className='absolute ml-72 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                  <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
                </div>
                <img className='size-80' src={img16} alt="" />
                {/* <div className='absolute bg-teal-900 w-60 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='ml-36 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Cheese Box</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$39.99</p>
            </div>
            <div className='ml-64 pl-1 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Dairy Box</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$18.00</p>
            </div>
            <div className='ml-72 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Breakfast Box</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$80.00</p>
            </div>
          </div>
        </div>
        <div className='pl-40'>
          <div className='mt-32'>
            <h1 className='text-teal-900 text-9xl' style={{ fontFamily: 'Cormorant sans-serif' }}>The</h1>
            <div className='flex'>
              <h1 className='text-teal-900 ml-20 mt-10 text-9xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Farm</h1>
              <p className='text-teal-900 ml-60'>On our organic farms in the Cotswolds and<br></br> Staffordshire, we work the land responsibly,<br></br> mindfully, with intelligence and with a<br></br> conscience. We hold ourselves accountable<br></br> for our ethical and environmental standards<br></br> and welcome the opportunity to show you<br></br> what we do.</p>
            </div>
            <p className='text-teal-900 flex justify-end mr-96 pr-14 mt-10 text-xs font-semibold'>LEARN MORE</p>
          </div>
        </div>
      </div>
      <div>
        <div className='px-40'>
          <div className='relative flex justify-center mt-20'>
            <div className='absolute mt-52 rounded-full size-20 bg-teal-900'>
              <img className='size-10 ml-5 mt-5' src="https://img.icons8.com/?size=100&id=398&format=png&color=FFFFFF" alt="" />
            </div>
          </div>
          <img src={img17} alt="" />
        </div>
        <div className='px-40 bg-white'>
          <div style={{ backgroundColor: '#f4714b' }}>
            <div className='flex'>
              <img src={img18} alt="" />
              <img src={img18} alt="" />
            </div>
            <p className='text-white flex justify-center font-semibold text-2xl mt-16' style={{ fontFamily: 'Cormorant sans-serif' }}>We Care for Nature</p>
            <img className='mt-3' src={img19} alt="" />
            <div className='flex mt-3'>
              <h1 className='text-white text-lg ml-12' style={{ fontFamily: 'Cormorant sans-serif' }}>Rare & pesticide - Free</h1>
              <h1 className='text-white ml-40 text-lg' style={{ fontFamily: 'Cormorant sans-serif' }}>Clean energy</h1>
              <h1 className='text-white ml-56 text-lg' style={{ fontFamily: 'Cormorant sans-serif' }}>Package lightly</h1>
            </div>
            <div className='flex mt-3'>
              <p className='text-white ml-12'>We treat our plants with<br></br> copper formulations, which<br></br>stimulate growth and act as<br></br> deterrents against fungus.</p>
              <p className='text-white ml-32'>Wind, solar, and biomass<br></br> energy can be harvested<br></br>forever, providing farmers<br></br> with a long-term source of<br></br> income.</p>
              <p className='text-white ml-32 pl-2'>We use packaging with<br></br> biodegradable packaging or<br></br> boxes for pre-use.</p>
            </div>
            <div className='flex mt-16'>
              <img src={img18} alt="" />
              <img src={img18} alt="" />
            </div>
          </div>
          <div>
            <div className='flex'>
              <img className='w-96 mt-60' src={img20} alt="" />
              <div className='mt-32 pl-20'>
                <h1 className='text-teal-900 text-5xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Visit with<br></br> Kids</h1>
                <p className='text-teal-900 mt-5'>The Ferme is only open to the<br></br> general public on Family Days.<br></br> Family Days for 2021 are $8 per<br></br> person and will be held June 26<br></br> (Mr. D’s Magic & Illusion Show <br></br>12:30), July 24, August 21,<br></br> September 18, October 16 <br></br>(Incredible Bats), and November <br></br>27.</p>
                <p className='text-teal-900 mt-10 font-semibold text-xs'>LEARN MORE</p>
              </div>
              {/* <div className='mt-96'>
                <img className='w-52 flex justify-end' src={img21} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-80 px-40'>
          <img className='size-28' src={img22} alt="" />
          <div className='flex'>
            <h1 className='text-teal-900 text-5xl mt-20' style={{ fontFamily: 'Cormorant sans-serif' }}>Join Our<br></br> CSA</h1>
            <p className='text-teal-900 mt-24 ml-72 text-sm'>Ferme’s produce is available through our Community Supported<br></br> Agriculture (CSA) subscription program, in which members of the<br></br> public support the farm by committing to purchase shares of its<br></br> produce for a season.</p>
          </div>
          <p className='text-teal-900 flex justify-center ml-14 mt-10 font-semibold text-xs'>LEARN MORE</p>
        </div>
      </div>
      <div>
        <div className='flex mt-32 px-40'>
          <div className='w-80 h-96' style={{ backgroundColor: '#f4714b' }}>
            <img src={img18} alt="" />
            <div className='p-10'>
              <h1 className='text-white text-5xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic<br></br> Recipes</h1>
              <p className='text-white mt-16'>Feed your family healthy and <br></br>organic meals with The Ferme<br></br> favorite recipes.</p>
              <p className='text-white text-xs mt-10'>LEARN MORE</p>
            </div>
            <img src={img18} alt="" />
          </div>
          <div className='ml-5'>
            <img className='w-80 h-96 hover:' src={img23} alt="" />
            <p className='mt-3 text-teal-900 text-xs'>SALADS AND SIDES, VEGAN</p>
            <p className='text-teal-900 mt-3 text-xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Vegan Potato Salad</p>
          </div>
          <div className='ml-5'>
            <img className='w-80 h-96' src={img24} alt="" />
            <p className='mt-3 text-teal-900 text-xs'>BREAD & BAKING, MAIN DISHES</p>
            <p className='text-teal-900 mt-3 text-xl' style={{ fontFamily: 'Cormorant sans-serif' }}>Butterflied Leg of Lamb</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
