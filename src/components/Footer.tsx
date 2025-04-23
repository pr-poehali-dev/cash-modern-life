
import { Link } from "react-router-dom";
import { Banknote } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <Banknote size={24} />
              <span>Деньги сегодня</span>
            </Link>
            <p className="text-gray-400">
              Информационный ресурс о роли наличных и безналичных денег 
              в современном мире.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Виды денег</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Наличные</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Безналичные</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Цифровые валюты</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Электронные деньги</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Хранение</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Банковские вклады</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Инвестиции</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Наличное хранение</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Драгоценные металлы</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Информация</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">О проекте</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Условия использования</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 Деньги сегодня. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
