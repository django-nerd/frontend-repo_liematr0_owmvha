export default function Logos(){
  const logos = ['OpenAI','Anthropic','AWS','Azure','GCP','Pinecone','Snowflake']
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wider text-gray-500">Preferred by teams building with</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {logos.map((l)=> (
            <div key={l} className="h-10 rounded-md bg-white border border-black/5 shadow-sm flex items-center justify-center text-gray-700 text-sm">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}