import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Brain, 
  Zap, 
  Shield, 
  Timer, 
  Play, 
  ChevronRight, 
  Wind, 
  Eye, 
  BarChart3, 
  CheckCircle2, 
  AlertTriangle
} from 'lucide-react';

const LandingPage = () => {
  const [activeProtocol, setActiveProtocol] = useState(null);
  const [systemReady, setSystemReady] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Simulation of system initialization
  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setSystemReady(true);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const protocols = [
    {
      id: 1,
      title: "Adrenaline Flush",
      duration: "5 min",
      type: "Physiological",
      icon: <Wind size={24} className="text-[#00E5FF]" />,
      description: "Guided box breathing to lower cortisol levels immediately post-match."
    },
    {
      id: 2,
      title: "Visual Decompression",
      duration: "3 min",
      type: "Sensory",
      icon: <Eye size={24} className="text-[#00E5FF]" />,
      description: "Pattern-interrupt exercises to reduce screen-induced eye strain and tunnel vision."
    },
    {
      id: 3,
      title: "Cognitive Reset",
      duration: "8 min",
      type: "Psychological",
      icon: <Brain size={24} className="text-[#00E5FF]" />,
      description: "Detach from match outcome variables. Re-center emotional baseline."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E14] text-[#F0F2F5] font-sans overflow-x-hidden selection:bg-[#00E5FF] selection:text-[#0A0E14]">
      {/* Font Injection */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@500;600;700&display=swap');
          .font-display { font-family: 'Rajdhani', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
          }
          .glass-button {
            background: rgba(0, 229, 255, 0.1);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(0, 229, 255, 0.3);
            transition: all 0.3s ease;
          }
          .glass-button:hover {
            background: rgba(0, 229, 255, 0.2);
            box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
            border-color: #00E5FF;
          }
          .neon-text {
            text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0A0E14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Activity className="text-[#00E5FF]" size={28} />
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                RE<span className="text-[#00E5FF]">SPAWN</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
                </span>
                SYSTEM ONLINE
              </div>
              <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C4DFF] to-[#00E5FF] p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#0A0E14] flex items-center justify-center font-display font-bold text-sm">
                    JP
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
        
        {/* System Status / Hero */}
        <section className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#7C4DFF]/10 border border-[#7C4DFF]/30 text-[#7C4DFF] text-xs font-display tracking-widest uppercase mb-4">
            <Shield size={14} /> Mandatory Recovery Protocol
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl leading-none tracking-tight">
            ELIMINATE THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] neon-text">
              POST-MATCH CRASH
            </span>
          </h1>
          
          <p className="font-body text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Science-backed physiological decompression for esports athletes. 
            Prevent tilt. Protect cognitive function. Reset for the next game.
          </p>
        </section>

        {/* Biometric Status Card */}
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#2a2a2a]">
            <div 
              className="h-full bg-[#00E5FF] transition-all duration-300 ease-out shadow-[0_0_10px_#00E5FF]"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#0A0E14] border border-[#00E5FF]/30 flex items-center justify-center relative">
                {systemReady ? (
                  <CheckCircle2 className="text-[#00E5FF] animate-pulse" size={32} />
                ) : (
                  <span className="font-mono text-[#00E5FF] text-sm">{scanProgress}%</span>
                )}
                {/* Spinner Ring */}
                {!systemReady && (
                   <div className="absolute inset-0 border-2 border-t-[#00E5FF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                )}
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-xl text-white">Current Cognitive Load</h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  {systemReady ? (
                    <span className="text-red-400 flex items-center gap-1">
                      <AlertTriangle size={12} /> CRITICAL LEVELS DETECTED
                    </span>
                  ) : (
                    "Scanning biometrics..."
                  )}
                </p>
              </div>
            </div>

            <button 
              className={`px-8 py-4 rounded-lg font-display font-bold text-lg tracking-wider transition-all shadow-lg flex items-center gap-2 ${
                systemReady 
                  ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] text-white hover:opacity-90 hover:scale-105 cursor-pointer shadow-[#00E5FF]/25' 
                  : 'bg-white/5 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!systemReady}
            >
              <Zap size={20} fill={systemReady ? "currentColor" : "none"} />
              INITIATE FLUSH
            </button>
          </div>
          
          {/* Decorative Grid BG */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#00E5FF]/10 blur-[60px] rounded-full pointer-events-none"></div>
        </div>

        {/* Protocols Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display font-bold text-2xl text-white flex items-center gap-2">
              <Timer className="text-[#7C4DFF]" />
              Recovery Queue
            </h2>
            <span className="text-xs font-mono text-gray-500">MANDATORY COMPLETION</span>
          </div>

          <div className="grid gap-4">
            {protocols.map((protocol) => (
              <div 
                key={protocol.id}
                onClick={() => setActiveProtocol(protocol.id)}
                className={`glass-panel p-5 rounded-xl transition-all cursor-pointer group hover:bg-white/[0.07] ${
                  activeProtocol === protocol.id ? 'border-[#00E5FF] bg-white/[0.08]' : 'border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-[#0A0E14] border border-white/10 group-hover:border-[#00E5FF]/50 transition-colors`}>
                    {protocol.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors">
                        {protocol.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                        {protocol.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 font-body">
                      {protocol.description}
                    </p>
                  </div>
                  <ChevronRight className={`text-gray-600 transition-transform ${activeProtocol === protocol.id ? 'rotate-90 text-[#00E5FF]' : ''}`} />
                </div>
                
                {/* Expanded State Content */}
                {activeProtocol === protocol.id && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1">Target: {protocol.type}</span>
                        <span className="flex items-center gap-1">Intensity: High</span>
                      </div>
                      <button className="text-xs bg-[#00E5FF]/20 text-[#00E5FF] px-4 py-2 rounded uppercase font-bold tracking-wider hover:bg-[#00E5FF] hover:text-[#0A0E14] transition-all">
                        Start Session
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats / Science Mini Section */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {[
            { label: "Cortisol Reduction", value: "-42%", icon: <BarChart3 size={16} /> },
            { label: "Reaction Time", value: "+18ms", icon: <Activity size={16} /> },
            { label: "Tilt Prevention", value: "99%", icon: <Shield size={16} /> },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2">
              <div className="text-[#7C4DFF] mb-1">{stat.icon}</div>
              <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center border-t border-white/5 pt-8">
          <p className="text-gray-600 text-sm font-body">
            Used by Tier 1 Organizations globally. <br/>
            Compliance with Esports Integrity Commission (ESIC) Health Standards.
          </p>
          <div className="flex justify-center gap-4 mt-4 opacity-50">
             {/* Abstract Logos placeholders */}
             <div className="h-6 w-20 bg-white/10 rounded"></div>
             <div className="h-6 w-20 bg-white/10 rounded"></div>
             <div className="h-6 w-20 bg-white/10 rounded"></div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default LandingPage;