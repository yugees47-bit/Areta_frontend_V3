import React, { useState, useEffect } from 'react';
import { 
    Zap, Sun, Wind, BarChart3, CheckCircle2, ArrowRight, Menu, X, 
    Activity, Building2, Lightbulb, Award, Phone, Mail, MapPin, 
    ShieldCheck, Cpu, Thermometer, Droplets, Gauge, Plug, ChevronDown,
    Filter, LayoutGrid, FileText, Settings, PenTool, Search, Monitor, Fan,
    Briefcase, Target, Lock, DollarSign, Leaf, BookOpen
} from 'lucide-react';

// --- Data ---
const portfolioItems = [
    { 
        name: "Sheraton Petaling Jaya", 
        category: "Hospitality", 
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
        brief: "Comprehensive energy audit and chiller plant optimization achieving significant kWh reduction.",
        achievement: "15% Overall Cost Reduction"
    },
    { 
        name: "Concorde Hotel Shah Alam", 
        category: "Hospitality", 
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
        brief: "Implementation of energy management system and LED retrofitting for guest rooms.",
        achievement: "50% Lighting Energy Savings"
    },
    { 
        name: "St. Regis Hotels & Resorts", 
        category: "Hospitality", 
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1000",
        brief: "High-end lighting automation and HVAC efficiency upgrades without compromising luxury.",
        achievement: "Maintained 5-Star Comfort Standards"
    },
    { 
        name: "Le Méridien Kuala Lumpur", 
        category: "Hospitality", 
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1000",
        brief: "Centralized cooling optimization and baseload energy reduction strategies.",
        achievement: "Optimized Chiller Plant Efficiency"
    },
    { 
        name: "IKEA Tebrau", 
        category: "Retail", 
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=1000",
        brief: "Rooftop solar PV installation and intelligent lighting controls for retail floors.",
        achievement: "Green Building Index (GBI) Aligned"
    },
    { 
        name: "Toppen Shopping Mall", 
        category: "Retail", 
        image: "https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?auto=format&fit=crop&q=80&w=1000",
        brief: "Integrated building management system (BMS) auditing and fine-tuning.",
        achievement: "Improved Baseload Management"
    },
    { 
        name: "Gamuda Walk", 
        category: "Retail", 
        image: "https://images.unsplash.com/photo-1567449303078-57ad431de067?auto=format&fit=crop&q=80&w=1000",
        brief: "Common area lighting retrofit and motor efficiency upgrades for escalators.",
        achievement: "30% Motor Energy Reduction"
    },
    { 
        name: "Tiffani Kiara", 
        category: "Residential", 
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
        brief: "Energy audit for common facilities and swimming pool pump optimization.",
        achievement: "ROI Achieved in < 2 Years"
    },
    { 
        name: "Pavilion Hilltop", 
        category: "Residential", 
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
        brief: "Corridor lighting upgrade to motion-sensor LEDs and power quality analysis.",
        achievement: "Zero CapEx Implementation"
    },
    { 
        name: "Philip Morris Malaysia", 
        category: "Industrial", 
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        brief: "Factory-wide electrical safety audit and harmonic analysis for production lines.",
        achievement: "100% Regulatory Compliance"
    },
    { 
        name: "Kellogg's", 
        category: "Industrial", 
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
        brief: "Thermal imaging inspection and protection relay calibration for main switchboards.",
        achievement: "Zero Unplanned Downtime"
    },
    { 
        name: "TMG Mart", 
        category: "Retail", 
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000",
        brief: "Multi-site energy audit and standardization of cooling setpoints.",
        achievement: "Standardized Efficiency Across Sites"
    },
];

