import { Hero } from '@/components/hero'
import { HowToUse } from '@/components/how-to-use'


export default async function Home() {

  return (
    <main className='max-w-[1000px] mx-auto px-4'>
      <Hero/>
      <HowToUse/>
    </main>
  )
}
