/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Search, 
  ChevronRight, 
  Heart, 
  Users, 
  BookOpen, 
  Handshake,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  red: '#E31E24',
  green: '#009245',
  yellow: '#FFD200',
  white: '#FFFFFF'
};

const NavItem = ({ label, href = "#" }: { label: string, href?: string }) => (
  <a href={href} className="px-4 py-2 text-sm font-semibold hover:text-bpp-red transition-colors uppercase tracking-wider">
    {label}
  </a>
);

const SocialIcon = ({ Icon, color = "text-gray-600" }: { Icon: React.ElementType, color?: string }) => (
  <a href="#" className={`${color} hover:text-bpp-red transition-colors`} aria-label="Social Media Link">
    <Icon size={18} />
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200 py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium text-gray-600">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} /> West Bengal, India</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 border-r border-gray-300 pr-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Youtube} />
            </div>
            <a href="#" className="hover:text-bpp-red">Sitemap</a>
            <a href="#" className="hover:text-bpp-red">Contact Us</a>
            <div className="flex items-center gap-2 bg-bpp-yellow px-2 py-0.5 rounded text-black font-bold">
              <span>A+</span>
              <span>A</span>
              <span>A-</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-bpp-red rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-bpp-green">
              BPP
            </div>
            <div>
              <h1 className="text-2xl font-bold text-bpp-red leading-none tracking-tight">BENGAL PEOPLES POWER</h1>
              <p className="text-[10px] font-bold text-bpp-green tracking-[0.2em] uppercase mt-1">Empowering Every Voice</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <NavItem label="Home" />
            <NavItem label="About Us" />
            <NavItem label="Initiatives" />
            <NavItem label="News" />
            <NavItem label="Get Involved" />
            <div className="ml-4 flex gap-2">
              <button className="bg-bpp-green text-white px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all">
                Donate
              </button>
              <button className="bg-bpp-red text-white p-2 rounded-sm hover:bg-opacity-90 transition-all">
                <Search size={20} />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <nav className="flex flex-col gap-4">
              {["Home", "About Us", "Initiatives", "News", "Get Involved", "Donate"].map((item) => (
                <a key={item} href="#" className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Slider Style Section */}
        <section className="relative h-[600px] overflow-hidden bg-gray-900">
          <img 
            src="https://picsum.photos/seed/bengal/1920/1080" 
            alt="Bengal Landscape" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-block bg-bpp-yellow text-black px-4 py-1 font-bold text-sm uppercase tracking-widest mb-6">
                Non-Political • People Centric
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                For the People, <br />
                <span className="text-bpp-yellow text-shadow-lg">By the People of Bengal</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Bengal Peoples Power is a non-political movement dedicated to social welfare, 
                educational empowerment, and the sustainable development of every corner of West Bengal.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-bpp-red text-white px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2">
                  Join the Movement <ArrowRight size={20} />
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Our Vision
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links Bar (BJP Style) */}
          <div className="absolute bottom-0 left-0 right-0 bg-bpp-green/90 backdrop-blur-sm text-white py-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-4 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="flex items-center gap-2 hover:text-bpp-yellow transition-colors"><Users size={18} /> Membership Drive</a>
              <a href="#" className="flex items-center gap-2 hover:text-bpp-yellow transition-colors"><Heart size={18} /> Support a Cause</a>
              <a href="#" className="flex items-center gap-2 hover:text-bpp-yellow transition-colors"><BookOpen size={18} /> Knowledge Center</a>
              <a href="#" className="flex items-center gap-2 hover:text-bpp-yellow transition-colors"><Handshake size={18} /> Volunteer Now</a>
            </div>
          </div>
        </section>

        {/* Key Initiatives - Grid Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-bpp-red font-bold text-lg uppercase tracking-[0.3em] mb-2">Our Pillars</h3>
              <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
                Transforming Bengal Together
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-bpp-green"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Education for All", icon: BookOpen, color: "bg-blue-500", desc: "Providing quality learning resources to underprivileged children across rural Bengal." },
                { title: "Healthcare Access", icon: Heart, color: "bg-red-500", desc: "Mobile clinics and health camps reaching the most remote villages." },
                { title: "Skill Development", icon: Users, color: "bg-green-500", desc: "Empowering youth with vocational training for sustainable livelihoods." },
                { title: "Community Welfare", icon: Handshake, color: "bg-yellow-500", desc: "Strengthening local communities through collective action and support." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-sm border-b-4 border-bpp-green bjp-style-shadow text-center group"
                >
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <a href="#" className="text-bpp-red font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Updates Section (BJP Style Sidebar/Main split) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main News */}
              <div className="lg:w-2/3">
                <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-4">
                  <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
                  <a href="#" className="text-bpp-red font-bold text-sm uppercase hover:underline">View All News</a>
                </div>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 bg-white p-4 bjp-style-shadow">
                    <img src="https://picsum.photos/seed/news1/400/250" alt="News" className="w-full md:w-64 h-48 object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <span className="bg-bpp-red text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Social Impact</span>
                      <h3 className="text-2xl font-bold mt-2 mb-3 hover:text-bpp-red cursor-pointer">BPP Launches New Rural Education Initiative in Purulia</h3>
                      <p className="text-gray-600 text-sm mb-4">Our team reached over 50 villages this month, distributing learning kits and setting up temporary study centers for children...</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> Oct 24, 2025</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> Purulia</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-white bjp-style-shadow overflow-hidden">
                        <img src={`https://picsum.photos/seed/news${i+1}/400/200`} alt="News" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
                        <div className="p-4">
                          <h4 className="font-bold text-lg mb-2 hover:text-bpp-red cursor-pointer">Empowering Women Artisans in Bankura District</h4>
                          <p className="text-gray-500 text-xs mb-4">Providing market access and design training to traditional terracotta artists...</p>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-gray-400 font-bold uppercase">Oct 20, 2025</span>
                            <ChevronRight className="text-bpp-red" size={16} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Quick Actions & Social */}
              <div className="lg:w-1/3">
                <div className="bg-bpp-red text-white p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Get Involved</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-white text-bpp-red py-3 font-bold uppercase tracking-widest hover:bg-bpp-yellow hover:text-black transition-colors flex items-center justify-center gap-2">
                      Become a Member
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-bpp-red transition-colors flex items-center justify-center gap-2">
                      Volunteer with Us
                    </button>
                    <button className="w-full bg-bpp-yellow text-black py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                      Donate Now
                    </button>
                  </div>
                </div>

                <div className="bg-white bjp-style-shadow p-6">
                  <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-2">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-sm hover:bg-blue-100 transition-colors">
                      <Facebook size={20} /> <span className="text-xs font-bold">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-sky-50 text-sky-500 rounded-sm hover:bg-sky-100 transition-colors">
                      <Twitter size={20} /> <span className="text-xs font-bold">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-pink-50 text-pink-600 rounded-sm hover:bg-pink-100 transition-colors">
                      <Instagram size={20} /> <span className="text-xs font-bold">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 bg-red-50 text-red-600 rounded-sm hover:bg-red-100 transition-colors">
                      <Youtube size={20} /> <span className="text-xs font-bold">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote/Vision Section */}
        <section className="py-20 bg-bpp-red text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-bpp-green/20 rounded-full -ml-48 -mb-48"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-8">
              "True power lies in the hands of the people when they are empowered with knowledge and opportunity."
            </h2>
            <div className="w-20 h-1 bg-bpp-yellow mx-auto mb-6"></div>
            <p className="text-xl font-bold uppercase tracking-[0.2em]">Our Mission Statement</p>
          </div>
        </section>

        {/* Photo Gallery - Bento Style */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-bpp-green font-bold text-sm uppercase tracking-widest mb-2">Moments of Impact</h3>
                <h2 className="text-4xl font-bold text-gray-900">Our Work in Pictures</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 text-bpp-red font-bold uppercase tracking-widest text-sm">
                View Gallery <ExternalLink size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
              <div className="col-span-2 row-span-2 relative group overflow-hidden">
                <img src="https://picsum.photos/seed/work1/800/800" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold">Education Drive 2025</p>
                </div>
              </div>
              <div className="relative group overflow-hidden">
                <img src="https://picsum.photos/seed/work2/400/400" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="relative group overflow-hidden">
                <img src="https://picsum.photos/seed/work3/400/400" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-2 relative group overflow-hidden">
                <img src="https://picsum.photos/seed/work4/800/400" alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (BJP Style) */}
      <footer className="bg-gray-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-bpp-red rounded-full flex items-center justify-center text-white font-bold border-2 border-bpp-green">
                  BPP
                </div>
                <h2 className="text-xl font-bold tracking-tight">BENGAL PEOPLES POWER</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A non-political organization dedicated to the holistic development of West Bengal through grassroots empowerment and social welfare initiatives.
              </p>
              <div className="flex gap-4">
                <SocialIcon Icon={Facebook} color="text-white" />
                <SocialIcon Icon={Twitter} color="text-white" />
                <SocialIcon Icon={Instagram} color="text-white" />
                <SocialIcon Icon={Youtube} color="text-white" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-bpp-red pb-2 inline-block">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About the Movement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Initiatives</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media Center</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-bpp-green pb-2 inline-block">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Annual Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer Handbook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donation Transparency</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-bpp-yellow pb-2 inline-block">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest initiatives and impact stories.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-bpp-red"
                />
                <button className="bg-bpp-red px-4 py-2 font-bold text-xs uppercase tracking-widest">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-black py-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <p>© {new Date().getFullYear()} Bengal Peoples Power. All Rights Reserved.</p>
            <p>Designed for the People of Bengal</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-bpp-red p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Back to Top"
            >
              <ChevronRight size={24} className="-rotate-90" />
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-bpp-yellow text-black px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 uppercase tracking-widest text-sm border-2 border-black/10"
        >
          <Users size={20} /> Join Us
        </motion.button>
      </div>
    </div>
  );
}