// --- Navigation ---
const Nav = ({ currentPage, setPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (target) => {
        if (target === 'contact') {
            if (currentPage !== 'home') {
                setPage('home');
                // Allow time for Home component to mount
                setTimeout(() => {
                    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            setPage(target);
            window.scrollTo(0, 0);
        }
        setIsOpen(false);
        setMegaMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4' : 'bg-transparent py-6'}`} onMouseLeave={() => setMegaMenuOpen(false)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
                <div 
                    className="flex items-center gap-2 cursor-pointer z-50" 
                    onClick={() => handleNav('home')}
                >
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-lg">
                        <Zap className="text-white w-5 h-5" fill="currentColor" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#1d1d1f]">Areta<span className="text-emerald-600">Energy</span></span>
                </div>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => handleNav('home')} className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-emerald-600' : 'text-[#1d1d1f]/80 hover:text-emerald-600'}`}>Home</button>
                    <button onClick={() => handleNav('about')} className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-emerald-600' : 'text-[#1d1d1f]/80 hover:text-emerald-600'}`}>About Us</button>
                    
                    {/* Mega Menu Trigger */}
                    <div className="relative group" onMouseEnter={() => setMegaMenuOpen(true)}>
                        <button 
                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${['consultation', 'solutions', 'engineering'].includes(currentPage) ? 'text-emerald-600' : 'text-[#1d1d1f]/80 hover:text-emerald-600'}`}
                            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        >
                            Services <ChevronDown size={14} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <button onClick={() => handleNav('portfolio')} className={`text-sm font-medium transition-colors ${currentPage === 'portfolio' ? 'text-emerald-600' : 'text-[#1d1d1f]/80 hover:text-emerald-600'}`}>Portfolio</button>
                    <button onClick={() => handleNav('contact')} className="bg-black text-white px-5 py-2.5 rounded-full font-medium hover:bg-black/80 transition-all text-sm shadow-md">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#1d1d1f] z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            <div 
                className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl transition-all duration-300 overflow-hidden ${megaMenuOpen ? 'h-auto opacity-100 visible' : 'h-0 opacity-0 invisible'}`}
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
            >
                <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <h3 className="font-bold text-lg mb-2">Our Expertise</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">End-to-end energy solutions tailored for commercial and industrial efficiency.</p>
                    </div>
                    <div className="space-y-4 cursor-pointer group" onClick={() => handleNav('consultation')}>
                        <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Activity size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#1d1d1f] group-hover:text-blue-600 transition-colors">Consultation</h4>
                            <p className="text-sm text-gray-500 mt-1">Energy audits, GBI facilitation, and management systems.</p>
                        </div>
                    </div>
                    <div className="space-y-4 cursor-pointer group" onClick={() => handleNav('solutions')}>
                        <div className="bg-emerald-50 w-10 h-10 rounded-lg flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#1d1d1f] group-hover:text-emerald-600 transition-colors">Energy Solutions</h4>
                            <p className="text-sm text-gray-500 mt-1">Solar PV, HVAC optimization, and LED retrofitting.</p>
                        </div>
                    </div>
                    <div className="space-y-4 cursor-pointer group" onClick={() => handleNav('engineering')}>
                        <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                            <Cpu size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#1d1d1f] group-hover:text-purple-600 transition-colors">Engineering</h4>
                            <p className="text-sm text-gray-500 mt-1">Electrical safety audits, calibration, and installation.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full px-4 pt-20 pb-6 flex flex-col space-y-4 bg-white border-b border-gray-200 shadow-xl top-0 left-0 h-screen overflow-y-auto z-40">
                    <button onClick={() => handleNav('home')} className="block text-left text-[#1d1d1f] py-3 font-medium border-b border-gray-100 text-lg">Home</button>
                    <button onClick={() => handleNav('about')} className="block text-left text-[#1d1d1f] py-3 font-medium border-b border-gray-100 text-lg">About Us</button>
                    
                    <div className="py-2 border-b border-gray-100">
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Services</p>
                        <button onClick={() => handleNav('consultation')} className="block w-full text-left text-[#1d1d1f] py-2 pl-4">Consultation & Auditing</button>
                        <button onClick={() => handleNav('solutions')} className="block w-full text-left text-[#1d1d1f] py-2 pl-4">Energy Solutions</button>
                        <button onClick={() => handleNav('engineering')} className="block w-full text-left text-[#1d1d1f] py-2 pl-4">Engineering Services</button>
                    </div>

                    <button onClick={() => handleNav('portfolio')} className="block text-left text-[#1d1d1f] py-3 font-medium border-b border-gray-100 text-lg">Portfolio</button>
                    <button onClick={() => handleNav('contact')} className="block bg-black text-white text-center py-4 rounded-xl font-medium mt-4">Contact Us</button>
                </div>
            )}
        </nav>
    );
};

// --- Home Components ---
const Hero = ({ setPage }) => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl opacity-60 pointer-events-none mix-blend-multiply"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-[#1d1d1f] text-xs font-semibold uppercase tracking-wider shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Leading Carbon Neutrality
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-[#1d1d1f]">
                        Serve and Lead Towards <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Carbon Neutrality.</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Areta Energy Services combines engineering expertise with sustainable technology to optimize consumption, reduce carbon footprints, and lower operating costs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onClick={() => setPage('contact')} className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                            Get an Audit <ArrowRight className="w-4 h-4" />
                        </button>
                        <button onClick={() => setPage('solutions')} className="px-8 py-4 bg-white hover:bg-gray-50 text-[#1d1d1f] border border-gray-200 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                            View Solutions
                        </button>
                    </div>
                    
                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Energy Commission
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-emerald-600" /> GreenRE Certified
                        </div>
                    </div>
                </div>

                {/* Interactive Hero Visual */}
                <div className="relative animate-float hidden lg:block perspective-1000">
                    <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/40 shadow-2xl relative z-10 rotate-y-6 rotate-x-6 transform transition-transform duration-500 hover:rotate-0">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                            </div>
                            <div className="text-xs text-gray-400 font-medium tracking-wide">LIVE MONITORING</div>
                        </div>

                        {/* Graph Area Mockup */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-inner">
                                <div className="text-gray-500 text-xs mb-1 font-medium">Energy Saved</div>
                                <div className="text-2xl font-bold text-[#1d1d1f] flex items-baseline gap-2">
                                    70% <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-md">↑ Retrofit</span>
                                </div>
                                <div className="h-12 mt-3 flex items-end gap-1">
                                    {[40, 60, 45, 70, 65, 80, 75].map((h, i) => (
                                        <div key={i} className="w-full bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500 transition-colors duration-300" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-inner">
                                <div className="text-gray-500 text-xs mb-1 font-medium">Cost Reduction</div>
                                <div className="text-2xl font-bold text-[#1d1d1f] flex items-baseline gap-2">
                                    30% <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded-md">↑ HVAC</span>
                                </div>
                                <div className="h-12 mt-3 flex items-end gap-1">
                                    {[30, 40, 35, 50, 45, 60, 55].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-500/20 rounded-t-sm hover:bg-blue-500 transition-colors duration-300" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Status List */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600"><Sun size={18} /></div>
                                    <div>
                                        <div className="text-sm text-[#1d1d1f] font-semibold">Solar Harvesting</div>
                                        <div className="text-xs text-gray-500">Rooftop Panel Array B</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-[#1d1d1f] font-mono font-medium">45.2 kW</div>
                                    <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">Active</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600"><Wind size={18} /></div>
                                    <div>
                                        <div className="text-sm text-[#1d1d1f] font-semibold">Chiller Efficiency</div>
                                        <div className="text-xs text-gray-500">Central Plant Unit 2</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-[#1d1d1f] font-mono font-medium">0.58 kW/RT</div>
                                    <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full inline-block mt-1">Optimal</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LogoStrip = () => {
    const clients = [
        "IKEA", "Sheraton", "Westin", "Le Méridien", "TMG Mart", "MyTown", "Pavilion", "Four Points"
    ];
    
    return (
        <div className="border-y border-gray-100 bg-gray-50/50 py-12 overflow-hidden">
            <p className="text-center text-gray-400 text-xs font-semibold mb-8 uppercase tracking-[0.2em]">Trusted by industry leaders</p>
            <div className="relative flex overflow-x-hidden group">
                <div className="py-2 animate-marquee whitespace-nowrap flex gap-16 px-4">
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <span key={i} className="text-2xl font-bold text-gray-300 hover:text-gray-900 transition-colors cursor-default select-none duration-500">
                            {client}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 px-4">
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <span key={i + 'dup'} className="text-2xl font-bold text-gray-300 hover:text-gray-900 transition-colors cursor-default select-none duration-500">
                            {client}
                        </span>
                    ))}
                </div>
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10"></div>
            </div>
        </div>
    );
};

const BentoGrid = () => {
    return (
        <section className="py-32 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1d1d1f] tracking-tight">Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Energy Intelligence.</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-xl font-light">We don't just audit; we implement, verify, and guarantee performance across your entire facility.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
                    <div className="md:col-span-2 bg-[#f5f5f7] rounded-[2rem] p-10 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500 cursor-default">
                        <div className="absolute top-[-10%] right-[-10%] p-8 opacity-5 group-hover:opacity-10 transition-opacity text-[#1d1d1f]">
                            <Activity size={300} strokeWidth={1} />
                        </div>
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6">
                                    <Building2 size={28} />
                                </div>
                                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-3">Energy Audits</h3>
                                <p className="text-gray-500 max-w-md text-lg leading-relaxed">Comprehensive Walk-Through and Detailed Energy Audits to identify wastage and plan improvement actions.</p>
                            </div>
                            <div className="flex gap-3">
                                <span className="px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-medium text-gray-600 border border-gray-100">Detailed Reporting</span>
                                <span className="px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-medium text-gray-600 border border-gray-100">Baseline Study</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f5f5f7] rounded-[2rem] p-10 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-default">
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-yellow-400/30 transition-all mix-blend-multiply"></div>
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-yellow-500 mb-6">
                                    <Sun size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Solar PV</h3>
                                <p className="text-gray-500 text-sm font-medium">Rooftop solar installation and harvesting monitoring.</p>
                            </div>
                            <div className="text-5xl font-bold text-[#1d1d1f] tracking-tighter">
                                20% <span className="text-sm font-medium text-gray-400 tracking-normal block mt-1">Savings Guaranteed</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#f5f5f7] rounded-[2rem] p-10 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 cursor-default">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-500 mb-6">
                                    <Wind size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">HVAC Opt.</h3>
                                <p className="text-gray-500 text-sm font-medium">Chiller optimization and intelligent motor controls.</p>
                            </div>
                            <div className="text-5xl font-bold text-[#1d1d1f] tracking-tighter">
                                30% <span className="text-sm font-medium text-gray-400 tracking-normal block mt-1">Consumption Drop</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 bg-[#f5f5f7] rounded-[2rem] p-10 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500 cursor-default flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-1">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 mb-6">
                                <Lightbulb size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-[#1d1d1f] mb-3">LED & Engineering</h3>
                            <p className="text-gray-500 mb-6 text-lg">Smart LED retrofitting with motion sensors, plus full electrical audits and safety inspections.</p>
                            <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-emerald-600"/></div> Zero CapEx Proposals Available</li>
                                <li className="flex items-center gap-3"><div className="bg-emerald-100 p-1 rounded-full"><CheckCircle2 className="w-3 h-3 text-emerald-600"/></div> Up to 70% Lighting Savings</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-2/5 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-wide">Efficiency</span>
                                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-lg">+70%</span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
                                        <span>Fluorescent</span>
                                        <span>36W</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="w-[100%] h-full bg-gray-300"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
                                        <span className="text-emerald-600">Smart LED</span>
                                        <span className="text-emerald-600">18W</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="w-[50%] h-full bg-emerald-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { title: "Walk Thru Audit", desc: "We identify low-cost measures and immediate wastage points." },
        { title: "Proof of Concept", desc: "Baseline study and development of measurement & verification plan." },
        { title: "Implementation", desc: "Execution of low, medium, and high cost solutions." },
        { title: "Reduction & Savings", desc: "Continuous improvement and shared savings model." }
    ];

    return (
        <section className="py-24 bg-[#fbfbfd]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Our Methodology</h2>
                        <p className="text-gray-500 mb-10 text-lg leading-relaxed">A systematic approach to guaranteed energy reduction. We partner with you from the initial scan to the final savings report.</p>
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeStep === index ? 'bg-white border-emerald-500 shadow-lg scale-105' : 'bg-transparent border-transparent hover:bg-white hover:shadow-sm'}`}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors ${activeStep === index ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-bold ${activeStep === index ? 'text-[#1d1d1f]' : 'text-gray-400'}`}>{step.title}</h4>
                                        </div>
                                    </div>
                                    {activeStep === index && (
                                        <p className="mt-3 ml-14 text-gray-500 text-sm animate-fadeIn leading-relaxed">{step.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Dynamic Visual for Methodology Steps */}
                    <div className="h-[500px] flex items-center justify-center relative">
                        {/* Background blob animation */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>

                        {/* Card Container using Portfolio Style */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl w-full max-w-sm overflow-hidden transform transition-all duration-500 hover:scale-105">
                            {/* Header Gradient */}
                            <div className={`h-40 w-full bg-gradient-to-br flex items-center justify-center relative ${
                                activeStep === 0 ? 'from-blue-50 to-blue-200' :
                                activeStep === 1 ? 'from-cyan-50 to-cyan-200' :
                                activeStep === 2 ? 'from-purple-50 to-purple-200' :
                                'from-emerald-50 to-emerald-200'
                            }`}>
                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm text-gray-600 scale-125 transition-transform duration-500">
                                    {activeStep === 0 && <Search size={32} className="text-blue-600" />}
                                    {activeStep === 1 && <BarChart3 size={32} className="text-cyan-600" />}
                                    {activeStep === 2 && <Settings size={32} className="text-purple-600" />}
                                    {activeStep === 3 && <DollarSign size={32} className="text-emerald-600" />}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                                        activeStep === 0 ? 'bg-blue-50 text-blue-600' :
                                        activeStep === 1 ? 'bg-cyan-50 text-cyan-600' :
                                        activeStep === 2 ? 'bg-purple-50 text-purple-600' :
                                        'bg-emerald-50 text-emerald-600'
                                    }`}>
                                        {activeStep === 0 ? "Step 1: Scan" : 
                                         activeStep === 1 ? "Step 2: Measure" : 
                                         activeStep === 2 ? "Step 3: Build" : "Step 4: Profit"}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">
                                    {activeStep === 0 ? "Preliminary Audit" : 
                                     activeStep === 1 ? "Baseline Study" : 
                                     activeStep === 2 ? "System Upgrade" : "ROI & Savings"}
                                </h3>
                                
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {activeStep === 0 ? "Non-intrusive walkthrough to identify obvious wastage and low-cost saving opportunities." : 
                                     activeStep === 1 ? "Establishing energy consumption baseline using data loggers to project accurate ROI." : 
                                     activeStep === 2 ? "Installation of Solar PV, LED, or HVAC systems with minimal operational disruption." : "Monitoring performance to verify savings. Project costs are covered by the energy saved."}
                                </p>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Award className={`w-4 h-4 ${
                                            activeStep === 0 ? 'text-blue-600' :
                                            activeStep === 1 ? 'text-cyan-600' :
                                            activeStep === 2 ? 'text-purple-600' :
                                            'text-emerald-600'
                                        }`} />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Outcome</span>
                                    </div>
                                    <p className="text-sm font-bold text-[#1d1d1f]">
                                        {activeStep === 0 ? "Potential: 3% Savings" : 
                                         activeStep === 1 ? "Investment Grade Proposal" : 
                                         activeStep === 2 ? "High-Efficiency Assets" : "Positive Cash Flow"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Page Views ---

// 1. About Us
const About = () => {
    const coreValues = [
        { 
            title: 'Accountable', 
            icon: <CheckCircle2 />, 
            desc: 'We take ownership of our results and promises, ensuring full transparency in every report.',
            usp: 'Transparent Reporting',
            color: 'from-blue-50 to-blue-200', 
            text: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        { 
            title: 'Reliable', 
            icon: <ShieldCheck />, 
            desc: 'Consistent performance you can count on. Our systems are built for uptime and resilience.',
            usp: '24/7 Support Readiness',
            color: 'from-cyan-50 to-cyan-200', 
            text: 'text-cyan-600',
            bg: 'bg-cyan-50'
        },
        { 
            title: 'Efficient', 
            icon: <Zap />, 
            desc: 'Optimizing resources for maximum output. We deliver the highest possible savings per kWh.',
            usp: 'Optimized ROI',
            color: 'from-emerald-50 to-emerald-200', 
            text: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        { 
            title: 'Trust', 
            icon: <Lock />, 
            desc: 'Building relationships on honesty. We advise on what you need, not just what we sell.',
            usp: 'Long-term Partnerships',
            color: 'from-purple-50 to-purple-200', 
            text: 'text-purple-600',
            bg: 'bg-purple-50'
        },
        { 
            title: 'Accomplishment', 
            icon: <Award />, 
            desc: 'Delivering tangible success. We measure our achievement by your utility bill reduction.',
            usp: 'Proven Track Record',
            color: 'from-orange-50 to-orange-200', 
            text: 'text-orange-600',
            bg: 'bg-orange-50'
        }
    ];

    return (
        <div className="pt-24 pb-20">
            {/* New Landing Section with Background Image */}
            <div className="relative h-[600px] w-full mb-20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern sustainable architecture" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-lg mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        Established 2022
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                        Driven by <span className="text-emerald-400">Purpose.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md">
                        To serve and lead our clients towards carbon neutrality through innovative engineering and sustainable energy solutions.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Vision & Mission Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <div className="bg-gray-50 p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl opacity-60"></div>
                        <div className="relative z-10">
                            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                                <Target size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be the preferred energy efficient consultancy and services provider, adding value for customers to create sustainable buildings while saving on energy and optimizing operational investment.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-lg transition-shadow">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
                        <div className="relative z-10">
                            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We strive to use our engineering and technical expertise to ensure energy generated is consumed sustainably. We assist clients in optimizing energy consumption, reducing carbon footprints, and optimizing operating costs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Redesigned Core Values - Portfolio Card Style */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-16 text-[#1d1d1f]">Core Values</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {coreValues.map((val, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full group cursor-default">
                                {/* Header */}
                                <div className={`h-32 w-full bg-gradient-to-br ${val.color} flex items-center justify-center relative`}>
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                    <div className={`p-4 bg-white rounded-2xl shadow-sm ${val.text} group-hover:scale-110 transition-transform duration-300`}>
                                        {val.icon}
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="p-6 flex flex-col flex-grow text-center">
                                    <div className="flex justify-center mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${val.bg} ${val.text}`}>
                                            Value 0{i + 1}
                                        </span>
                                    </div>
                                    <h4 className={`font-bold text-lg text-[#1d1d1f] mb-3 group-hover:${val.text} transition-colors`}>{val.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{val.desc}</p>
                                    
                                    <div className="pt-6 border-t border-gray-100 mt-auto">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Principle</span>
                                            <p className="text-xs font-bold text-[#1d1d1f]">{val.usp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Services: Consultation
const ServiceConsultation = () => (
    <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="text-center max-w-3xl mx-auto">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 mx-auto">
                    <Activity size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">Consultation & Auditing</h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                    We correct inefficiencies in how energy is used. Our audit services identify wastage and set the baseline for improvement using advanced diagnostics.
                </p>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Data-Driven Insights", desc: "Baseline your consumption patterns with precision data logging.", icon: <BarChart3 /> },
                    { title: "Regulatory Compliance", desc: "Meet GBI, GreenRE, and Energy Commission standards effortlessly.", icon: <ShieldCheck /> },
                    { title: "Cost Visibility", desc: "Identify hidden wastage and project accurate ROI forecasts.", icon: <Search /> }
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="text-blue-600 mb-3 bg-blue-50 p-3 rounded-full">{item.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Detailed Services - Zigzag Layout */}
        <div className="space-y-32 mb-32">
            
            {/* Comprehensive Audits */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-blue-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <FileText size={80} className="text-blue-600 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Detailed</div>
                        <div className="text-lg font-medium text-gray-600">Analysis & Reporting</div>
                    </div>
                    <div>
                        <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Strategic Planning</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Comprehensive Energy Audits</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            From preliminary walk-throughs to investment-grade audits. We identify low-cost measures and obvious wastage points without intrusive testing, or dive deep with data loggers.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg h-fit"><Search className="w-5 h-5 text-blue-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Walk-Through Audit</h4>
                                    <p className="text-sm text-gray-500">Identify immediate savings up to 3% with zero disruption.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg h-fit"><BarChart3 className="w-5 h-5 text-blue-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Detailed Energy Audit</h4>
                                    <p className="text-sm text-gray-500">In-depth technical analysis for investment-grade proposals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Green Building */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4">Certification</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Green Building Facilitation</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            We guide your property towards GBI and GreenRE certification. Our team manages the submission process, scoring strategy, and sustainable design consulting to ensure you meet the mark.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> GBI & GreenRE Submission</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Sustainable Design Consulting</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Scoring Strategy Optimization</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-emerald-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Leaf size={80} className="text-emerald-600 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Green</div>
                        <div className="text-lg font-medium text-gray-600">Building Certification</div>
                    </div>
                </div>
            </div>

            {/* EMS */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-gray-100 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <BookOpen size={80} className="text-gray-600 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Sustainable</div>
                        <div className="text-lg font-medium text-gray-600">Management Policy</div>
                    </div>
                    <div>
                        <div className="text-gray-600 font-bold text-sm tracking-widest uppercase mb-4">Long Term Strategy</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Energy Management Systems</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Establishing frameworks for long-term sustainability. We help you implement Energy Management Systems (EMS) that provide clear policy frameworks and robust Measurement & Verification (M&V).
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-gray-100 p-2 rounded-lg h-fit"><FileText className="w-5 h-5 text-gray-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Policy Framework</h4>
                                    <p className="text-sm text-gray-500">Structured planning for energy goals.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-gray-100 p-2 rounded-lg h-fit"><CheckCircle2 className="w-5 h-5 text-gray-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Measurement & Verification</h4>
                                    <p className="text-sm text-gray-500">Third-party verification of savings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Feature Section - Energy Management Cycle */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
             <div className="bg-[#1d1d1f] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
                 
                 <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6">The Energy Management Cycle.</h2>
                     <p className="text-gray-400 text-xl leading-relaxed">
                         A continuous process of improvement. We guide you through every step, from understanding your baseline to verifying your results.
                     </p>
                 </div>

                 <div className="grid md:grid-cols-4 gap-8 relative z-10">
                     {[
                        { title: "Assessment", icon: <Search />, desc: "Initial energy use analysis and commitment framework." },
                        { title: "Understanding", icon: <Activity />, desc: "Detailed breakdown of consumption patterns." },
                        { title: "Procurement", icon: <Settings />, desc: "Green procurement and planning." },
                        { title: "Verification", icon: <CheckCircle2 />, desc: "Monitoring and Reporting (M&V)." }
                    ].map((step, i) => (
                         <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                             <div className="text-blue-400 mb-4">{step.icon}</div>
                             <div className="text-white font-bold text-xl mb-2">{step.title}</div>
                             <p className="text-gray-400 text-sm">{step.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    </div>
);

// 3. Services: Solutions
const ServiceSolutions = () => (
    <div className="pt-32 pb-20">
        {/* Landing Section (Kept as requested) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
            <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 mx-auto">
                <Zap size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">Energy Efficient Solutions</h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Physical upgrades that directly reduce your utility bill. We implement Zero CapEx proposals where savings repay the investment.
            </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Immediate Savings", desc: "Lower utility costs from day one of implementation.", icon: <BarChart3 /> },
                    { title: "Carbon Reduction", desc: "Significant drop in CO2 emissions for ESG goals.", icon: <CheckCircle2 /> },
                    { title: "Asset Upgrade", desc: "Newer, more efficient equipment with lower maintenance.", icon: <Settings /> }
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="text-emerald-600 mb-3 bg-emerald-50 p-3 rounded-full">{item.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Detailed Solutions Sections */}
        <div className="space-y-32 mb-32">
            
            {/* Solar PV */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-yellow-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Sun size={80} className="text-yellow-500 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">20%</div>
                        <div className="text-lg font-medium text-gray-600">Average Energy Savings</div>
                    </div>
                    <div>
                        <div className="text-yellow-600 font-bold text-sm tracking-widest uppercase mb-4">Sustainable Power</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Solar PV Systems</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Turn your roof into a power plant. We handle the entire lifecycle from feasibility studies to Net Energy Metering (NEM) application and real-time harvesting monitoring.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-yellow-100 p-2 rounded-lg h-fit"><Monitor className="w-5 h-5 text-yellow-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">PV Harvesting Monitoring</h4>
                                    <p className="text-sm text-gray-500">Real-time dashboard for generation stats.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-yellow-100 p-2 rounded-lg h-fit"><CheckCircle2 className="w-5 h-5 text-yellow-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">NEM Application</h4>
                                    <p className="text-sm text-gray-500">Seamless grid interconnection handling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart LED */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-4">Intelligent Illumination</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Smart LED Lighting</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Upgrade to high-efficiency LED lighting integrated with smart motion and occupancy sensors. Ideal for commercial offices, industrial warehouses, and street lighting.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Commercial', 'Industrial', 'Road Lighting', 'Façade'].map((item, i) => (
                                <div key={i} className="bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 border border-gray-100">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-purple-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Lightbulb size={80} className="text-purple-500 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">70%</div>
                        <div className="text-lg font-medium text-gray-600">Lighting Cost Reduction</div>
                    </div>
                </div>
            </div>

            {/* HVAC */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-cyan-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Wind size={80} className="text-cyan-500 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">30%</div>
                        <div className="text-lg font-medium text-gray-600">Cooling Efficiency Gain</div>
                    </div>
                    <div>
                        <div className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-4">Climate Control</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">HVAC Optimization</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Cooling accounts for the bulk of energy bills. We optimize chiller plants, install Variable Speed Drives (VSD), and use smart controls to match cooling with demand.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-cyan-100 p-2 rounded-lg h-fit"><Fan className="w-5 h-5 text-cyan-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Chiller Optimization</h4>
                                    <p className="text-sm text-gray-500">Improving kW/RT efficiency for central plants.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-cyan-100 p-2 rounded-lg h-fit"><Thermometer className="w-5 h-5 text-cyan-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">A/C Energy Saver</h4>
                                    <p className="text-sm text-gray-500">Intelligent controllers for split units.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Motor Efficiency */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Industrial Drive</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Motor & Pump Efficiency</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            We equip pumps and motors with Variable Speed Drives (VSD) or VFDs, integrated with our Smart Server powered by IoT. This ensures motors only work as hard as they need to.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> EMD & Smart Server Integration</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Reduced mechanical stress</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Real-time IoT monitoring</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-blue-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Gauge size={80} className="text-blue-500 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Smart</div>
                        <div className="text-lg font-medium text-gray-600">IoT Driven Control</div>
                    </div>
                </div>
            </div>

        </div>

        {/* Zero CapEx Section (Redesigned) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
             <div className="bg-[#1d1d1f] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>
                 
                 <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero CapEx. Pure Savings.</h2>
                     <p className="text-gray-400 text-xl leading-relaxed">
                         Our Performance Contracting model removes the financial barrier. We invest in the equipment, and you pay us back solely from the savings generated.
                     </p>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8 relative z-10">
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-emerald-400 font-bold text-xl mb-4">01. Installation</div>
                         <p className="text-gray-400 text-sm">We handle all costs for equipment and installation. No capital expenditure from you.</p>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-emerald-400 font-bold text-xl mb-4">02. Verification</div>
                         <p className="text-gray-400 text-sm">Savings are verified by third-party protocols to ensure performance guarantees.</p>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-emerald-400 font-bold text-xl mb-4">03. Shared Savings</div>
                         <p className="text-gray-400 text-sm">A portion of the savings pays for the project. Once paid off, you keep 100%.</p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
);

// 4. Services: Engineering
const ServiceEngineering = () => (
    <div className="pt-32 pb-20">
        {/* Hero */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-purple-600 mx-auto">
                <Cpu size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">Electrical Safety & Engineering</h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Ensuring your electrical infrastructure is safe, compliant, and efficient. We provide comprehensive professional engineering services.
            </p>
        </div>

        {/* Benefits Grid - Matching Solutions Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Regulatory Compliance", desc: "Fully compliant with Energy Commission (ST) standards.", icon: <ShieldCheck /> },
                    { title: "Asset Protection", desc: "Prevent failures and extend equipment lifespan.", icon: <Settings /> },
                    { title: "Operational Safety", desc: "Identify hazards before they cause downtime or injury.", icon: <CheckCircle2 /> }
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="text-purple-600 mb-3 bg-purple-50 p-3 rounded-full">{item.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Detailed Services - Zigzag Layout */}
        <div className="space-y-32 mb-32">
            
            {/* Electrical Safety Audit */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-purple-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <ShieldCheck size={80} className="text-purple-600 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">100%</div>
                        <div className="text-lg font-medium text-gray-600">Compliance Assurance</div>
                    </div>
                    <div>
                        <div className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-4">Safety First</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Electrical Safety Audit</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Our comprehensive audits identify potential hazards, non-compliance issues, and inefficiencies in your electrical system. We ensure your facility meets all Suruhanjaya Tenaga requirements.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg h-fit"><FileText className="w-5 h-5 text-purple-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Detailed Reporting</h4>
                                    <p className="text-sm text-gray-500">Actionable insights and rectification plans.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg h-fit"><Thermometer className="w-5 h-5 text-purple-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">IR Thermography</h4>
                                    <p className="text-sm text-gray-500">Hotspot detection to prevent fire risks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Installation & Upgrades */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Professional Works</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Installation & Upgrades</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            From ELV to MV, our registered engineers handle complex electrical installations. We ensure every cable, switchboard, and relay is installed to the highest safety standards.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> ELV, LV, and MV Installation</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Main Switchboard Upgrades</li>
                            <li className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-blue-500"/> Electrical Drawing Endorsement</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-blue-50 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Settings size={80} className="text-blue-500 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Expert</div>
                        <div className="text-lg font-medium text-gray-600">Technical Execution</div>
                    </div>
                </div>
            </div>

            {/* Calibration */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-gray-100 rounded-[2.5rem] p-12 h-[500px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
                        <Gauge size={80} className="text-gray-600 mb-8" />
                        <div className="text-5xl font-bold text-[#1d1d1f] mb-2">Precise</div>
                        <div className="text-lg font-medium text-gray-600">Calibration Standards</div>
                    </div>
                    <div>
                        <div className="text-gray-600 font-bold text-sm tracking-widest uppercase mb-4">Accuracy & Quality</div>
                        <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Calibration & Analysis</h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Faulty equipment leads to downtime. We provide precise protection relay calibration and power quality audits (harmonic analysis) to ensure your equipment runs smoothly.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-gray-100 p-2 rounded-lg h-fit"><Activity className="w-5 h-5 text-gray-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Power Quality Audit</h4>
                                    <p className="text-sm text-gray-500">Harmonic analysis to prevent penalties.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-gray-100 p-2 rounded-lg h-fit"><Cpu className="w-5 h-5 text-gray-700" /></div>
                                <div>
                                    <h4 className="font-bold text-[#1d1d1f]">Relay Calibration</h4>
                                    <p className="text-sm text-gray-500">Ensuring protection devices trigger correctly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Feature Section - Certified Competency */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
             <div className="bg-[#1d1d1f] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>
                 
                 <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6">Certified Competency.</h2>
                     <p className="text-gray-400 text-xl leading-relaxed">
                         We don't just guess; we engineer. Our team consists of competent engineers registered with the Energy Commission, using certified equipment for all diagnostics.
                     </p>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8 relative z-10">
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-purple-400 font-bold text-xl mb-4">Registered Persons</div>
                         <p className="text-gray-400 text-sm">Competent Electrical Engineers & Energy Managers on staff.</p>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-purple-400 font-bold text-xl mb-4">Certified Equipment</div>
                         <p className="text-gray-400 text-sm">Using top-tier brands like Fluke, Kyoritsu, and Testo.</p>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                         <div className="text-purple-400 font-bold text-xl mb-4">Endorsement</div>
                         <p className="text-gray-400 text-sm">Official endorsement for drawings and safety certificates.</p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
);

// 5. Portfolio
const Portfolio = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Hospitality", "Retail", "Residential", "Industrial"];

    const filteredItems = filter === "All" 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#fbfbfd]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6">Our Work</h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Delivering measurable energy savings for Malaysia's top brands.
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mt-10">
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-black text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden flex flex-col h-full">
                        {/* Card Header / Image Placeholder */}
                        <div className="h-48 w-full relative overflow-hidden">
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                                    item.category === 'Hospitality' ? 'bg-blue-50 text-blue-600' :
                                    item.category === 'Retail' ? 'bg-emerald-50 text-emerald-600' :
                                    item.category === 'Industrial' ? 'bg-slate-100 text-slate-600' :
                                    'bg-purple-50 text-purple-600'
                                }`}>
                                    {item.category}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 group-hover:text-emerald-600 transition-colors">
                                {item.name}
                            </h3>
                            
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                {item.brief}
                            </p>

                            <div className="pt-6 border-t border-gray-100 mt-auto">
                                <div className="flex items-center gap-2 mb-1">
                                    <Award className="w-4 h-4 text-emerald-600" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Achievement</span>
                                </div>
                                <p className="text-sm font-bold text-[#1d1d1f]">{item.achievement}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 6. Contact Section (Embedded in Home)
const ContactSection = () => (
    <section id="contact-section" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Simplified Left Column - Header only */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white backdrop-blur-sm text-emerald-600 text-xs font-semibold uppercase tracking-wider shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Get in Touch
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6 leading-tight">
                        Start Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Savings Journey.</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        Ready to reduce your carbon footprint and operating costs? Fill out the form, and our engineering team will provide a free consultation tailored to your facility.
                    </p>
                </div>

                {/* Right Column - Form */}
                <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                                <input type="text" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium text-[#1d1d1f]" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                                <input type="text" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium text-[#1d1d1f]" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                                <input type="email" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium text-[#1d1d1f]" placeholder="john@company.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                                <input type="tel" className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium text-[#1d1d1f]" placeholder="+60..." />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">I'm interested in...</label>
                            <div className="relative">
                                <select className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none text-gray-700 cursor-pointer text-sm font-medium">
                                    <option>General Inquiry</option>
                                    <option>Energy Audit</option>
                                    <option>Solar PV System</option>
                                    <option>LED Retrofitting</option>
                                    <option>HVAC Optimization</option>
                                    <option>Electrical Safety Audit</option>
                                    <option>Calibration Services</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                            <textarea className="w-full p-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all h-32 resize-none text-sm font-medium text-[#1d1d1f]" placeholder="Tell us about your facility needs..."></textarea>
                        </div>
                        
                        <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wide">SEND INQUIRY</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

// --- Services Page (Landing for Services) ---
// Note: This component is currently unused but kept for potential future use or reference
const ServicesLanding = ({ setPage }) => (
    <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Sustainability</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-16">
                Explore our specialized services designed to optimize performance and reduce costs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => setPage('consultation')} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 cursor-pointer hover:-translate-y-2 transition-transform">
                    <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto"><Activity /></div>
                    <h3 className="text-2xl font-bold mb-3">Consultation</h3>
                    <p className="text-gray-500 mb-6">Energy audits & reporting.</p>
                    <span className="text-blue-600 font-bold text-sm flex items-center justify-center gap-1">Learn More <ArrowRight size={14} /></span>
                </div>
                <div onClick={() => setPage('solutions')} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 cursor-pointer hover:-translate-y-2 transition-transform">
                    <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 mx-auto"><Zap /></div>
                    <h3 className="text-2xl font-bold mb-3">Solutions</h3>
                    <p className="text-gray-500 mb-6">Solar, LED, & HVAC upgrades.</p>
                    <span className="text-emerald-600 font-bold text-sm flex items-center justify-center gap-1">Learn More <ArrowRight size={14} /></span>
                </div>
                <div onClick={() => setPage('engineering')} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 cursor-pointer hover:-translate-y-2 transition-transform">
                    <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 mb-6 mx-auto"><Cpu /></div>
                    <h3 className="text-2xl font-bold mb-3">Engineering</h3>
                    <p className="text-gray-500 mb-6">Electrical safety & calibration.</p>
                    <span className="text-purple-600 font-bold text-sm flex items-center justify-center gap-1">Learn More <ArrowRight size={14} /></span>
                </div>
            </div>
        </div>
    </div>
);

// --- Footer (Global) ---
const Footer = ({ setPage }) => {
    return (
        <footer className="bg-[#1d1d1f] pt-24 pb-8 text-white/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <Zap className="text-black w-5 h-5" fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-white">Areta<span className="text-emerald-400">Energy</span></span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            We assist our clients to optimize energy consumption, reduce carbon footprint, and optimize operating costs through engineering excellence.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-semibold text-white/80 border border-white/10">GreenRE</div>
                            <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-semibold text-white/80 border border-white/10">MyHijau</div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><button onClick={() => setPage('consultation')} className="hover:text-white transition-colors">Energy Audits</button></li>
                            <li><button onClick={() => setPage('solutions')} className="hover:text-white transition-colors">Solar PV Systems</button></li>
                            <li><button onClick={() => setPage('solutions')} className="hover:text-white transition-colors">LED Retrofitting</button></li>
                            <li><button onClick={() => setPage('solutions')} className="hover:text-white transition-colors">HVAC Optimization</button></li>
                            <li><button onClick={() => setPage('engineering')} className="hover:text-white transition-colors">Electrical Safety</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-5 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>D5-1-6, Blk D5, Level U1, Solaris Dutamas, No 1, Jalan Dutamas 1, 50480 Kuala Lumpur</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>+6016-417 5257</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>segar@areta.com.my</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>© 2025 Areta Energy Services Sdn Bhd (1457422-T). All rights reserved.</p>
                    <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 items-center">
                        <span className="opacity-50">Powered by VeltrixArcStudio</span>
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main Home View ---
const Home = ({ setPage }) => (
    <>
        <Hero setPage={setPage} />
        <LogoStrip />
        <BentoGrid />
        <ProcessStepper />
        <ContactSection />
    </>
);

// --- App Component ---
export default function App() {
    const [page, setPage] = useState('home');

    return (
        <div className="bg-[#fbfbfd] text-[#1d1d1f] min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                
                body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
                
                .animate-spin-slow { animation: spin 8s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-marquee { animation: marquee 35s linear infinite; }
                .animate-marquee2 { animation: marquee2 35s linear infinite; }
                @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
                @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }
                
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #fbfbfd; }
                ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
            `}</style>
            
            <Nav currentPage={page} setPage={setPage} />
            
            <main className="min-h-screen">
                {page === 'home' && <Home setPage={setPage} />}
                {page === 'about' && <About />}
                {page === 'consultation' && <ServiceConsultation />}
                {page === 'solutions' && <ServiceSolutions />}
                {page === 'engineering' && <ServiceEngineering />}
                {page === 'portfolio' && <Portfolio />}
            </main>

            <Footer setPage={setPage} />
        </div>
    );
}
