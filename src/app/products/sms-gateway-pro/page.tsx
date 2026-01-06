import React from "react";
import Link from "next/link";
import { Check, Clock, Gift, Zap, Shield, Globe, Users, MessageSquare } from "lucide-react";
import { PlaceholderImage } from "../../../components/ui/PlaceholderImage";

export const metadata = {
  title: "SMS Gateway Pro - 3 Months FREE Trial | 2026 Exclusive Offer",
  description: "Professional bulk SMS management platform. Sign up now for 3 months completely FREE throughout 2026 - No credit card required!",
};

export default function smsgetwayProPage() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  // Offer is valid from now (late 2025) through all of 2026
  const isOfferValid = currentYear === 2025 || currentYear === 2026;

  return (
    <main className="min-h-screen">
      {/* Hero Section with Offer Banner */}
      <section className="relative bg-gradient-to-br from-[#232F3E] via-[#1a242e] to-[#0f1419] text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Limited Time Offer Badge */}
          {isOfferValid && (
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3">
                <Gift className="w-6 h-6" />
                <span>🎉 2026 EXCLUSIVE OFFER - 3 MONTHS COMPLETELY FREE!</span>
                <Gift className="w-6 h-6" />
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full mb-6 border border-amber-500/30">
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Professional SMS Management
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                SMS Gateway <span className="text-amber-500">Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Enterprise-grade bulk SMS platform for businesses. Send, track, and manage SMS campaigns with ease.
              </p>

              {isOfferValid ? (
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-500 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-amber-400 mb-2">2026 Exclusive Offer</h3>
                      <ul className="space-y-2 text-gray-200">
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          <span><strong>3 months completely FREE</strong> - No credit card required</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Submit unlimited <strong>customization requests</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          <span>Start paying <strong>only after 3 months</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          <span><strong>Valid throughout 2026</strong> - Sign up now!</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-red-400 mb-2">Offer Expired</h3>
                      <p className="text-red-300">
                        ⏰ The 3-month free trial offer was exclusive to 2026 and has now expired. 
                        Contact us for current pricing and available plans.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {isOfferValid ? (
                  <>
                    <a
                      href="https://smsgetway.techwareafrica.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <Zap className="w-5 h-5" />
                      Start FREE 3-Month Trial
                    </a>
                    <Link
                      href="#features"
                      className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                    >
                      Learn More
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/contact"
                    className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all"
                  >
                    Contact for Pricing
                  </Link>
                )}
              </div>
            </div>

            <div className="relative">
              <PlaceholderImage 
                text="SMS Gateway Dashboard"
                gradient="orange"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              {isOfferValid && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl transform rotate-12">
                  FREE for 3 Months!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How the Offer Works */}
      {isOfferValid && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#232F3E] mb-4">
                How the 2026 Free Trial Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started today and enjoy full access with zero commitment
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">Sign Up Free</h3>
                <p className="text-gray-600">
                  Register in 2 minutes. No credit card required. No hidden fees.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">Use for 3 Months</h3>
                <p className="text-gray-600">
                  Full access to all features. Send SMS, track campaigns, analyze results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">Request Custom Features</h3>
                <p className="text-gray-600">
                  Need something specific? Submit customization requests anytime.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">Start Paying After</h3>
                <p className="text-gray-600">
                  Billing begins only after your 3-month trial ends. Cancel anytime.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://smsgetway.techwareafrica.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Gift className="w-6 h-6" />
                Claim Your Free Trial Now
                <span className="text-sm font-normal opacity-90">(2026 Only)</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#232F3E] mb-4">
              Powerful Features Included
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage enterprise SMS campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Bulk SMS Sending",
                description: "Send thousands of messages instantly with our high-performance API",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Users,
                title: "Contact Management",
                description: "Organize contacts, create groups, and manage subscriber lists efficiently",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Reach customers worldwide with international SMS delivery",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: MessageSquare,
                title: "Two-Way SMS",
                description: "Receive replies and engage in conversations with customers",
                color: "from-red-400 to-rose-500"
              },
              {
                icon: Clock,
                title: "Scheduled Campaigns",
                description: "Plan and automate SMS campaigns for optimal timing",
                color: "from-indigo-400 to-blue-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#232F3E] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#232F3E] mb-4">
              See SMS Gateway Pro in Action
            </h2>
            <p className="text-xl text-gray-600">
              Real screenshots from our mobile app - intuitive, powerful, and easy to use
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Featured Screenshot */}
            <div className="mb-12 flex justify-center">
              <div className="relative group max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="/images/sms/Screenshot_20260101-101212.jpg"
                    alt="SMS Gateway Pro - Main Dashboard"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/sms/Screenshot_20260101-101230.jpg", alt: "Contact Management" },
                { src: "/images/sms/Screenshot_20260101-101343.jpg", alt: "SMS Composer" },
                { src: "/images/sms/Screenshot_20260101-101349.jpg", alt: "Group Messaging" },
                { src: "/images/sms/Screenshot_20260101-101438.jpg", alt: "Message Templates" },
                { src: "/images/sms/Screenshot_20260101-101446.jpg", alt: "Delivery Reports" },
                { src: "/images/sms/Screenshot_20260101-101543.jpg", alt: "Settings Panel" },
                { src: "/images/sms/Screenshot_20260101-101553.jpg", alt: "API Integration" },
                { src: "/images/sms/Screenshot_20260101-101558.jpg", alt: "Bulk Send" },
                { src: "/images/sms/Screenshot_20260101-101657.jpg", alt: "Contact Groups" },
                { src: "/images/sms/Screenshot_20260101-101706.jpg", alt: "Campaign Analytics" },
                { src: "/images/sms/Screenshot_20260101-101732.jpg", alt: "User Profile" },
                { src: "/images/sms/Screenshot_20260101-101741.jpg", alt: "Team Management" }
              ].map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">{screenshot.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Below Gallery */}
            <div className="mt-12 text-center">
              <a
                href="https://smsgateway.techwareafrica.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Zap className="w-6 h-6" />
                Try It Free - Experience These Features Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      {isOfferValid && (
        <section className="py-20 bg-gradient-to-br from-[#232F3E] to-[#1a242e] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need Custom Features? We've Got You Covered!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                During your 3-month free trial, submit unlimited customization requests. We'll tailor SMS Gateway Pro to your exact needs.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Popular Customization Requests:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Custom API integrations",
                    "White-label branding",
                    "Advanced reporting dashboards",
                    "Custom SMS templates",
                    "CRM system integration",
                    "Multi-language support",
                    "Custom billing rules",
                    "Dedicated phone numbers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://smsgetway.techwareafrica.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-amber-600 transition-all shadow-xl"
                >
                  Start Free Trial & Request Customizations
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isOfferValid 
              ? "Ready to Transform Your SMS Marketing?"
              : "Interested in SMS Gateway Pro?"
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {isOfferValid
              ? "Join hundreds of businesses already using SMS Gateway Pro. Start your FREE 3-month trial today - limited offer available throughout 2026!"
              : "Contact us to learn about our current pricing and features."
            }
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {isOfferValid ? (
              <>
                <a
                  href="https://smsgetway.techwareafrica.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#232F3E] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-3"
                >
                  <Gift className="w-6 h-6" />
                  Get Started Free
                </a>
                <Link
                  href="/contact"
                  className="bg-[#232F3E] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#1a242e] transition-all shadow-xl"
                >
                  Talk to Sales
                </Link>
              </>
            ) : (
              <Link
                href="/contact"
                className="bg-white text-[#232F3E] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Contact Us
              </Link>
            )}
          </div>

          {isOfferValid && (
            <p className="mt-8 text-sm opacity-75">
              * 3-month free trial offer valid for registrations made in 2026 only. No credit card required to start.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
