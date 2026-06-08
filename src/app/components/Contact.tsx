import React from 'react';
import { Send, Phone, MessageCircle, Youtube, Globe, Instagram } from 'lucide-react';

export function Contact() {
  const socials = [
    { name: 'Telegram', icon: Send, link: 'https://t.me/dela_vremya', user: '@DashaFinenko' },
    { name: 'ВКонтакте', icon: Globe, link: 'https://vk.ru/dela_vremya', user: '@daria_finenko' },
    { name: 'YouTube', icon: Youtube, link: 'https://youtube.com/@darya_finenko', user: '@darya_finenko' },
    { name: 'Сайт', icon: Globe, link: 'https://daryafinenko.ru/', user: 'daryafinenko.ru' },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2">
            <div className="p-8 sm:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-8">
                Записывайтесь <br /> <span className="text-amber-500 italic">прямо сейчас</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Выберите удобный способ связи. Я отвечу вам в течение дня, и мы подберем время для встречи.
              </p>

              <div className="space-y-6">
                <a 
                  href="https://t.me/DashaFinenko" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors shadow-lg shadow-amber-600/20">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">Написать в Telegram</p>
                    <p className="text-xl font-bold text-white">@DashaFinenko</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Позвонить</p>
                    <p className="text-xl font-bold text-white">+7 911 344 5887</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-16 lg:p-20 bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-8">Другие социальные сети:</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all group"
                  >
                    <social.icon className="w-6 h-6 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-bold text-white mb-1">{social.name}</p>
                    <p className="text-xs text-gray-500">{social.user}</p>
                  </a>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 text-center lg:text-left">
                <p className="text-gray-500 text-sm">
                  Индивидуальный предприниматель Финенко Дарья Сергеевна
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
