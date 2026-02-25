"use client"

import { Instagram, ExternalLink } from "lucide-react"
import { useEffect, useRef } from "react"

// TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Add your Instagram post URLs here
  // Format: https://www.instagram.com/p/POST_ID/
  // You can get these by clicking on a post and copying the URL
  const instagramPostUrls: string[] = [
    "https://www.instagram.com/p/DVK5YkmCgYl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ]

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // If no post URLs provided, show a message with instructions
  if (instagramPostUrls.length === 0) {
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
              <Instagram className="w-6 h-6 text-accent" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Follow Our Journey
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              See real transformations and behind-the-scenes moments on Instagram
            </p>
            <a
              href="https://www.instagram.com/aura_contour/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>@aura_contour</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-card rounded-2xl p-12 border border-border/50 shadow-lg max-w-2xl mx-auto">
            <p className="text-foreground/70 mb-4">
              To display your Instagram posts, add your post URLs to the <code className="bg-primary px-2 py-1 rounded text-sm">instagramPostUrls</code> array in the component.
            </p>
            <p className="text-foreground/70 mb-6">
              Get post URLs by:
            </p>
            <ol className="list-decimal list-inside text-foreground/70 space-y-2 mb-8 text-left max-w-md mx-auto">
              <li>Open Instagram and navigate to your post</li>
              <li>Click the three dots (⋯) on the post</li>
              <li>Select "Copy link"</li>
              <li>Paste the URL into the array</li>
            </ol>
            <a
              href="https://www.instagram.com/aura_contour/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Instagram className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Visit Our Instagram</span>
              <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <Instagram className="w-6 h-6 text-accent" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Follow Our Journey
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            See real transformations and behind-the-scenes moments on Instagram
          </p>
          <a
            href="https://www.instagram.com/aura_contour/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>@aura_contour</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Instagram Embed Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {instagramPostUrls.map((postUrl, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "1px solid #e8e3d8",
                  borderRadius: "1rem",
                  margin: "0 auto",
                  maxWidth: "100%",
                  minWidth: "326px",
                  padding: 0,
                  width: "100%",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={postUrl}
                    style={{
                      background: "#FFFFFF",
                      lineHeight: 0,
                      padding: "0 0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "50%",
                          flexGrow: 0,
                          height: "40px",
                          marginRight: "14px",
                          width: "40px",
                        }}
                      ></div>
                      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: 0,
                            height: "14px",
                            marginBottom: "6px",
                            width: "100px",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: 0,
                            height: "14px",
                            width: "60px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div style={{ padding: "19% 0" }}></div>
                    <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}></div>
                    <div style={{ paddingTop: "8px" }}>
                      <div
                        style={{
                          color: "#3897f0",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 550,
                          lineHeight: "18px",
                        }}
                      >
                        View this post on Instagram
                      </div>
                    </div>
                    <div style={{ padding: "12.5% 0" }}></div>
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 animate-fade-in-up delay-600">
          <a
            href="https://www.instagram.com/aura_contour/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Instagram className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Follow Us on Instagram</span>
            <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

