import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import CourseCard, { type Course } from "./CourseCard";

// Import course images
import imgAdministracao from "@/assets/courses/administracao.jpg";
import imgAnaliseSistemas from "@/assets/courses/analise-sistemas.jpg";
import imgRecursosHumanos from "@/assets/courses/recursos-humanos.jpg";
import imgPedagogia from "@/assets/courses/pedagogia.jpg";
import imgGestaoTI from "@/assets/courses/gestao-ti.jpg";
import imgNegociosImobiliarios from "@/assets/courses/negocios-imobiliarios.jpg";
import imgLogistica from "@/assets/courses/logistica.jpg";
import imgProcessosGerenciais from "@/assets/courses/processos-gerenciais.jpg";
import imgGestaoMarketing from "@/assets/courses/gestao-marketing.jpg";
import imgCienciasContabeis from "@/assets/courses/ciencias-contabeis.jpg";
import imgGestaoComercial from "@/assets/courses/gestao-comercial.jpg";
import imgSegurancaPublica from "@/assets/courses/seguranca-publica.jpg";
import imgGestaoPublica from "@/assets/courses/gestao-publica.jpg";
import imgServicoSocial from "@/assets/courses/servico-social.jpg";
import imgMarketingDigital from "@/assets/courses/marketing-digital.jpg";
import imgGestaoFinanceira from "@/assets/courses/gestao-financeira.jpg";

const CoursesSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const courses: Course[] = [
    {
      title: "Administração",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "3.200h",
      semesters: "8 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      badge: "MAIS PROCURADO",
      image: imgAdministracao,
      url: "#oferta"
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "2.000h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      highlight: "ÁREA DE TI",
      image: imgAnaliseSistemas,
      url: "#oferta"
    },
    {
      title: "Gestão de Recursos Humanos",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgRecursosHumanos,
      url: "#oferta"
    },
    {
      title: "Pedagogia",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "3.200h",
      semesters: "8 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      isLaunchingSoon: true,
      image: imgPedagogia,
      url: "#oferta"
    },
    {
      title: "Gestão da Tecnologia da Informação",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "2.000h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      highlight: "ÁREA DE TI",
      image: imgGestaoTI,
      url: "#oferta"
    },
    {
      title: "Negócios Imobiliários",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgNegociosImobiliarios,
      url: "#oferta"
    },
    {
      title: "Logística",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgLogistica,
      url: "#oferta"
    },
    {
      title: "Processos Gerenciais",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgProcessosGerenciais,
      url: "#oferta"
    },
    {
      title: "Gestão de Marketing",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgGestaoMarketing,
      url: "#oferta"
    },
    {
      title: "Ciências Contábeis",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "3.000h",
      semesters: "8 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgCienciasContabeis,
      url: "#oferta"
    },
    {
      title: "Gestão Comercial",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgGestaoComercial,
      url: "#oferta"
    },
    {
      title: "Segurança Pública",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgSegurancaPublica,
      url: "#oferta"
    },
    {
      title: "Gestão Pública",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgGestaoPublica,
      url: "#oferta"
    },
    {
      title: "Serviço Social",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "3.000h",
      semesters: "8 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgServicoSocial,
      url: "#oferta"
    },
    {
      title: "Marketing Digital",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      isLaunchingSoon: true,
      highlight: "NOVIDADE",
      image: imgMarketingDigital,
      url: "#oferta"
    },
    {
      title: "Gestão Financeira",
      type: "GRADUAÇÃO",
      modality: "EAD",
      hours: "1.600h",
      semesters: "4 Semestres",
      promoPrice: "R$ 149,90",
      regularPrice: "R$ 299,90",
      image: imgGestaoFinanceira,
      url: "#oferta"
    }
  ];

  const visibleCourses = courses.slice(0, visibleCount);
  const hasMore = visibleCount < courses.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, courses.length));
  };

  return (
    <section id="cursos" className="relative overflow-hidden">
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16 md:h-24 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="gradient-animated py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ESCOLHA SUA GRADUAÇÃO
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Cursos reconhecidos pelo MEC com certificação intermediária e flexibilidade para estudar onde e quando quiser
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>

          {/* Botão Ver Mais */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                onClick={handleShowMore}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg gap-2"
              >
                VER MAIS CURSOS
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* SVG Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default CoursesSection;
