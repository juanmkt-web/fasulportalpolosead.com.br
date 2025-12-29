const Footer = () => {
  return (
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
            <a href="https://www.facebook.com/fasuleducacionalead/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img loading="lazy" width="32" height="32" src="/images/facebook.webp" alt="Facebook" className="max-w-full h-auto m-1 inline-block" />
            </a>
            <a href="https://www.instagram.com/fasulead/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img loading="lazy" width="29" height="30" src="/images/instagram.webp" alt="Instagram" className="max-w-full h-auto m-1 inline-block" />
            </a>
            <a href="https://www.youtube.com/channel/UCXFGu7TVBJPX5LuHtWu2OHQ" target="_blank" rel="noopener noreferrer" title="Youtube">
              <img loading="lazy" width="33" height="27" src="/images/youtube.webp" alt="Youtube" className="max-w-full h-auto m-1 inline-block" />
            </a>
            <a href="https://www.linkedin.com/company/fasul-educacional/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <img loading="lazy" width="29" height="29" src="/images/linkedin.webp" alt="Linkedin" className="max-w-full h-auto m-1 inline-block" />
            </a>
          </div>
          <br />
          <span className="porttxt">PORTARIA DE CREDENCIAMENTO EAD:</span>
          <br />
          <span className="txtrodape">
            A FACULDADE FASUL EDUCACIONAL EAD FOI CREDENCIADA DE ACORDO COM A PORTARIA Nº499 DE 08/07/2021, CONFORME PUBLICAÇÃO NO D.O.U. EM 09/07/2021.
          </span>
        </div>

        {/* Second Column - Institucional */}
        <div className="w-full lg:w-1/4 p-0">
          <h2 className="tituloRodape">Institucional</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/organizacao-administrativa">Organização Administrativa</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/corpo-docente">Corpo Docente</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/quem-somos">Quem Somos</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/modalidades-de-ensino">Modalidades de Ensino</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/processos-seletivos">Processos Seletivos</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/regimento-interno">Regimento Interno</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formas-de-ingresso">Formas de Ingresso</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/projetos-e-pesquisas">Projetos e Pesquisas</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-e-responsabilidade-social">Extensão e Responsabilidade Social</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/comissao-propria-de-avaliacao">Comissão Própria de Avaliação</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/egressos">Egressos</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formaturas">Formaturas</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/perguntas-frequentes">Perguntas Frequentes</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/central-de-empregos-e-carreiras">Central de Empregos e Carreiras</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cadastro-do-egresso">Cadastro do Egresso</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/bibliotecas">Bibliotecas</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/desenvolvimento-artistico-e-cultural">Desenvolvimento Artístico e Cultural</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/revista-cientifica-fasul">Revista Científica FASUL</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/plano-de-desenvolvimento-institucional">Plano de Desenvolvimento Institucional - (PDI)</a></li>
          </ul>
        </div>

        {/* Third Column - Educação a Distância */}
        <div className="w-full lg:w-1/4 p-0">
          <h2 className="tituloRodape">Educação a Distância</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-ead">Graduação EAD</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/posgraduacao/cursos">Pós-Graduação EAD</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-universitaria-ead">Extensão Universitária EAD</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/mba-ead">MBA EAD</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-profissionalizantes-ead">Cursos Profissionalizantes EAD</a></li>
          </ul>
          <h2 className="tituloRodape mt-6">Educação Presencial<br />SEMIPRESENCIAL</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-presencial">Graduação</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-pos-graduacao-presencial">Pós-Graduação</a></li>
          </ul>
          <h2 className="tituloRodape mt-6">Manuais</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/manual-geral-do-aluno-fasul-2025.pdf" target="_blank">Manual do Aluno</a></li>
          </ul>
          <h2 className="tituloRodape mt-6">Acadêmico</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma">Registro de Diplomas</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma-historico">Registro de Históricos</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/tcc-repositorio">Repositórios de TCC</a></li>
          </ul>
        </div>

        {/* Fourth Column - Bolsas e Regulamentos */}
        <div className="w-full lg:w-1/4 p-0">
          <h2 className="tituloRodape">Bolsas e Financiamentos</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/concursodebolsas">Programa de Bolsas</a></li>
          </ul>
          <h2 className="tituloRodape mt-6">Regulamentos</h2>
          <ul className="p-0 text-left">
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-enade.pdf" target="_blank">Regulamento e Termo de Compromisso Enade</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-complementares.pdf" target="_blank">Regulamento de Atividades Complementares</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-extensao.pdf" target="_blank">Regulamento de Atividades de Extensão</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-pict.pdf" target="_blank">Regulamento do Programa de Iniciação Científica e Tecnológica - PICT</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamentos-campanhas-promocionais.pdf" target="_blank">Regulamentos de Campanhas Promocionais</a></li>
            <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-certificacao-intermediaria.pdf" target="_blank">Regulamento Certificação Intermediária</a></li>
          </ul>
          <h2 className="tituloRodape mt-6 pt-2">Reclame Aqui</h2>
          <div className="flex flex-row gap-2 items-center mt-2 pb-4">
            <div id="reputation-ra"></div>
            <div id="ra-verified-seal"></div>
          </div>
          <div className="mt-5">
            <p className="text-footer-acreditamos m-0">Nós Acreditamos em Deus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
