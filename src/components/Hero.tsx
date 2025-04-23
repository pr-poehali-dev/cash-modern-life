
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Наличные деньги в современной жизни
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Необходимость или пережиток прошлого?
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            В эпоху цифровизации роль наличных денег меняется, но они по-прежнему остаются
            важной частью финансовой системы. Разберемся, почему это происходит и как
            правильно использовать разные виды денег в современном мире.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary-800 hover:bg-gray-100"
              onClick={() => {
                const section = document.getElementById('money-types');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Узнать о видах денег
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                const section = document.getElementById('money-storage');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Способы хранения
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
