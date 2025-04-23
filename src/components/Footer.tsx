
import { Link } from "react-router-dom";
import { Banknote } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors">
              <Banknote size={24} />
              <span className="text-xl font-bold">Наличные сегодня</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Информационный ресурс о роли наличных денег в современном мире
              и оптимальных способах хранения финансов.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Разделы сайта</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Виды денег
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  История денег
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Хранение средств
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Полезные ресурсы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Блог о финансах
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Банковские сервисы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Инвестиционные платформы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Финансовая грамотность
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@nalichnye.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Москва, Россия</span>
              </li>
            </ul>
            
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <span className="text-2xl">📸</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
                <span className="text-2xl">🔴</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 Наличные сегодня. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
