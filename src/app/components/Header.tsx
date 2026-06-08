import React from 'react';
import { motion } from 'motion/react';
import { Clock, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Что входит в услугу', href: '#services' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Clock className="w-8 h-8 text-amber-600" />
            <span className="font-serif text-xl font-bold tracking-tight text-gray-900">
              Дарья Финенко
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors shadow-sm"
            >
              Записаться
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 text-center bg-amber-600 text-white px-5 py-3 rounded-xl text-base font-semibold shadow-sm"
            >
              Записаться
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
