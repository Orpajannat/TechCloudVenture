import MissionVision from '@/components/our-story/MissionVision'
import Story from '@/components/our-story/Story'
import Journey from '@/components/our-story/Journey'
import Hero from '@/components/our-story/Hero'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero/>
        <Journey/>
        <Story/>
        <MissionVision/>
    </div>
  )
}
