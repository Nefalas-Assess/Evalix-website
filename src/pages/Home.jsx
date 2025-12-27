import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  Baby,
  Sparkles,
  Star,
  PartyPopper,
  CheckCircle,
  X
} from 'lucide-react';

const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleAccept = () => {
    setAnswer('yes');
    setShowConfetti(true);
  };

  const handleDecline = () => {
    setAnswer('no');
  };

  // Confetti particles component
  const Confetti = () => {
    const colors = ['#FF6B9D', '#C44569', '#F8B500', '#7ED6DF', '#E056FD', '#686DE0', '#FFBE76', '#FF7979'];
    const particles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: 8 + Math.random() * 8
    }));

    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-confetti"
            style={{
              left: `${p.left}%`,
              top: '-20px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
    );
  };

  // Floating hearts animation
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + (i * 8),
      delay: i * 0.3,
      duration: 4 + Math.random() * 3
    }));

    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {hearts.map((h) => (
          <Heart
            key={h.id}
            className="absolute text-pink-300/40 animate-float-up"
            style={{
              left: `${h.left}%`,
              bottom: '-50px',
              animationDelay: `${h.delay}s`,
              animationDuration: `${h.duration}s`,
            }}
            size={20 + Math.random() * 20}
          />
        ))}
      </div>
    );
  };

  if (answer === 'yes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
        {showConfetti && <Confetti />}
        <FloatingHearts />
        
        {/* Glowing background orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden relative z-20">
          <CardContent className="p-12 text-center">
            <div className="animate-bounce-slow mb-8">
              <div className="relative inline-block">
                <PartyPopper className="h-24 w-24 text-amber-500 mx-auto" />
                <Sparkles className="h-8 w-8 text-yellow-400 absolute -top-2 -right-2 animate-spin-slow" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              MERCI ! 🎉
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium">
              Tu viens d'accepter d'être le parrain d'une de nos jumelles !
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Heart className="h-12 w-12 text-rose-500 animate-pulse" fill="currentColor" />
              <Baby className="h-12 w-12 text-pink-400" />
              <Baby className="h-12 w-12 text-purple-400" />
              <Heart className="h-12 w-12 text-rose-500 animate-pulse" fill="currentColor" />
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Nous sommes tellement heureux et reconnaissants. Tu vas être un parrain extraordinaire ! 
            </p>
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
              <CheckCircle className="h-6 w-6" />
              Tu es officiellement Parrain !
            </div>
          </CardContent>
        </Card>

        <style>{`
          @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          @keyframes float-up {
            0% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-confetti { animation: confetti linear forwards; }
          .animate-float-up { animation: float-up ease-out infinite; }
          .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
          .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        `}</style>
      </div>
    );
  }

  if (answer === 'no') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 flex items-center justify-center p-4">
        <Card className="max-w-xl w-full bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Heart className="h-20 w-20 text-gray-300 mx-auto" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-700 mb-6">
              Ce n'est pas grave...
            </h1>
            
            <p className="text-xl text-gray-500 mb-8">
              On comprend, peut-être une autre fois ? 😊
            </p>
            
            <Button 
              onClick={() => setAnswer(null)}
              variant="outline"
              size="lg"
              className="rounded-full px-8"
            >
              Réfléchir encore
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-rose-200/30 rounded-full blur-2xl" />
      
      {/* Floating stars */}
      <Star className="absolute top-20 right-1/4 h-8 w-8 text-amber-300 animate-pulse" fill="currentColor" />
      <Star className="absolute bottom-32 left-1/4 h-6 w-6 text-pink-300 animate-pulse" style={{ animationDelay: '0.5s' }} fill="currentColor" />
      <Star className="absolute top-1/3 right-16 h-5 w-5 text-purple-300 animate-pulse" style={{ animationDelay: '1s' }} fill="currentColor" />
      <Sparkles className="absolute bottom-1/4 right-1/3 h-7 w-7 text-yellow-400 animate-bounce" />
      
      <Card 
        className={`max-w-3xl w-full bg-white/70 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden relative z-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        <CardContent className="p-8 md:p-16 text-center">
          {/* Twin babies illustration */}
          <div className="mb-10 flex justify-center items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <Baby className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>
              <Heart className="absolute -top-2 -right-2 h-8 w-8 text-rose-400 animate-pulse" fill="currentColor" />
            </div>
            
            <Heart className="h-10 w-10 text-rose-400/60" fill="currentColor" />
            
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-200 to-violet-300 rounded-full flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <Baby className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -left-2 h-8 w-8 text-amber-400 animate-bounce" />
            </div>
          </div>
          
          {/* Main question */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Acceptes-tu d'être
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              le parrain
            </span>
            <br />
            <span className="text-gray-700">
              d'une de nos jumelles ?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Ce serait un immense honneur pour nous 
            <Heart className="inline-block h-5 w-5 text-rose-400 mx-1 animate-pulse" fill="currentColor" />
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleAccept}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Heart className="mr-3 h-7 w-7 group-hover:scale-125 transition-transform" fill="currentColor" />
              Oui, j'accepte !
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              onClick={handleDecline}
              variant="outline"
              size="lg"
              className="text-gray-400 border-gray-200 hover:bg-gray-50 text-lg px-8 py-8 rounded-full transition-all duration-300"
            >
              <X className="mr-2 h-5 w-5" />
              Hmm, non...
            </Button>
          </div>
        </CardContent>
      </Card>

      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.3); opacity: 0; }
        }
        .animate-float-up { animation: float-up ease-out infinite; }
      `}</style>
    </div>
  );
};

export default Home;
