import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';

export default function Guruji() {
  const schedule = [
    { activity: "Morning Aarti", time: "6:00 AM" },
    { activity: "Meditation Session", time: "7:00 AM" },
    { activity: "Spiritual Discourse", time: "8:00 AM" },
    { activity: "Personal Meetings", time: "10:00 AM" },
    { activity: "Evening Aarti", time: "6:00 PM" },
  ];

  const quotes = [
    {
      text: "Service to humanity is service to God. When we feed the hungry and help the needy, we are performing the highest form of worship.",
      icon: "fas fa-quote-left text-deep-saffron",
    },
    {
      text: "True devotion is not just in rituals and prayers, but in how we treat our fellow beings with love and compassion.",
      icon: "fas fa-quote-left text-peacock-green",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Guruji - Balaji Mandir Charkop</title>
        <meta name="description" content="Discover the spiritual journey and teachings of Guruji at Balaji Mandir Charkop. Learn about his life, miracles, and service to the community." />
        <meta property="og:title" content="Our Guruji - Balaji Mandir Charkop" />
        <meta property="og:description" content="Discover the spiritual journey and teachings of Guruji at Balaji Mandir Charkop. Learn about his life, miracles, and service to the community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/guruji" />
        <meta property="og:image" content="https://tirupatibalajitemplecharkop.com/wp-content/uploads/2024/07/Bhajan-Yajamaan.webp" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Our Guruji</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Learn about the spiritual journey and teachings of our revered Guruji who has dedicated his life to serving the divine.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <img
                  src="/images/Bhajan-Yajamaan.webp"
                  alt="Spiritual guru in meditation pose"
                  className="w-full h-96 object-cover rounded-2xl shadow-spiritual"
                  loading="lazy"
                  width="400"
                  height="600"
                />

                <Card className="bg-white shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-deep-brown">Daily Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-deep-brown/70">{item.activity}</span>
                        <span className="text-deep-brown font-medium">{item.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <Card className="bg-white shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-2xl text-deep-brown">Spiritual Journey</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-deep-brown/80 leading-relaxed">
                    <p><strong>From Near Death to Divine Destiny: Gurunath’s Journey to Building a Balaji Temple in Mumbai</strong></p>

<p>Over a decade ago, Gurunath’s life changed forever on the busy streets of Goregaon, Mumbai. A speeding Tata Sumo rammed into him, leaving his body broken and bloodied. His intestines were exposed, bones crushed, and hope nearly lost. He lay abandoned on the road until a kind stranger rushed him to KEM Hospital.</p>

<p>Doctors at the hospital, hardened by years of trauma cases, took one look at him and shook their heads. His injuries were beyond survival. They expected him to pass at any moment.</p>

<p>But as Gurunath clung to his last breath, something extraordinary happened. A monk appeared at his bedside serene, white-haired, and glowing with calm. He gently touched Gurunath’s forehead and said, “With Lord Balaji’s grace, you will recover. Fear not.” Before leaving, the monk made him promise that if he survived, he must visit the Lord Balaji Temple in Tirupati.</p>

<p>Against all odds, Gurunath began to recover. Even doctors could not explain it. Though kept alive by heavy medication, he felt something greater was at work. As he slowly returned to consciousness, he began having vivid dreams urging him to keep his promise.</p>

<p>When he finally visited Tirupati, the miracle continued. The same monk appeared once again.</p>

<p>This time, the monk asked Gurunath to make three wishes. Without hesitation, he wished to never go hungry, to be respected by all, and to travel the world. The monk agreed, but asked for something in return. Gurunath was to build a temple for Lord Balaji in Mumbai.</p>

<p>The request felt impossible. Gurunath had no savings, no land, and barely enough to survive. But the monk described the exact environment where the temple should be, down to the location and its surroundings, and assured him the divine would show the way.</p>

<p>Determined, Gurunath began visiting the Balaji temple at Marine Lines for guidance. He felt drawn to learn temple architecture, but the books he needed were far beyond his financial means.</p>

<p>Then came a small miracle with a big impact. While praying at the temple, he noticed a man beside him drop his wallet. Gurunath returned it immediately. The man turned out to be the head of the Crossword bookstore chain. On hearing Gurunath’s story, he offered him free access to any books in the store.</p>

<p>Empowered, Gurunath began studying architecture and resumed his search for land. After months of looking, he found a small plot in Charkop, Kandivli West that exactly matched the monk’s description. The cost was ₹35 lakh. Gurunath had just ₹5,000.</p>

<p>When he approached the landowner, the man was furious at the low offer. But then, as if something unseen touched him, the owner asked Gurunath to wait. Moments later, he returned and agreed to accept the ₹5,000 as a token amount. The rest could be paid gradually through donations.</p>

<p>It was the breakthrough Gurunath needed.</p>

<p>Word of his miraculous survival and temple mission began to spread. People from all walks of life stepped forward to support him. Donations flowed in. Businessmen, devotees, and strangers came together, moved by his faith and story.</p>

<p>Today, the Lord Balaji Temple in Charkop stands not just as a place of worship but as a symbol of resilience, grace, and unwavering devotion. It is a living miracle built not by wealth, but by will, and by a man who turned a near-death experience into a divine calling.</p>

<p>That is how Gurunath came to be known as <strong>Guruji</strong>. His life, once shattered and forgotten on a roadside, became one of purpose and service. True to his promise and guided by faith, he began feeding free meals to underprivileged children every day.</p>

<p>What started with survival became a lifelong mission of giving. Guruji didn’t just survive. He transformed. And through his temple and service, he continues to inspire thousands with the simple message that where faith leads, miracles follow.</p>

                  </CardContent>
                </Card>

                <div className="grid sm:grid-cols-2 gap-6">
                  {quotes.map((quote, index) => (
                    <Card key={index} className="bg-cream shadow-spiritual">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <i className={`${quote.icon} text-3xl mb-3`}></i>
                        </div>
                        <p className="text-deep-brown italic text-center">{quote.text}</p>
                        <p className="text-right text-deep-brown/70 text-sm mt-3">- Guruji</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
