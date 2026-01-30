import React, { useState } from 'react';
import { 
  Menu, X, ChevronRight, Globe, Users, User, BookOpen, 
  Instagram, FileText, Mail, Phone, Sparkles, 
  FileCheck, Plane, MapPin, HeartHandshake, PartyPopper,
  Baby, GraduationCap, Car, Languages, 
  Gavel, Heart, Send, CheckCircle, Loader2, AlertCircle,
  MousePointerClick
} from 'lucide-react';
import { INITIAL_POSTS, INITIAL_CONFIG, TESTIMONIALS } from './constants';
import { BlogPost, SiteConfig, ViewState } from './types';

// --- Components ---

const ApiaLogo = () => (
  <div className="flex flex-col items-center select-none transform hover:scale-105 transition-transform duration-300">
    {/* 로고 사이즈를 165x68로 키워 시인성을 높였습니다. */}
    <svg width="165" height="68" viewBox="0 0 220 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Ribbon Path */}
        <path id="ribbonPath" d="M 40 35 Q 110 5 180 35" />
        <pattern id="candleStripes" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(-45)">
          <rect width="5" height="10" fill="#EE6A5F" />
          <rect x="5" width="5" height="10" fill="#1F6B83" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Ribbon Group */}
      <g>
        {/* Ribbon Background Shape */}
        <path d="M 35 38 Q 110 8 185 38 L 185 24 Q 110 -6 35 24 Z" fill="#1F6B83" />
        {/* Ribbon Tails */}
        <path d="M 35 24 L 25 32 L 35 38" fill="#154E60" />
        <path d="M 185 24 L 195 32 L 185 38" fill="#154E60" />
        
        {/* Ribbon Text */}
        <text fontSize="9.5" fontWeight="bold" fill="white" textAnchor="middle" letterSpacing="2" style={{fontFamily: "'Jua', sans-serif"}}>
          <textPath href="#ribbonPath" startOffset="50%" textAnchor="middle">★ 40 YEARS ★</textPath>
        </text>
      </g>

      {/* Main Text Group */}
      <g transform="translate(0, 75)">
        <text x="25" y="0" fontFamily="'DM Serif Display', serif" fontSize="52" fill="#1F6B83">Au</text>
        <text x="105" y="0" fontFamily="'DM Serif Display', serif" fontSize="52" fill="#1F6B83">Pa</text>
        
        {/* Candle replacing 'i' */}
        <g transform="translate(164, -38)">
           {/* Candle Body */}
           <rect x="0" y="10" width="11" height="28" rx="1" fill="url(#candleStripes)" />
           {/* Wick */}
           <line x1="5.5" y1="5" x2="5.5" y2="10" stroke="#888" strokeWidth="2" />
           {/* Flame */}
           <path d="M 5.5 0 Q 8.5 3 8.5 6 Q 8.5 9 5.5 9 Q 2.5 9 2.5 6 Q 2.5 3 5.5 0" fill="#FFA500" filter="url(#glow)">
             <animate attributeName="d" 
               values="M 5.5 0 Q 8.5 3 8.5 6 Q 8.5 9 5.5 9 Q 2.5 9 2.5 6 Q 2.5 3 5.5 0;
                       M 5.5 -1 Q 9 3 9 6.5 Q 8 9.5 5.5 9 Q 3 9.5 2 6.5 Q 2 3 5.5 -1;
                       M 5.5 0 Q 8.5 3 8.5 6 Q 8.5 9 5.5 9 Q 2.5 9 2.5 6 Q 2.5 3 5.5 0"
               dur="1s" repeatCount="indefinite" />
             <animate attributeName="fill" values="#FFA500;#FFD700;#FFA500" dur="1.5s" repeatCount="indefinite" />
           </path>
           {/* Inner Flame for depth */}
           <path d="M 5.5 2 Q 7 4 7 6 Q 7 8 5.5 8 Q 4 8 4 6 Q 4 4 5.5 2" fill="#FFF" opacity="0.6" />
        </g>

        <text x="178" y="0" fontFamily="'DM Serif Display', serif" fontSize="52" fill="#1F6B83">r</text>
        <text x="202" y="-25" fontFamily="'DM Serif Display', serif" fontSize="14" fill="#1F6B83">®</text>
      </g>

      {/* Bottom Text */}
      <text x="110" y="88" textAnchor="middle" fontFamily="'DM Serif Display', serif" fontSize="15" fill="#1F6B83" letterSpacing="4">IN AMERICA</text>
    </svg>
  </div>
);

