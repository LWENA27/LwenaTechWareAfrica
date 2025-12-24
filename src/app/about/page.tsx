import { Metadata } from 'next'
import { Building2, Users, Target, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lwena TechWareAfrica - World-class software solutions built in Africa for the global market.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#232F3E] to-[#1a242e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Lwena TechWareAfrica
            </h1>
            <p className="text-xl text-gray-300">
              We are a world-class software company built in Africa, delivering enterprise-grade solutions to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#FF9900] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#232F3E]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class, production-ready software solutions that empower businesses globally. 
                We combine African innovation with international standards to create products that solve real-world problems.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#FF9900] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#232F3E]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leading global software company that showcases Africa's technical excellence. 
                We aim to bridge the gap between African talent and international opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#EAEDED]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Building2 className="w-16 h-16 text-[#FF9900] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#232F3E] mb-4">Our Story</h2>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-6 text-gray-600 leading-relaxed">
              <p>
                Lwena TechWareAfrica was founded with a simple yet powerful vision: to prove that world-class 
                software can be built anywhere, including right here in Africa.
              </p>
              
              <p>
                We started by identifying real business challenges that needed elegant, scalable solutions. 
                Each of our products - from InventoryMaster to Weather Admin - was born from actual market 
                needs and refined through real-world usage.
              </p>
              
              <p>
                Today, we serve clients across multiple continents, providing enterprise-grade software solutions 
                that compete with the best in the industry. Our commitment to quality, reliability, and customer 
                satisfaction has made us a trusted partner for businesses worldwide.
              </p>
              
              <p>
                We're not just building software - we're building a legacy of African excellence in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#232F3E] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Excellence',
                description: 'We deliver nothing but the highest quality in everything we build.',
              },
              {
                title: 'Innovation',
                description: 'We constantly push boundaries to create cutting-edge solutions.',
              },
              {
                title: 'Reliability',
                description: '24/7 support and 99.9% uptime - our clients can count on us.',
              },
              {
                title: 'Transparency',
                description: 'Clear communication and honest partnerships with every client.',
              },
              {
                title: 'Scalability',
                description: 'Solutions built to grow with your business needs.',
              },
              {
                title: 'Global Standards',
                description: 'International quality from an African powerhouse.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#EAEDED] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#EAEDED]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-[#FF9900] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#232F3E] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Lwena TechWareAfrica's success
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* CEO */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-[#232F3E] to-[#FF9900] h-48 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#232F3E]" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#232F3E] mb-1">Lwena</h3>
                <p className="text-[#FF9900] font-semibold mb-3">CEO & Software Developer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founder and lead developer, passionate about building world-class software solutions 
                  that showcase African innovation on the global stage.
                </p>
              </div>
            </div>

            {/* Placeholder for future team members */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-dashed border-gray-300">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Team Member</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-1">Your Name</h3>
                <p className="text-gray-400 text-sm mb-3">Position Title</p>
                <p className="text-gray-400 text-sm">Join our growing team</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm border-2 border-dashed border-gray-300">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Team Member</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-1">Your Name</h3>
                <p className="text-gray-400 text-sm mb-3">Position Title</p>
                <p className="text-gray-400 text-sm">Join our growing team</p>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#FF9900] mb-2">1+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF9900] mb-2">4+</div>
                <div className="text-sm text-gray-600">Products Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF9900] mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF9900] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#232F3E] to-[#FF9900] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's build something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#232F3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
