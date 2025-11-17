import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const logos = ['OpenAI','Anthropic','AWS','Azure','GCP','Pinecone','Snowflake','Databricks','LangChain','HuggingFace']

export default function Marquee(){
  const controls = useAnimationControls()
  useEffect(() => {
    controls.start({ x: ['0%', '-50%'] , transition: { repeat: Infinity, ease: 'linear', duration: 20 }})
  }, [controls])

  return (
    <section className="py-10 border-y border-black/5 bg-white/40 backdrop-blur">
      <div className="overflow-hidden">
        <motion.div animate={controls} className="flex gap-6 whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="h-10 min-w-[10rem] px-4 rounded-md bg-white border border-black/5 shadow-sm flex items-center justify-center text-gray-700 text-sm">
              {l}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
