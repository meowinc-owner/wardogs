import { useEffect } from 'react';
import { Users, Shield, Star, Phone, Mail, Crown } from 'lucide-react';

// EDIT THIS ARRAY TO ADD/REMOVE MEMBERS
const MEMBERS = [
  'Gabriel.D',
  'Hiram.V',
  'Ava.M',
  'Maddie.M',
  'Sophia.D',
  'Dariane.D',
  'Macy.S',
  'Dylan.V',
  'Urijah.X',
  'Trentyn.H'
];

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-white" />
              <span className="text-xl font-bold">The Wardogs</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#activities" className="hover:text-gray-300 transition-colors">Activities</a>
              <a href="#members" className="hover:text-gray-300 transition-colors">Members</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gray Background */}
      <div id="home" className="pt-32 pb-20 px-6 bg-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <img 
              src="https://i.ibb.co/nMCkS4sZ/upscalemedia-transformed-removebg-preview-1.png" 
              alt="The Wardogs" 
              className="mx-auto max-w-full h-auto"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
            We are The Wardogs: the heart of the school experience. Built on trust, powered by loyalty, and driven by fun.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-300 animate-fade-in-delay-2">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{MEMBERS.length} Members</span>
            </div>
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Active Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Fade */}
      <div className="bg-gradient-to-b from-neutral-800 to-black h-32"></div>

      {/* Main Content - Two Column Layout */}
      <div id="about">
        <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Code of Conduct */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-slide-in-left hover:border-white/20 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-3">Code of Conduct</h2>
            <p className="text-gray-400 mb-8">Follow these rules to maintain group integrity.</p>
            
            <div className="space-y-4">
              <div className="bg-black/50 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400 font-bold">1</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    No physical contact at any time in the head or crotch areas.
                  </p>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    You <span className="font-bold text-red-400">cannot</span> apply for release.
                  </p>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    Never snitch on wardogs. If someone in this group is in the wrong (without postponing danger), keep it to yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Brought to you by */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-slide-in-right hover:border-white/20 transition-all duration-300">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-6">
              Brought to you by
            </h3>
            <div className="space-y-6">
              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-lg font-semibold">Lucas Pacheco</p>
                </div>
                <div className="aspect-[3/1] bg-black/30 rounded-lg border border-white/5 overflow-hidden">
                  <img
                    src="https://i.ibb.co/DgtFQKsL/image-4.png"
                    alt="Lucas P Signature"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-lg font-semibold">Damian Berti</p>
                </div>
                <div className="aspect-[3/1] bg-black/30 rounded-lg border border-white/5 overflow-hidden">
                  <img
                    src="https://i.ibb.co/B2R4yffP/image-1.png"
                    alt="Damian B Signature"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20" id="activities">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-8">Group Activities</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/50 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Fall Exclusive</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leaf Wars</h3>
              <p className="text-sm text-gray-400">Classic fall battle activity</p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Winter Exclusive</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Snowfort Fight</h3>
              <p className="text-sm text-gray-400">Epic winter battles</p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Fall Exclusive</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bury the Mummy</h3>
              <p className="text-sm text-gray-400">Seasonal tradition</p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Secret Location</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">The Fort</h3>
              <p className="text-sm text-gray-400">Very fun & hidden</p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Online Game</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Clicker</h3>
              <a href="https://bit.ly/enBericherr" target="_blank" rel="noopener noreferrer" className="text-sm text-violet-400 hover:text-violet-300 underline">
                Play Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Members & Leadership */}
      <div className="max-w-7xl mx-auto px-6 pb-20" id="members">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Leadership */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-fade-in-up hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-black/50 rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                  <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Leader</span>
                </div>
                <p className="text-lg font-semibold">Lucas Pacheco</p>
              </div>

              <div className="bg-black/50 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Manager</span>
                </div>
                <p className="text-lg font-semibold">Damian Berti</p>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-fade-in-up hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-bold">Members</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {MEMBERS.map((member, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 bg-black/50 rounded-lg p-3 border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:translate-x-1"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20" id="contact">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 animate-fade-in-up hover:border-white/20 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">For any issues:</p>
              <a href="mailto:bertid000@niagaracatholic.ca" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="break-all">bertid000@niagaracatholic.ca</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-2">Call or text:</p>
              <a href="tel:+12892148233" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-xl font-semibold">+1 289 214 8233</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} The Wardogs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
