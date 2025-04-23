
import { Link } from "react-router-dom";
import { Banknote, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <Banknote size={24} className="text-primary-400" />
              <span>Наличные сегодня</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Информационный портал о роли наличных денег в современном мире и эффективных методах 
              управления личными финансами.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#money-types" className="text-gray-400 hover:text-white transition-colors">Виды денег</a>
              </li>
              <li>
                <a href="#money-storage" className="text-gray-400 hover:text-white transition-colors">Хранение денег</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">О проекте</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Полезные ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Калькулятор инфляции</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Сравнение вкладов</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Калькулятор инвестиций</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Финансовый словарь</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Курсы валют</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: info@nalichnie.ru
              </li>
              <li className="text-gray-400">
                Телефон: +7 (XXX) XXX-XX-XX
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Обратная связь</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Предложить тему</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Сотрудничество</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2023 Наличные сегодня. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Условия использования
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