const Navbar = ({ 
  currentView, 
  setCurrentView
}: { 
  currentView: ViewState; 
  setCurrentView: (v: ViewState) => void; 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '홈', value: 'HOME' },
    { label: '프로그램', value: 'PROGRAMS' },
    { label: '지원하기', value: 'APPLY' },
  ];

  const handleNavClick = (view: ViewState) => {
    setCurrentView(view);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          {/* Logo container margin adjusted for the larger logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('HOME')}>
            <ApiaLogo />
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value as ViewState)}
                className={`font-rounded text-lg px-5 py-2 rounded-2xl transition-all duration-300 ${
                  currentView === item.value 
                    ? 'text-teal-700 font-bold bg-teal-100/50' 
                    : 'text-gray-500 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-teal-500 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg rounded-b-3xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value as ViewState)}
                className="block w-full text-left px-4 py-4 rounded-2xl text-base font-bold font-rounded text-gray-600 hover:bg-teal-50 hover:text-teal-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ 
  config, 
  setCurrentView 
}: { 
  config: SiteConfig; 
  setCurrentView: (v: ViewState) => void; 
}) => (
  <div className="relative bg-[#f0fdfa] overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2070&auto=format&fit=crop" 
        alt="Background - New York City" 
        className="w-full h-full object-cover opacity-50" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/70 via-teal-50/40 to-white/10"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
      <div className="lg:w-full">
        <span className="inline-block py-2 px-5 rounded-full bg-teal-100/80 text-teal-700 text-sm font-bold mb-6 animate-bounce font-rounded border border-teal-200 backdrop-blur-sm">
          ✈️ 2026년도 참가자 모집 중!
        </span>
        <h1 className="text-5xl md:text-7xl font-rounded font-bold mb-6 leading-tight drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-[#1F6B83] to-teal-800 pb-2 lg:whitespace-nowrap">
          {config.heroTitle}
        </h1>
        {/* Changed subtitle font to font-rounded (Jua) for a softer look */}
        <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-rounded whitespace-pre-line drop-shadow-sm opacity-90 max-w-3xl">
          {config.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button 
            onClick={() => setCurrentView('APPLY')}
            className="px-10 py-4 bg-[#99f6e4] hover:bg-[#5eead4] text-teal-900 font-bold rounded-full text-lg shadow-lg shadow-teal-100 transition-all hover:-translate-y-1 transform flex items-center justify-center font-rounded"
          >
            지금 지원하기 <ChevronRight className="ml-2" />
          </button>
          <button 
            onClick={() => setCurrentView('PROGRAMS')}
            className="px-10 py-4 bg-white/90 backdrop-blur text-teal-600 border-2 border-teal-200 hover:border-teal-300 font-bold rounded-full text-lg shadow-sm hover:bg-teal-50 transition-all flex items-center justify-center font-rounded"
          >
            프로그램 안내
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProgramIntro = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-rounded font-bold text-gray-800 mb-6">오페어 프로그램이란?</h2>
        <div className="w-24 h-2 bg-teal-100 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto break-keep tracking-tight">
          오페어(Au Pair) 프로그램은 해외 청년들이 미국 가정에 함께 거주하며 아이를 돌보고, 
          문화 교류와 글로벌 경험을 쌓는 <span className="text-teal-600 font-bold">공식 문화 교환 프로그램</span>입니다.
        </p>
      </div>

      {/* 2 Column Info */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
           <div className="flex items-center mb-6">
             <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-5 shadow-sm">
               <HeartHandshake size={28} />
             </div>
             <h3 className="text-2xl font-bold font-rounded text-gray-800">가족의 일원이자 돌봄 파트너</h3>
           </div>
           {/* Improved Typography: break-keep, tracking-tight, text-left, relaxed line-height */}
           <p className="text-gray-600 leading-8 text-lg break-keep tracking-tight text-left">
             오페어는 단순한 베이비시터가 아닙니다. <span className="font-bold text-teal-700/80">가족의 일원</span>으로서 생활하며 아이들의 성장과 일상을 함께하는 진정한 돌봄 파트너입니다. 
             <br className="mb-3 block"/>
             호스트 패밀리에게는 <span className="font-bold text-gray-700">안정적인 상주형 돌봄</span>을, 오페어에게는 미국 현지 생활을 통한 <span className="font-bold text-gray-700">언어 능력 향상과 국제적 감각</span>을 키울 수 있는 기회를 제공합니다.
           </p>
        </div>
        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
           <div className="flex items-center mb-6">
             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-5 shadow-sm">
               <CheckCircle size={28} />
             </div>
             <h3 className="text-2xl font-bold font-rounded text-gray-800">1986년 설립, 미국 최초의 공식 지정</h3>
           </div>
           {/* Improved Typography */}
           <p className="text-gray-600 leading-8 text-lg break-keep tracking-tight text-left">
             본 프로그램은 1986년에 설립된 <span className="font-bold text-blue-700/80">미국 최초의 공식 지정 오페어 프로그램</span>으로, 미국 정부의 규정에 따라 엄격하고 체계적으로 운영됩니다.
             <br className="mb-3 block"/>
             지원 단계부터 비자 발급, 출국 전 교육, 그리고 현지 정착에 이르기까지. <span className="font-bold text-gray-700">전 과정에 걸친 전문적인 지원 시스템</span>을 통해 누구나 안심하고 참여할 수 있습니다.
           </p>
        </div>
      </div>

      {/* Hero Highlight Section for "Choice" */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1F6B83] text-white shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
         
         <div className="relative p-10 md:p-16 text-center">
            <span className="inline-block bg-teal-400 text-[#1F6B83] px-4 py-1 rounded-full text-sm font-bold mb-6 font-rounded shadow-md animate-pulse">
              ✨ Industry First
            </span>
            <div className="flex flex-col items-center mb-6">
              <MousePointerClick className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-3xl md:text-4xl font-rounded font-bold leading-tight break-keep">
                "오페어도 호스트 패밀리를 선택할 수 있는<br className="hidden md:block" /> 유일한 프로그램"
              </h3>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8 text-teal-50 leading-8 text-lg break-keep tracking-tight text-center font-light">
              <p>
                <span className="block text-white font-bold text-xl md:text-2xl mb-3 leading-snug">
                  2026년부터, Au Pair in America®는 오페어 에이전시 최초로<br className="hidden md:block" />
                  오페어가 직접 호스트 패밀리를 선택할 수 있는 시스템을 도입했습니다.
                </span>
              </p>
              
              <p className="opacity-90 leading-8">
                기존에는 대부분의 프로그램에서 호스트가족만이 오페어의 프로필을 볼 수 있고 매칭이 이루어졌다면, 
                <span className="text-white font-medium font-bold"> Au Pair in America®</span>는 오페어의 선호, 성향, 목표를 존중하는 매칭 방식을 통해 
                더 만족도 높은 경험을 제공합니다.
              </p>

              <div className="bg-teal-900/20 rounded-2xl p-6 border border-teal-500/30 shadow-inner">
                <p>
                  이는 오페어와 호스트 패밀리 모두에게 <span className="text-teal-200 font-medium">더 안정적이고 성공적인 매칭</span>을 가능하게 하며,
                  현재 이 제도를 공식적으로 운영하는 에이전시는 <br className="md:hidden"/>
                  <span className="text-white font-bold border-b-2 border-teal-400">Au Pair in America®가 유일합니다.</span>
                </p>
              </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-rounded font-bold text-gray-800 mb-4">왜 오페어인아메리카인가요?</h2>
        <div className="w-24 h-2 bg-teal-100 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { 
            icon: Globe, 
            title: "글로벌 네트워크", 
            desc: "30년 이상의 경험을 가진\n세계 최대 오페어 기관입니다.",
            color: "bg-blue-100 text-blue-600"
          },
          { 
            icon: Users, 
            title: "검증된 호스트", 
            desc: "철저한 신원 조회와 인터뷰를 통과한\n미국 가정과 매칭됩니다.",
            color: "bg-rose-100 text-rose-600"
          },
          { 
            icon: BookOpen, 
            title: "교육 기회 제공", 
            desc: "미국 대학 수업을 들으며\n최대 $500의 교육비를 지원받으세요.",
            color: "bg-amber-100 text-amber-600"
          }
        ].map((feature, idx) => (
          <div key={idx} className="text-center p-10 rounded-[3rem] hover:bg-[#f0fdfa] transition-colors duration-500 border border-transparent hover:border-teal-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transform">
            <div className={`w-24 h-24 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-8 transform transition-transform hover:rotate-12 hover:scale-110 duration-300`}>
              <feature.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold font-rounded mb-4 text-gray-700">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed font-medium whitespace-pre-line">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ 
  config,
  setCurrentView
}: { 
  config: SiteConfig;
  setCurrentView: (v: ViewState) => void;
}) => (
  <footer className="bg-slate-800 text-white py-16 rounded-t-[3rem] mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-rounded font-bold mb-6 text-teal-200">오페어인아메리카</h3>
          <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
            미국 최초로 공식 지정된 오페어 프로그램 스폰서로 안전하고 유익한 미국 문화 교류 기회를 최우선으로 합니다.
          </p>
        </div>
        
        <div>
          <h4 className="font-rounded font-bold text-xl mb-6 text-teal-100">바로가기</h4>
          <ul className="space-y-4 text-slate-300">
            {['프로그램 소개', '지원 자격'].map((item) => (
              <li 
                key={item} 
                onClick={() => setCurrentView('PROGRAMS')}
                className="hover:text-teal-200 cursor-pointer transition-colors flex items-center"
              >
                <ChevronRight size={14} className="mr-2 opacity-50"/>{item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-rounded font-bold text-xl mb-6 text-teal-100">문의하기</h4>
          <ul className="space-y-4 text-slate-300 mb-6">
            <li className="flex items-center"><Mail size={18} className="mr-3 text-teal-400"/> {config.contactEmail}</li>
            <li className="flex items-center"><Phone size={18} className="mr-3 text-teal-400"/> 050-6737-2554</li>
          </ul>
          <div className="flex space-x-4">
            <button 
              onClick={() => window.open('https://www.instagram.com/aupairinamerica?igsh=MTdlenA2OXd1MmR5MA==', '_blank')}
              className="p-3 bg-slate-700 rounded-full hover:bg-rose-400 hover:text-white transition-all cursor-pointer transform hover:scale-110"
            >
              <Instagram size={20} />
            </button>
            <button 
              onClick={() => window.open('https://blog.naver.com/aupairinamericakr', '_blank')}
              className="p-3 bg-slate-700 rounded-full hover:bg-green-500 hover:text-white transition-all cursor-pointer transform hover:scale-110"
            >
              <FileText size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-500 text-sm">
        © 2024 Au Pair in America Korea. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [posts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [siteConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFormStatus('IDLE'); // Reset form status when view changes
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('SUBMITTING');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeekadyo", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('SUCCESS');
        form.reset();
      } else {
        setFormStatus('ERROR');
      }
    } catch (error) {
      setFormStatus('ERROR');
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'APPLY':
        return (
          <div className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-teal-500 font-bold tracking-wider text-sm mb-3 block">APPLICATION</span>
                <h2 className="text-4xl font-rounded font-bold text-gray-800 mb-4">지원하기 & 상담 문의</h2>
                <p className="text-xl text-gray-500 font-medium">꿈을 향한 첫 걸음, 오페어인아메리카가 함께합니다.</p>
                <div className="w-20 h-1.5 bg-teal-200 mx-auto rounded-full mt-6"></div>
              </div>

              {/* Layout changed from 5-col to 2-col to give more space to Contact Info */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info Card */}
                <div className="space-y-6">
                  {/* Changed design to center-aligned content for better use of space */}
                  <div className="bg-[#f0fdfa] p-10 rounded-[2.5rem] border border-teal-100 shadow-sm text-center">
                    <h3 className="text-2xl font-bold font-rounded text-teal-800 mb-8">문의처 정보</h3>
                    <div className="space-y-8">
                      {/* Email */}
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-white rounded-full text-teal-500 shadow-sm mb-3">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-teal-600 font-bold uppercase mb-1">Email</p>
                          <p className="text-gray-700 font-medium text-lg whitespace-nowrap">{siteConfig.contactEmail}</p>
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-white rounded-full text-teal-500 shadow-sm mb-3">
                          <Phone size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-teal-600 font-bold uppercase mb-1">Phone</p>
                          <p className="text-gray-700 font-medium text-lg">050-6737-2554</p>
                          <p className="text-xs text-gray-400 mt-1">부재중 시 문자 남겨주시면 영업시간 내 연락드리겠습니다.</p>
                        </div>
                      </div>
                      {/* Process */}
                      <div className="flex flex-col items-center">
                        <div className="p-4 bg-white rounded-full text-teal-500 shadow-sm mb-3">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-teal-600 font-bold uppercase mb-1">Process</p>
                          <p className="text-gray-700 font-medium break-keep leading-7">
                            신청서 접수 → 온라인 설명회 → 담당자 배정 및 인터뷰 → 매칭 어플리케이션 작성 → 호스트가족 매칭 → 비자 발급 → 출국
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 text-center">
                    <h3 className="text-lg font-bold font-rounded text-rose-800 mb-3">📢 확인해주세요!</h3>
                    <p className="text-rose-700/80 text-sm leading-relaxed break-keep">
                      현재 한국 지사는 태국 방콕에 위치한 본사와 통합 운영되고 있으며, 한국 지원자분들의 원활한 프로그램 지원을 위해 오페어인아메리카를 직접 경험한 전(前) 오페어이자 공식 앰버서더와 상담 후 현지 담당자 배정합니다.
                    </p>
                  </div>
                </div>

                {/* Application Form */}
                <div>
                  {formStatus === 'SUCCESS' ? (
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-teal-100 flex flex-col items-center justify-center text-center h-full min-h-[500px] animate-in fade-in zoom-in duration-500">
                      <div className="w-24 h-24 bg-teal-100 text-teal-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-bold font-rounded text-gray-800 mb-4">전송 완료했습니다</h3>
                      <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                        소중한 문의 감사합니다.<br/>
                        담당자가 내용 확인 후 24시간 이내에(영업일 기준) 기재해주신 연락처로 연락드리겠습니다.
                      </p>
                      <button 
                        onClick={() => setFormStatus('IDLE')}
                        className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl transition-colors"
                      >
                        추가 문의하기
                      </button>
                    </div>
                  ) : (
                    <form className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative" onSubmit={handleSubmit}>
                      {formStatus === 'ERROR' && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl flex items-center text-sm font-bold animate-pulse">
                          <AlertCircle size={20} className="mr-2" />
                          문제가 발생했습니다. 다시 시도해주세요
                        </div>
                      )}
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 ml-1" htmlFor="name">이름</label>
                          <input type="text" id="name" name="name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all" placeholder="홍길동" required />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 ml-1" htmlFor="phone">연락처</label>
                          <input type="tel" id="phone" name="phone" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all" placeholder="010-0000-0000" required />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 ml-1" htmlFor="email">이메일</label>
                          <input type="email" id="email" name="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all" placeholder="example@naver.com" required />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2 ml-1" htmlFor="message">문의 내용</label>
                          <textarea id="message" name="message" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 transition-all h-32 resize-none" placeholder="궁금하신 점이나 간단한 자기소개를 남겨주세요." required></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={formStatus === 'SUBMITTING'}
                          className="w-full py-5 bg-teal-400 hover:bg-teal-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-lg shadow-teal-100 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center text-lg"
                        >
                          {formStatus === 'SUBMITTING' ? (
                            <>
                              <Loader2 size={20} className="mr-2 animate-spin" /> 전송 중...
                            </>
                          ) : (
                            <>
                              <Send size={20} className="mr-2" /> 문의하기
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'PROGRAMS':
        return (
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="text-teal-500 font-bold tracking-wider text-sm mb-3 block">PROGRAM BENEFITS</span>
                <h2 className="text-4xl font-rounded font-bold text-gray-800 mb-4">오페어 프로그램 지원 혜택</h2>
                <p className="text-xl text-gray-500 font-medium">지원부터 출국, 현지 생활까지 든든하게 지원합니다</p>
                <div className="w-20 h-1.5 bg-teal-200 mx-auto rounded-full mt-6"></div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                {[
                  {
                    icon: FileCheck,
                    color: "bg-blue-100 text-blue-600",
                    title: "지원서 작성 지원",
                    desc: "본사 팀과 공식 파트너가 지원서 작성부터 승인까지 단계별로 도와드립니다."
                  },
                  {
                    icon: Plane,
                    color: "bg-green-100 text-green-600",
                    title: "비자 지원",
                    desc: "비자 신청 전 과정에 대해 명확하고 체계적인 가이드를 제공합니다."
                  },
                  {
                    icon: BookOpen,
                    color: "bg-orange-100 text-orange-600",
                    title: "출국 전 교육",
                    desc: "출국 전에 꼭 알아야 할 정보와 실질적으로 도움이 되는 교육과 팁을 제공합니다."
                  },
                  {
                    icon: MapPin,
                    color: "bg-rose-100 text-rose-600",
                    title: "뉴욕 오리엔테이션",
                    desc: "미국 도착 후, 다른 신규 오페어들과 함께하는 3일간의 뉴욕 오리엔테이션으로 생활을 시작합니다."
                  },
                  {
                    icon: HeartHandshake,
                    color: "bg-purple-100 text-purple-600",
                    title: "지속적인 현지 지원",
                    desc: "미국 현지에 배정된 전담 커뮤니티 카운슬러가 생활 전반에 걸쳐 도움과 지원을 제공합니다."
                  },
                  {
                    icon: PartyPopper,
                    color: "bg-yellow-100 text-yellow-600",
                    title: "커뮤니티 & 교류",
                    desc: "미국 각 지역에서 정기적으로 열리는 모임과 이벤트를 통해 다른 오페어들과 교류할 수 있습니다."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold font-rounded text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Eligibility Section */}
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-rounded font-bold text-gray-800 mb-4">지원 자격 요건</h2>
                  <p className="text-gray-500">오페어 여정을 시작하기 전, 아래 조건을 충족해야 합니다.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Baby, label: "연령", value: "만 18세 ~ 26세" },
                    { icon: GraduationCap, label: "학력", value: "고등학교 졸업 이상" },
                    { icon: Car, label: "운전면허", value: "유효한 면허증 소지" },
                    { icon: Languages, label: "영어 능력", value: "의사소통 가능" },
                    { icon: Heart, label: "아동 돌봄", value: "200시간 이상 경력" },
                    { icon: Gavel, label: "범죄 이력", value: "범죄 이력 없음" },
                    { icon: Users, label: "가족 관계", value: "미혼 및 부양가족 없음" },
                    { icon: Sparkles, label: "참여 기간", value: "12개월 생활 가능" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 mr-4 shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold mb-1">{item.label}</div>
                        <div className="text-gray-800 font-bold text-lg">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        );

      case 'HOME':
      default:
        return (
          <>
            <Hero config={siteConfig} setCurrentView={handleViewChange} />
            <ProgramIntro />
            <Features />
            <section className="py-24 bg-[#f0fdfa]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-rounded font-bold text-gray-800 mb-4">참가자 후기</h2>
                  <p className="text-gray-500 font-medium">오페어인아메리카를 통해 꿈을 이룬 선배들의 이야기</p>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  {TESTIMONIALS.map(t => (
                    <div key={t.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-teal-50 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-lg transition-shadow">
                      <div className="w-24 h-24 rounded-full bg-teal-50 flex items-center justify-center mb-6 sm:mb-0 sm:mr-8 border-4 border-teal-100 shadow-inner overflow-hidden shrink-0">
                        {t.avatar && !t.avatar.includes('ICON') ? (
                          <img 
                            src={t.avatar} 
                            alt={t.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = '<div class="text-teal-400"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                            }}
                          />
                        ) : (
                          <User className="text-teal-400" size={40} />
                        )}
                      </div>
                      <div>
                        <p className="text-gray-600 italic mb-6 leading-relaxed text-lg break-keep">"{t.text}"</p>
                        <h4 className="font-bold text-xl text-gray-800 font-rounded">{t.name}</h4>
                        <span className="text-teal-500 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full mt-2 inline-block">{t.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-teal-200 selection:text-teal-900">
      <Navbar 
        currentView={currentView} 
        setCurrentView={handleViewChange} 
      />
      <main>
        {renderContent()}
      </main>
      <Footer config={siteConfig} setCurrentView={handleViewChange} />
    </div>
  );
}