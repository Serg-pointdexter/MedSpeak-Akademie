/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import About from './components/About';
import Registration from './components/Registration';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow p-4 sm:p-6 lg:p-8 flex flex-col xl:grid xl:grid-cols-12 gap-4 max-w-[1400px] w-full mx-auto pt-28">
        <Hero />
        <Registration />
        <About />
        <Curriculum />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
