import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatWidget } from './components/ChatWidget';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { OrderPage } from './pages/OrderPage';
import { AboutPage } from './pages/AboutPage';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from './lib/firebase';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    // Validate connection to Firestore as per integration instructions
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error: any) {
        if (error.message?.includes('offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    };
    testConnection();
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetailsPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="py-12 border-t border-white/5 bg-teal-950/50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl uppercase tracking-tighter">W.M. Development</h3>
              <p className="text-sm text-slate-500 max-w-sm">Architecting the future through advanced digital systems and immersive presence.</p>
            </div>
            <div className="flex gap-12">
               <div className="space-y-3">
                  <p className="text-xs uppercase font-bold text-gold tracking-widest">Protocol</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li><a href="/" className="hover:text-gold transition-colors">Portfolio</a></li>
                    <li><a href="/about" className="hover:text-gold transition-colors">Introduction</a></li>
                    <li><a href="/order" className="hover:text-gold transition-colors">Sys-Orders</a></li>
                  </ul>
               </div>
               <div className="space-y-3">
                  <p className="text-xs uppercase font-bold text-gold tracking-widest">Connect</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li><a href="#" className="hover:text-gold transition-colors">Encryption</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors">Terminal</a></li>
                    <li><a href="#" className="hover:text-gold transition-colors">Datacenter</a></li>
                  </ul>
               </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-12 text-[10px] uppercase font-bold tracking-widest text-slate-600 flex justify-between">
             <span>© 2026 W.M. Global Holdings. All protocols reserved.</span>
             <span>Status: Online [v4.12.0]</span>
          </div>
        </footer>

        <ChatWidget />
      </div>
    </Router>
  );
}
