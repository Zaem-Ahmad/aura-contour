
export default function TimelineSection() {
  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Aura Contour was established with a vision to bring luxury beauty to our community",
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Opened our second location and expanded our service offerings",
    },
    {
      year: "2019",
      title: "Recognition",
      description: "Awarded Best Beauty Salon in the region for three consecutive years",
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced cutting-edge laser and skincare technology to our services",
    },
  ]

  return (
    <section className="py-20 px-4 bg-primary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-foreground/70">Milestones in our growth and success</p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                  {idx + 1}
                </div>
                {idx < timeline.length - 1 && <div className="w-1 h-20 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <p className="text-accent font-semibold text-lg">{item.year}</p>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}