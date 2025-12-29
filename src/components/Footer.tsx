import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Load Reclame Aqui reputation script
    const raReputationScript = document.createElement("script");
    raReputationScript.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
    raReputationScript.id = "ra-embed-reputation";
    raReputationScript.defer = true;
    raReputationScript.setAttribute("data-id", "cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh");
    raReputationScript.setAttribute("data-target", "reputation-ra");
    raReputationScript.setAttribute("data-model", "2");

    // Load Reclame Aqui verified seal script
    const raVerifiedScript = document.createElement("script");
    raVerifiedScript.src = "https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js";
    raVerifiedScript.id = "ra-embed-verified-seal";
    raVerifiedScript.defer = true;
    raVerifiedScript.setAttribute("data-id", "cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh");
    raVerifiedScript.setAttribute("data-target", "ra-verified-seal");
    raVerifiedScript.setAttribute("data-model", "2");

    document.body.appendChild(raReputationScript);
    document.body.appendChild(raVerifiedScript);

    return () => {
      // Cleanup scripts on unmount
      const existingReputation = document.getElementById("ra-embed-reputation");
      const existingVerified = document.getElementById("ra-embed-verified-seal");
      if (existingReputation) existingReputation.remove();
      if (existingVerified) existingVerified.remove();
    };
  }, []);

  return (
    <footer className="footer-main">
      {/* Footer Links */}
      <div className="footer-container white-background !p-0 sm:!p-5">
        <div className="footer-row">
          {/* First Column - Logo and Social */}
          <div className="w-full lg:w-1/4 p-0 text-left">
            <a href="https://www.fasuleducacional.edu.br/" title="Faculdade FASUL">
              <img
                loading="lazy"
                width="222"
                height="87"
                src="/images/logorodape.png"
                className="max-w-full h-auto mb-4"
                alt="FASUL LOGO"
              />
            </a>
            <a
              href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjE3NTc="
              title="QR Code MEC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                width="211"
                height="104"
                src="/images/qrcodemec.webp"
                className="mb-4"
                alt="QR Code MEC"
              />
            </a>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/quem-somos">
                  O GRUPO
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/polos-fasul-educacional">
                  SEJA POLO FASUL
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/trabalhe-conosco">
                  TRABALHE CONOSCO
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/assessoria-imprensa">
                  ASSESSORIA DE IMPRENSA
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/termos-de-uso">
                  TERMOS DE USO
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/ouvidoria">
                  OUVIDORIA
                </a>
              </li>
            </ul>
            <div className="text-left p-0 mt-4">
              <a
                href="https://www.facebook.com/fasuleducacionalead/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <img
                  loading="lazy"
                  width="32"
                  height="32"
                  src="/images/facebook.webp"
                  alt="Facebook"
                  className="max-w-full h-auto m-1 inline-block"
                />
              </a>
              <a href="https://www.instagram.com/fasulead/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img
                  loading="lazy"
                  width="29"
                  height="30"
                  src="/images/instagram.webp"
                  alt="Instagram"
                  className="max-w-full h-auto m-1 inline-block"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXFGu7TVBJPX5LuHtWu2OHQ"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <img
                  loading="lazy"
                  width="33"
                  height="27"
                  src="/images/youtube.webp"
                  alt="Youtube"
                  className="max-w-full h-auto m-1 inline-block"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/fasul-educacional/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <img
                  loading="lazy"
                  width="29"
                  height="29"
                  src="/images/linkedin.webp"
                  alt="Linkedin"
                  className="max-w-full h-auto m-1 inline-block"
                />
              </a>
            </div>
            <br />
            <span className="porttxt">PORTARIA DE CREDENCIAMENTO EAD:</span>
            <br />
            <span className="txtrodape">
              A FACULDADE FASUL EDUCACIONAL EAD FOI CREDENCIADA DE ACORDO COM A PORTARIA Nº499 DE 08/07/2021, CONFORME
              PUBLICAÇÃO NO D.O.U. EM 09/07/2021.
            </span>
          </div>

          {/* Second Column - Institucional */}
          <div className="w-full lg:w-1/4 p-0">
            <h2 className="tituloRodape">Institucional</h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/organizacao-administrativa">
                  Organização Administrativa
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/corpo-docente">
                  Corpo Docente
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/quem-somos">
                  Quem Somos
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/modalidades-de-ensino">
                  Modalidades de Ensino
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/processos-seletivos">
                  Processos Seletivos
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/regimento-interno">
                  Regimento Interno
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formas-de-ingresso">
                  Formas de Ingresso
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/projetos-e-pesquisas">
                  Projetos e Pesquisas
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-e-responsabilidade-social">
                  Extensão e Responsabilidade Social
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/comissao-propria-de-avaliacao">
                  Comissão Própria de Avaliação
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/egressos">
                  Egressos
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formaturas">
                  Formaturas
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/perguntas-frequentes">
                  Perguntas Frequentes
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/central-de-empregos-e-carreiras">
                  Central de Empregos e Carreiras
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cadastro-do-egresso">
                  Cadastro do Egresso
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/bibliotecas">
                  Bibliotecas
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/desenvolvimento-artistico-e-cultural"
                >
                  Desenvolvimento Artístico e Cultural
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/revista-cientifica-fasul">
                  Revista Científica FASUL
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/plano-de-desenvolvimento-institucional"
                >
                  Plano de Desenvolvimento Institucional - (PDI)
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Educação a Distância */}
          <div className="w-full lg:w-1/4 p-0">
            <h2 className="tituloRodape">Educação a Distância</h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-ead">
                  Graduação EAD
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/posgraduacao/cursos">
                  Pós-Graduação EAD
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-universitaria-ead">
                  Extensão Universitária EAD
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/mba-ead">
                  MBA EAD
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-profissionalizantes-ead">
                  Cursos Profissionalizantes EAD
                </a>
              </li>
            </ul>
            <h2 className="tituloRodape mt-6">
              Educação Presencial
              <br />
              SEMIPRESENCIAL
            </h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-presencial">
                  Graduação
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-pos-graduacao-presencial">
                  Pós-Graduação
                </a>
              </li>
            </ul>
            <h2 className="tituloRodape mt-6">Manuais</h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/manual-geral-do-aluno-fasul-2025.pdf"
                  target="_blank"
                >
                  Manual do Aluno
                </a>
              </li>
            </ul>
            <h2 className="tituloRodape mt-6">Acadêmico</h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma">
                  Registro de Diplomas
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma-historico">
                  Registro de Históricos
                </a>
              </li>
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/tcc-repositorio">
                  Repositórios de TCC
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Bolsas e Regulamentos */}
          <div className="w-full lg:w-1/4 p-0">
            <h2 className="tituloRodape"></h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a className="atxtrodape" href="https://www.fasuleducacional.edu.br/concursodebolsas">
                  Programa de Bolsas
                </a>
              </li>
            </ul>
            <h2 className="tituloRodape mt-6">Regulamentos</h2>
            <ul className="p-0 text-left">
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamento-enade.pdf"
                  target="_blank"
                >
                  Regulamento e Termo de Compromisso Enade
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-complementares.pdf"
                  target="_blank"
                >
                  Regulamento de Atividades Complementares
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-extensao.pdf"
                  target="_blank"
                >
                  Regulamento de Atividades de Extensão
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamento-pict.pdf"
                  target="_blank"
                >
                  Regulamento do Programa de Iniciação Científica e Tecnológica - PICT
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamentos-campanhas-promocionais.pdf"
                  target="_blank"
                >
                  Regulamentos de Campanhas Promocionais
                </a>
              </li>
              <li className="lirodape">
                <a
                  className="atxtrodape"
                  href="https://www.fasuleducacional.edu.br/docs/regulamento-certificacao-intermediaria.pdf"
                  target="_blank"
                >
                  Regulamento Certificação Intermediária
                </a>
              </li>
            </ul>
            <h2 className="tituloRodape mt-6 pt-2">Reclame Aqui</h2>
            <div className="flex flex-row gap-1 items-center pb-4">
              <div id="reputation-ra"></div>
              <div id="ra-verified-seal"></div>
            </div>
            <div className="mt-5">
              <p className="text-footer-acreditamos m-0">Nós Acreditamos em Deus</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <div className="footer-contact__container">
          <div className="footer-contact__intro">
            <span className="footer-contact__intro-title">Fale Conosco</span>
            <span className="footer-contact__intro-subtitle" id="footer-contact-title">
              Qual canal gostaria de falar?
            </span>
          </div>
          <div className="footer-contact__cards">
            {/* Call Card */}
            <div className="contact-channel-card contact-channel-card--call">
              <div className="contact-channel-card__label">
                <span className="contact-channel-card__label-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_rodape_call"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_rodape_call)">
                      <path
                        d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>
                LIGAÇÃO
              </div>
              <div className="contact-channel-card__list">
                <div className="contact-channel-card__item contact-channel-card__item--call">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">1. FAÇA SUA MATRÍCULA AGORA</div>
                    <div className="contact-channel-card__promo-banner">
                      <div className="contact-channel-card__promo-content">
                        <span className="contact-channel-card__promo-text contact-channel-card__promo-text--cyan">
                          GANHE 3 PÓS-GRADUAÇÕES
                        </span>
                        <span className="contact-channel-card__promo-text contact-channel-card__promo-text--pink">
                          + 10 CURSOS DE IA
                        </span>
                      </div>
                      <div className="contact-channel-card__promo-badge">
                        VAGAS
                        <br />
                        LIMITADAS
                      </div>
                    </div>
                    <p className="contact-channel-card__item-text">
                      Tire suas dúvidas sobre Cursos de Graduação e Pós-graduação e{" "}
                      <a
                        href="https://wa.me/5511947966982?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Realize seu Sonho com a Fasul.
                      </a>
                    </p>
                    <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path
                          d="M7.38 3.75H4.12A.62.62 0 0 0 3.5 4.37c0 7.71 6.26 13.97 13.97 13.97a.62.62 0 0 0 .62-.62v-3.27a.62.62 0 0 0-.62-.62c-.95 0-1.88-.16-2.78-.45a.63.63 0 0 0-.62.16l-1.98 1.98c-2.34-1.21-4.26-3.13-5.47-5.47l1.98-1.98a.62.62 0 0 0 .16-.62 9.96 9.96 0 0 1-.45-2.78.62.62 0 0 0-.62-.62Z"
                          fill="#0ac25c"
                        />
                      </svg>
                      (35) 2888-0007
                    </div>
                    <a
                      className="flex contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-link whatsapp-link"
                      href="https://wa.me/5531987885883?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Falar com setor de Matrículas por Whatsapp"
                    >
                      <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.37 3.35 15.76L2.05 19.95L6.36 18.68C7.7 19.44 9.3 19.89 11 19.89C15.97 19.89 20 15.86 20 10.89C20 5.92 15.97 2 11 2ZM8.53 7.2C8.38 6.83 8.22 6.82 7.99 6.81C7.85 6.8 7.69 6.8 7.52 6.8C7.36 6.8 7.1 6.86 6.88 7.1C6.66 7.34 6.03 7.93 6.03 9.14C6.03 10.35 6.9 11.52 7.03 11.69C7.16 11.86 8.76 14.45 11.27 15.42C13.33 16.2 13.78 16.03 14.22 15.98C14.66 15.93 15.66 15.38 15.87 14.81C16.08 14.24 16.08 13.76 16.01 13.64C15.94 13.52 15.78 13.45 15.53 13.32C15.28 13.19 14.1 12.6 13.87 12.52C13.64 12.44 13.48 12.39 13.32 12.64C13.16 12.89 12.69 13.45 12.55 13.62C12.41 13.79 12.27 13.81 12.02 13.68C11.77 13.55 10.97 13.29 10.03 12.45C9.29 11.79 8.78 10.97 8.64 10.72C8.5 10.47 8.62 10.34 8.75 10.21C8.87 10.09 9.01 9.89 9.14 9.75C9.27 9.61 9.31 9.5 9.39 9.33C9.47 9.16 9.43 9.02 9.36 8.89C9.29 8.76 8.8 7.54 8.53 7.2Z"
                            fill="#25D366"
                          />
                        </svg>
                        (31) 98788-5883
                      </div>
                    </a>
                  </div>
                </div>
                <div className="contact-channel-card__item contact-channel-card__item--call">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">2. CONVERSE CONOSCO</div>
                    <p className="contact-channel-card__item-text">
                      Estamos prontos para tirar suas dúvidas e te dar o suporte certo para qualquer necessidade sua.
                    </p>
                    <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path
                          d="M7.38 3.75H4.12A.62.62 0 0 0 3.5 4.37c0 7.71 6.26 13.97 13.97 13.97a.62.62 0 0 0 .62-.62v-3.27a.62.62 0 0 0-.62-.62c-.95 0-1.88-.16-2.78-.45a.63.63 0 0 0-.62.16l-1.98 1.98c-2.34-1.21-4.26-3.13-5.47-5.47l1.98-1.98a.62.62 0 0 0 .16-.62 9.96 9.96 0 0 1-.45-2.78.62.62 0 0 0-.62-.62Z"
                          fill="#0ac25c"
                        />
                      </svg>
                      (35) 2038-0560
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-channel-card contact-channel-card--whatsapp">
              <div className="contact-channel-card__label">
                <span className="contact-channel-card__label-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.37 3.35 15.76L2.05 19.95L6.36 18.68C7.7 19.44 9.3 19.89 11 19.89C15.97 19.89 20 15.86 20 10.89C20 5.92 15.97 2 11 2ZM8.53 7.2C8.38 6.83 8.22 6.82 7.99 6.81C7.85 6.8 7.69 6.8 7.52 6.8C7.36 6.8 7.1 6.86 6.88 7.1C6.66 7.34 6.03 7.93 6.03 9.14C6.03 10.35 6.9 11.52 7.03 11.69C7.16 11.86 8.76 14.45 11.27 15.42C13.33 16.2 13.78 16.03 14.22 15.98C14.66 15.93 15.66 15.38 15.87 14.81C16.08 14.24 16.08 13.76 16.01 13.64C15.94 13.52 15.78 13.45 15.53 13.32C15.28 13.19 14.1 12.6 13.87 12.52C13.64 12.44 13.48 12.39 13.32 12.64C13.16 12.89 12.69 13.45 12.55 13.62C12.41 13.79 12.27 13.81 12.02 13.68C11.77 13.55 10.97 13.29 10.03 12.45C9.29 11.79 8.78 10.97 8.64 10.72C8.5 10.47 8.62 10.34 8.75 10.21C8.87 10.09 9.01 9.89 9.14 9.75C9.27 9.61 9.31 9.5 9.39 9.33C9.47 9.16 9.43 9.02 9.36 8.89C9.29 8.76 8.8 7.54 8.53 7.2Z"
                      fill="white"
                    />
                  </svg>
                </span>
                WHATSAPP
              </div>
              <div className="contact-channel-card__list">
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">3. ATENDIMENTO SECRETARIA</div>
                    <p className="contact-channel-card__item-text">
                      Pendências de Documentos, Histórico, Declarações e Requerimentos.
                    </p>
                  </div>
                  <a
                    className="contact-channel-card__cta"
                    href="https://wa.me/5521991586516?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento%20da%20secretaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.37 3.35 15.76L2.05 19.95L6.36 18.68C7.7 19.44 9.3 19.89 11 19.89C15.97 19.89 20 15.86 20 10.89C20 5.92 15.97 2 11 2ZM8.53 7.2C8.38 6.83 8.22 6.82 7.99 6.81C7.85 6.8 7.69 6.8 7.52 6.8C7.36 6.8 7.1 6.86 6.88 7.1C6.66 7.34 6.03 7.93 6.03 9.14C6.03 10.35 6.9 11.52 7.03 11.69C7.16 11.86 8.76 14.45 11.27 15.42C13.33 16.2 13.78 16.03 14.22 15.98C14.66 15.93 15.66 15.38 15.87 14.81C16.08 14.24 16.08 13.76 16.01 13.64C15.94 13.52 15.78 13.45 15.53 13.32C15.28 13.19 14.1 12.6 13.87 12.52C13.64 12.44 13.48 12.39 13.32 12.64C13.16 12.89 12.69 13.45 12.55 13.62C12.41 13.79 12.27 13.81 12.02 13.68C11.77 13.55 10.97 13.29 10.03 12.45C9.29 11.79 8.78 10.97 8.64 10.72C8.5 10.47 8.62 10.34 8.75 10.21C8.87 10.09 9.01 9.89 9.14 9.75C9.27 9.61 9.31 9.5 9.39 9.33C9.47 9.16 9.43 9.02 9.36 8.89C9.29 8.76 8.8 7.54 8.53 7.2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">4. TUTORIA (APOIO AO ALUNO)</div>
                    <p className="contact-channel-card__item-text">
                      Dúvidas sobre o Conteúdo das Aulas e Suporte para seu Sucesso Acadêmico.
                    </p>
                  </div>
                  <a
                    className="contact-channel-card__cta"
                    href="https://wa.me/5511991401940?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20preciso%20de%20suporte%20da%20tutoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.37 3.35 15.76L2.05 19.95L6.36 18.68C7.7 19.44 9.3 19.89 11 19.89C15.97 19.89 20 15.86 20 10.89C20 5.92 15.97 2 11 2ZM8.53 7.2C8.38 6.83 8.22 6.82 7.99 6.81C7.85 6.8 7.69 6.8 7.52 6.8C7.36 6.8 7.1 6.86 6.88 7.1C6.66 7.34 6.03 7.93 6.03 9.14C6.03 10.35 6.9 11.52 7.03 11.69C7.16 11.86 8.76 14.45 11.27 15.42C13.33 16.2 13.78 16.03 14.22 15.98C14.66 15.93 15.66 15.38 15.87 14.81C16.08 14.24 16.08 13.76 16.01 13.64C15.94 13.52 15.78 13.45 15.53 13.32C15.28 13.19 14.1 12.6 13.87 12.52C13.64 12.44 13.48 12.39 13.32 12.64C13.16 12.89 12.69 13.45 12.55 13.62C12.41 13.79 12.27 13.81 12.02 13.68C11.77 13.55 10.97 13.29 10.03 12.45C9.29 11.79 8.78 10.97 8.64 10.72C8.5 10.47 8.62 10.34 8.75 10.21C8.87 10.09 9.01 9.89 9.14 9.75C9.27 9.61 9.31 9.5 9.39 9.33C9.47 9.16 9.43 9.02 9.36 8.89C9.29 8.76 8.8 7.54 8.53 7.2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">5. FINANCEIRO E ACORDO FÁCIL</div>
                    <p className="contact-channel-card__item-text">
                      Pague sem dor de cabeça! 2ª via de Boletos, Mensalidades, Negociação.
                    </p>
                  </div>
                  <a
                    className="contact-channel-card__cta"
                    href="https://wa.me/5531984088941?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20preciso%20de%20suporte%20financeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2C6.03 2 2 6.03 2 11C2 12.74 2.5 14.37 3.35 15.76L2.05 19.95L6.36 18.68C7.7 19.44 9.3 19.89 11 19.89C15.97 19.89 20 15.86 20 10.89C20 5.92 15.97 2 11 2ZM8.53 7.2C8.38 6.83 8.22 6.82 7.99 6.81C7.85 6.8 7.69 6.8 7.52 6.8C7.36 6.8 7.1 6.86 6.88 7.1C6.66 7.34 6.03 7.93 6.03 9.14C6.03 10.35 6.9 11.52 7.03 11.69C7.16 11.86 8.76 14.45 11.27 15.42C13.33 16.2 13.78 16.03 14.22 15.98C14.66 15.93 15.66 15.38 15.87 14.81C16.08 14.24 16.08 13.76 16.01 13.64C15.94 13.52 15.78 13.45 15.53 13.32C15.28 13.19 14.1 12.6 13.87 12.52C13.64 12.44 13.48 12.39 13.32 12.64C13.16 12.89 12.69 13.45 12.55 13.62C12.41 13.79 12.27 13.81 12.02 13.68C11.77 13.55 10.97 13.29 10.03 12.45C9.29 11.79 8.78 10.97 8.64 10.72C8.5 10.47 8.62 10.34 8.75 10.21C8.87 10.09 9.01 9.89 9.14 9.75C9.27 9.61 9.31 9.5 9.39 9.33C9.47 9.16 9.43 9.02 9.36 8.89C9.29 8.76 8.8 7.54 8.53 7.2Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="footer-copy">
        <span>COPYRIGHT © 1997-2025 - FASUL. TODOS OS DIREITOS RESERVADOS.</span>
        <a href="https://www.fasuleducacional.edu.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
          Política de privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
