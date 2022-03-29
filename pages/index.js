import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-full w-screen bg-slate-800 justify-center'>
      <div className='sm:container sm:mx-auto justify-center '>
         <div className=' grid md:grid-cols-4 justify-center items-center gap-4'>
             <div className=' md:col-span-1 relative inline-block mt-20 bg-slate-700 h-auto rounded-lg gap-4 shadow-2xl shadow-slate-900 '>
                <div className='grid grid-rows-8'>
                    <div className='grid grid-col justify-center items-center mt-10 hover:animate-ping'>
                             <img className='rounded-3xl'
                              src="/me.jpg"
                              alt='mountain'
                              width="250px"
                              height="250px"
                              />
                     </div>
                              <h1 className='text-center font-mono text-white text-3xl m-5'> Bayarsuren Dev</h1>
                     <div className=' rounded-3xl bg-slate-800 text-white m-2 mx-20 px-10 grid grid-col justify-center items-center hover:bg-slate-500'>
                              <button className='m-3'>Fullstack</button>
                     </div>
                     <div className='grid md:grid-col justify-center items-center m-2'>
                       <div className='relative inline-block'>
                         <Link href="/https://www.facebook.com/" passHref>
                             <img alt='mountain' className='inline-block cursor-pointer hover:animate-bounce' src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"/>
                             </Link>
                             <img alt='mountain' className='inline-block cursor-pointer hover:animate-bounce' src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"/>
                             <img alt='mountain' className='inline-block cursor-pointer hover:animate-bounce' src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/>
                       </div>
                  </div>
              </div>
              <div className=' grid md:grid-col justify-start items-center m-2'>
                  <div className='relative inline-block m-2'>
                      <img alt='mountain' className='ml-5 inline-block cursor-pointer hover:animate-bounce' src="/calendar.png"/>
                      <h1 className='mx-4 inline-block text-gray-300 text-xl'>March 10, 2001</h1>
                  </div>
                  <div className='relative inline-block m-2'>
                      <img alt='mountain' className='ml-4 inline-block cursor-pointer hover:animate-bounce' src="/google-maps.png"/> 
                      <h1 className='mx-4 inline-block text-gray-300 text-xl'>Mongolia, Ulaanbaatar</h1>
                  </div>
                  <div className='relative inline-block m-2'>
                      <img alt='mountain' className='ml-4 inline-block cursor-pointer hover:animate-bounce' src="/email.png"/>
                      <h1 className='mx-4 inline-block text-gray-300 text-xl'>bayarsuren0310@gmail.com</h1>
                  </div>
                  <div className='relative inline-block m-2'>
                      <img alt='mountain' className='ml-4 inline-block cursor-pointer hover:animate-bounce' src="/telephone.png"/>
                      <h1 className='mx-4 inline-block text-gray-300 text-xl'>80666605</h1>
                  </div>
                  <div className='relative inline-block m-2'>
                      <img alt='mountain' className='ml-4 inline-block cursor-pointer hover:animate-bounce' src="/github.png"/> 
                      <h1 className='mx-4 inline-block text-gray-300 text-xl'>Bayraa_Appren</h1>
                  </div>
              </div>
              <div className='grid md:grid-col justify-center items-center m-2'>
                <button className='border-2 border-white px-20 py-3 m-5 relative inline-block text-white text-l rounded-2xl bg-blue-600 shadow-lg hover:animate-pulse shadow-blue-300'><img alt='jjjj' className='inline-block mr-2' src="https://img.icons8.com/material-rounded/24/ffffff/download--v1.png"/>Download CV</button>
              </div>
            </div>
          

        <div className=' md:col-span-3 relative inline-block mt-20 bg-slate-700 rounded-lg mb-10'>
             <div className='grid grid-rows-1'>
               <div className='grid grid-col justify-end'>
                  <div className='text-slate-300 font-mono p-5 text-2xl cursor-pointer border-2 border-white rounded-3xl bg-blue-600 shadow-lg shadow-blue-700'>
                     <h1 className='inline-block mx-8 hover:text-white'>About</h1>
                     <Link href="/About" passHref>
                     <h1 className='inline-block mx-8 hover:text-white'>Resume</h1>
                     </Link>
                     <h1 className='inline-block mx-8 hover:text-white'>Blog</h1>
                     <h1 className='inline-block mx-8 hover:text-white'>Haha</h1>
                     <h1 className='inline-block mx-8 hover:text-white'>Hehe</h1>
                  </div>
               </div>
               <div className='grid grid-col justify-start'>
                 <div  className='mx-6 p-4 text-xl font-mono text-white'>
                    <h1>About Me</h1>
                 </div>
                 <div className='mx-8 p-4 text-slate-300 text-l font-mono'>
                    <p>Намайг Баярсүрэн гэдэг би 21 настай.
                       Би 2008 онд ЕБС-102-р сургуульд 1р ангид элсэж ороод 2019 онд төгссөн билээ.
                        Төгсөөд МОНГОЛ УЛСЫН ИХ СУРГУУЛИЙН Мэдээлэл технологийн ангид суралцаж байна.
                         <p className='mt-6'>
                        10 жилдээ голдуу спортоор хичээллэх сонирхолтой өөрийн авьяас чадварыг байнга ирэлхийлэдэг байсан.</p>
                        </p>
                 </div>
                 <div  className='mx-6 p-4 text-xl font-mono text-white'>
                    <h1>Whats I am doing</h1>
                 </div>

                 <div className='grid grid-col justify-center items-center '>
                  <div className='relative inline-block'>
                    <div className=' inline-block'>
                      <div className='bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer w-96'>
                         <div className='inline-block mr-5'>
                           <img alt='mountain' className='' src='/television.png'/>
                         </div>
                         <div className='inline-block items-start'>
                           <h1 className='text-gray-200 font-mono text-lg'>Web Design</h1>
                           <h1 className='text-gray-400 font-mono text-l '>Vue js vuetify</h1>
                           <h1 className='text-gray-400 font-mono text-l'>React Next js</h1>
                         </div>
                      </div>
                    </div>

                    <div className=' inline-block'>
                      <div className='bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer  w-96'>
                         <div className='inline-block mr-5'>
                           <img alt='mountain' className='' src='/smartphone.png'/>
                         </div>
                         <div className='inline-block items-start'>
                           <h1 className='text-gray-200 font-mono text-lg'>Mobile App</h1>
                           <h1 className='text-gray-400 font-mono text-l '>React native</h1>
                           <h1 className='text-gray-400 font-mono text-l'>Flutter</h1>
                         </div>
                      </div>
                    </div>
                  </div>
                 </div>

                 {/* <div className='grid grid-col justify-center items-center '>
                  <div className='relative inline-block'>
                    <div className=' inline-block'>
                      <div className='bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer  w-96'>
                         <div className='inline-block mr-5'>
                           <img className='animate-bounce' src='/sports.png'/>
                         </div>
                         <div className='inline-block items-start'>
                           <h1 className='text-gray-200 font-mono text-lg'>Sport</h1>
                           <h1 className='text-gray-400 font-mono text-l '>Basketball </h1>
                           <h1 className='text-gray-400 font-mono text-l'>Judo wrestling</h1>
                         </div>
                      </div>
                    </div>

                    <div className=' inline-block'>
                      <div className='bg-slate-800 p-10 m-5 rounded-lg hover:animate-bounce cursor-pointer  w-96'>
                         <div className='inline-block mr-5'>
                           <img className='' src='/camera.png'/>
                         </div>
                         <div className='inline-block items-start'>
                           <h1 className='text-gray-200 font-mono text-lg'>Picture</h1>
                           <h1 className='text-gray-400 font-mono text-l '>Simple</h1>
                           <h1 className='text-gray-400 font-mono text-l'>nature picture</h1>
                         </div>
                      </div>
                    </div>
                  </div>
                 </div> */}
               </div>
               <div className='grid grid-col justify-start'>
                 <div  className='mx-6 p-4 text-xl font-mono text-white'>
                    <h1>Education</h1>
                 </div>
               </div>
               <div className='grid grid-col justify-start pb-4'>
                      <h1 className='text-center text-slate-300 ml-8'>- Completed secondary education in 2019 in 127 schools Ulaanbaatar, Mongolia</h1>
                      <h1 className='text-center text-slate-300 ml-10'>- Graduated from Apprentice.mn program training in 2021 Ulaanbaatar, Mongolia</h1>
               </div>
               <div className='grid grid-col justify-start'>
                 <div  className='mx-6 p-4 text-xl font-mono text-white'>
                    <h1>Experience</h1>
                 </div>
               </div>
               <div className='grid grid-col justify-start mx-10 pb-4 cursor-pointer'>
                      <h1 className=' text-slate-300'>* Web developer 04/2021 to 03/2022</h1> 
                      <h1 className=' text-slate-300 ml-10'>+ sslingo.mn English Learning Center website development </h1>
                      <h1 className=' text-slate-300 ml-10'>+ ariuguncargo.mn distribution site</h1>
                      <h1 className=' text-slate-300 ml-10'>+ eejii.org Junior development</h1> 
               </div>
             </div>
        </div>
      </div>
    </div>
</div>
  )
}
