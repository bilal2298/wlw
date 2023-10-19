import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/card/Card'

const Home = () => {
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
        <div>
          <div className=' bg-slate-900 w-full'>
            <img className='w-full' src="./assets/images/bg.png" alt="" />
          </div>

         <div className='flex flex-wrap m-6 gap-5 justify-center'>
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
