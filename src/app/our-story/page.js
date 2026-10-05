import MissionVision from '@/components/our-story/MissionVision'
import Story from '@/components/our-story/Story'
import Journey from '@/components/our-story/Journey'
import Hero from '@/components/our-story/Hero'
import React from 'react'
import BookCall from '@/components/our-story/BookCall'

export default function page() {
  return (
    <div>
        <Hero/>
        <Journey/>
        <Story/>
        <MissionVision/>
        <BookCall/>
    </div>
  )
}
