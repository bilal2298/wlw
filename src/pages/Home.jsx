import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/card/Card'

const Home = () => {
  const [isSliced, setIsSliced] = useState(true);// for hide and show para

  const originalText ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur consectetur pariatur amet magni consequuntur officiis voluptatibus et animi quaerat, corporis veritatis eos sequi. Recusandae, ab sunt. Eius dolorem vero eos quas fugiat praesentium doloribus, officiis, odit, earum maiores voluptatem? Vitae, quos. Eius labore commodi a deserunt quibusdam omnis suscipit esse similique magnam, assumenda possimus natus illum aliquid magni reprehenderit numquam tenetur dolorem! Id sint sequi similique, optio non facilis a quod ratione animi vitae consequatur aliquam possimus iste dolorem ab beatae hic modi, excepturi minus. Illum eum maiores modi ad obcaecati? Cupiditate repudiandae dolorem, minima et alias cum laboriosam harum?"

  const sliceText =originalText.slice(0,300)

  const loadMore = ()=>{
 setIsSliced(!isSliced)
  }

  var blogs = [


    {
      image: "https://picsum.photos/id/237/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 20, 2023",
      category: "Technology",
      author: "Haris"
    },
    {
      image: "https://picsum.photos/id/238/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 23, 2023",
      category: "Health",
      author: "Asad"
    },
    {
      image: "https://picsum.photos/id/239/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    },
    {
      image: "https://picsum.photos/id/233/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    },
    {
      image: "https://picsum.photos/id/231/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    },
    {
      image: "https://picsum.photos/id/230/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    },
    {
      image: "https://picsum.photos/id/234/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    },
    {
      image: "https://picsum.photos/id/249/1200/800",
      title: "Construction",
      description: 'Ball & roller bearings, bearing units, track rollers, housing and accessories possibly a third row of text.',
      date: "August 24, 2023",
      category: "Nature",
      author: "Bilal"
    }
  ]
  return (
    <>
      <Layout>
        <div className='flex flex-col gap-10'>
          <div className=' bg-slate-900 w-full'>
            <img className='w-full' src="./assets/images/bg.png" alt="" />
          </div>

          <div className='max-w-screen-2xl m-auto p-5 flex flex-col gap-2'>
            <span className='font-bold text-4xl'>Home</span>
            <p className={` text-base `}>{isSliced ? sliceText: originalText}</p>
           <div>
           <button onClick={()=>loadMore()} className={`text-[#4FD1C5] ${isSliced ? 'shadow-2xl': 'shadow-none'} text-base font-medium`}>{isSliced? 'Show more': "Show less"}</button>
           </div>
          </div>

          <div className='flex flex-wrap m-6 gap-4 justify-center'>
            {blogs.map((data) => {
              return (<Card data={data} />)
            })}

          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
