
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Наличные деньги: итоги и выводы</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Так нужны ли наличные деньги в современном мире? Ответ зависит от многих факторов.
            </p>
          </div>
          
          <Card className="bg-white/10 border-none backdrop-blur-sm shadow-xl mb-10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-300" /> Баланс — ключ к успеху
                  </h3>
                  <p className="mb-4">
                    Оптимальным решением является сбалансированный подход — сочетание наличных и безналичных форм денег.
                    Распределение средств между разными формами и инструментами обеспечивает максимальную гибкость и безопасность.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-300" /> Будущее наличных
                  </h3>
                  <p>
                    Несмотря на развитие цифровых технологий, наличные деньги сохранят свою роль в обозримом будущем.
                    Они обеспечивают важную функцию автономности, конфиденциальности и устойчивости к техническим сбоям.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Хотите узнать больше?</h3>
            <p className="mb-6">Подпишитесь на нашу рассылку, чтобы получать самую актуальную информацию о финансах и деньгах</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-primary-300 focus:outline-none text-gray-800 w-full"
              />
              <Button className="bg-white text-primary-700 hover:bg-gray-100 whitespace-nowrap">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
