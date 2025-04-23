
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Оптимальное сочетание платежных средств
          </h2>
          <p className="text-xl mb-8">
            В современном мире наиболее эффективно комбинировать разные типы денег и способы хранения
            для достижения максимальной финансовой гибкости и безопасности.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💵</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Наличные</h3>
                <p className="text-white/80">
                  Держите небольшую сумму наличных для повседневных расходов и экстренных ситуаций.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Безналичные</h3>
                <p className="text-white/80">
                  Используйте карты и онлайн-банкинг для большинства регулярных платежей и покупок.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-colors">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Инвестиции</h3>
                <p className="text-white/80">
                  Диверсифицируйте сбережения через разные инвестиционные инструменты для роста капитала.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-white text-primary-800 hover:bg-gray-100"
              onClick={() => {
                const section = document.getElementById('money-types');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Начать финансовое планирование
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
