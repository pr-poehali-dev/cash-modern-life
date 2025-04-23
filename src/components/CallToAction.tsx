
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Узнайте больше о правильном управлении финансами</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Получите доступ к подробным материалам об эффективных стратегиях использования 
          и хранения денег в современном мире.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            Подписаться на рассылку
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
          >
            Скачать руководство
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
