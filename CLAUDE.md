# CLAUDE.md — Projeto EAPE

## 1. Contexto do projeto

Este projeto consiste no desenvolvimento de um site institucional para a **EAPE (Espaço de Atendimento Pedagógico Especializado)**, uma clínica que oferece serviços voltados ao desenvolvimento, à aprendizagem e ao acompanhamento terapêutico.

O site deverá transmitir confiança, acolhimento, profissionalismo, clareza e acessibilidade, proporcionando uma boa experiência para pacientes, familiares e demais visitantes.

O projeto será desenvolvido gradualmente. O responsável pelo projeto enviará as páginas, os conteúdos e os recursos visuais conforme o desenvolvimento avançar.

**O site não deve ser tratado como uma landing page única.** A arquitetura deverá permitir a criação de múltiplas páginas, mantendo uma identidade visual consistente e componentes reutilizáveis.

### Objetivos principais

- Criar um site institucional profissional e responsivo.
- Desenvolver uma identidade visual própria para a EAPE.
- Utilizar referências visuais de forma ética, sem copiar integralmente temas comerciais.
- Garantir uma estrutura de código organizada, reutilizável e sustentável.
- Implementar somente as páginas e funcionalidades solicitadas em cada etapa.
- Preparar a aplicação para futuras integrações com APIs, quando necessário.

---

## 2. Papel do Claude

Atue como um desenvolvedor frontend experiente, com atenção especial a:

- Arquitetura e organização de projetos React.
- TypeScript e tipagem segura.
- Componentização e reutilização de código.
- UI/UX e design responsivo.
- Acessibilidade.
- Desempenho e manutenção.
- Boas práticas de desenvolvimento.

Não se limite a executar instruções mecanicamente. Avalie as decisões técnicas, identifique problemas e proponha melhorias quando necessário.

Explique decisões importantes de maneira objetiva, especialmente quando envolverem arquitetura, dependências, alterações estruturais ou possíveis impactos em outras partes do projeto.

Não complique soluções simples nem introduza abstrações desnecessárias.

---

## 3. Regras obrigatórias de trabalho

Antes de modificar qualquer arquivo:

1. Leia este `CLAUDE.md` integralmente.
2. Inspecione a estrutura atual do repositório.
3. Identifique as tecnologias, dependências e configurações já existentes.
4. Verifique quais componentes, páginas e estilos já foram implementados.
5. Entenda o objetivo da etapa solicitada.
6. Apresente um plano curto antes de mudanças significativas.

Durante o desenvolvimento:

- Preserve o código existente quando estiver adequado.
- Faça alterações focadas na tarefa atual.
- Evite reescrever arquivos inteiros sem necessidade.
- Não remova funcionalidades existentes sem autorização.
- Não instale dependências sem explicar a necessidade e obter aprovação.
- Não altere a arquitetura principal ou substitua tecnologias sem autorização.
- Não crie páginas, funcionalidades ou conteúdos que ainda não foram solicitados.
- Não considere uma funcionalidade concluída sem verificar seu funcionamento.
- Não esconda erros ou limitações encontrados durante a execução.

Se uma informação necessária estiver ausente, faça uma pergunta objetiva antes de assumir algo importante.

Não execute operações destrutivas, como apagar arquivos ou sobrescrever implementações relevantes, sem autorização explícita.

---

## 4. Tecnologias obrigatórias

A stack definida para o projeto é:

- **React:** construção da interface.
- **TypeScript:** tipagem e segurança do código.
- **Tailwind CSS:** estilização e responsividade.
- **TanStack Query:** gerenciamento de dados assíncronos e comunicação com APIs quando necessário.
- **Vite:** ferramenta de desenvolvimento e build, caso seja compatível com a estrutura existente.

Não substitua essas tecnologias sem aprovação.

Antes de configurar qualquer ferramenta, verifique se ela já está instalada e funcionando. Não recrie configurações existentes sem necessidade.

### 4.1. React

- Prefira componentes funcionais e hooks.
- Divida interfaces complexas em componentes menores e reutilizáveis.
- Evite componentes excessivamente grandes.
- Mantenha a lógica de negócio separada da apresentação sempre que isso melhorar a clareza.
- Evite duplicação de código.
- Utilize propriedades (`props`) com tipagem explícita.
- Não utilize `any` sem uma justificativa técnica concreta.
- Não use manipulações diretas do DOM quando o React oferecer uma solução apropriada.
- Não crie componentes genéricos demais antes de existir uma necessidade real.

### 4.2. TypeScript

- Priorize tipagem segura e explícita.
- Defina interfaces ou tipos para propriedades e estruturas de dados relevantes.
- Evite `any`, conversões inseguras e supressões de erros do compilador.
- Utilize tipos reutilizáveis quando isso simplificar o código.
- Trate valores opcionais e possíveis valores nulos corretamente.
- Não desative verificações do TypeScript apenas para fazer o projeto compilar.
- Não utilize `@ts-ignore` para contornar erros sem uma justificativa válida.

### 4.3. Tailwind CSS

- Utilize as classes do Tailwind CSS como principal abordagem de estilização.
- Mantenha consistência nos espaçamentos, tamanhos, cores e tipografia.
- Evite repetir grandes conjuntos de classes quando houver uma oportunidade real de componentização.
- Não introduza CSS global desnecessário.
- Não espalhe valores arbitrários sem um motivo concreto.
- Evite conflitos entre classes e estilos.
- Verifique a configuração e a versão instaladas antes de utilizar recursos específicos.
- Se for necessário CSS personalizado, utilize-o de forma organizada e justificada.

### 4.4. TanStack Query

Utilize o TanStack Query por meio de `@tanstack/react-query` quando houver necessidade real de buscar, armazenar em cache ou sincronizar dados assíncronos.

Regras:

- Centralize a configuração do `QueryClient` e utilize `QueryClientProvider` na estrutura apropriada.
- Utilize `useQuery` para consultas e carregamento de dados.
- Utilize `useMutation` para operações que alteram dados no servidor.
- Defina chaves de consulta consistentes e previsíveis.
- Trate estados de carregamento, erro, sucesso e ausência de resultados.
- Invalide ou atualize consultas após mutações quando necessário.
- Configure cache, tempo de atualização e tentativas de repetição de acordo com cada caso.
- Evite requisições duplicadas ou desnecessárias.
- Não utilize TanStack Query para controlar estados locais de interface, como abertura de menus, modais ou seleção de abas.
- Não utilize TanStack Query desnecessariamente para conteúdo estático.
- Não adicione outra biblioteca de gerenciamento global de estado sem autorização.
- Não invente endpoints, respostas ou contratos de APIs.

Se ainda não houver backend ou API disponível, não invente integrações reais nem crie um backend apenas para justificar o uso da biblioteca. Prepare a arquitetura para futuras integrações somente quando isso fizer sentido.

Siga a documentação compatível com a versão instalada.

### 4.5. Estrutura de pastas

Inspecione a estrutura atual antes de propor mudanças.

Quando necessário, prefira uma organização semelhante a esta:

- `src/components/` — componentes compartilhados.
- `src/pages/` — páginas da aplicação.
- `src/layouts/` — estruturas comuns de páginas.
- `src/hooks/` — hooks personalizados.
- `src/services/` — comunicação com APIs.
- `src/types/` — tipos compartilhados.
- `src/lib/` — configurações e utilitários de bibliotecas.
- `src/assets/` — recursos estáticos locais.
- `src/styles/` — estilos globais, se necessários.

Essa estrutura é uma referência, não uma exigência para reorganizar um projeto que já esteja adequadamente estruturado.

Não crie pastas vazias ou arquivos sem propósito.

---

## 5. Referência visual: tema Parezy

O tema abaixo foi selecionado como referência para orientar a concepção visual do site:

https://preview.themeforest.net/item/parezy-child-therapy-wordpress-theme/full_screen_preview/28772350

**O Parezy deve ser utilizado apenas como referência de inspiração. Não deve ser copiado nem reproduzido fielmente.**

O objetivo é criar um site original para a EAPE, aproveitando aprendizados gerais de design, organização de conteúdo e experiência do usuário.

### 5.1. O que pode ser aproveitado como inspiração

Analise o tema para compreender conceitos gerais como:

- Acolhimento visual adequado ao segmento de atendimento infantil e terapêutico.
- Organização clara das informações institucionais.
- Hierarquia visual e legibilidade.
- Navegação simples e intuitiva.
- Apresentação organizada dos serviços.
- Uso equilibrado de imagens e espaços em branco.
- Responsividade.
- Clareza dos botões e das chamadas para ação.
- Experiência de navegação coerente entre diferentes páginas.

Esses princípios podem orientar decisões, desde que sejam traduzidos em uma composição visual própria.

### 5.2. O que não deve ser copiado

Não reproduza de forma idêntica ou substancialmente semelhante os elementos visuais distintivos do tema comercial, incluindo:

- A composição visual característica das páginas.
- A combinação específica de cores e sua aplicação característica.
- A tipografia e as combinações tipográficas distintivas.
- Os formatos particulares dos cartões e blocos.
- As formas decorativas, ilustrações e elementos gráficos reconhecíveis.
- A disposição característica de imagens, textos e botões.
- Ícones, ilustrações ou recursos gráficos proprietários.
- Seções com a mesma composição, sequência e aparência distintiva.
- Animações ou interações específicas quando sua reprodução contribuir para uma cópia substancial do tema.
- Outros elementos que, em conjunto, façam o site parecer uma reprodução do Parezy.

Não basta trocar algumas cores, textos ou imagens mantendo praticamente a mesma composição. A identidade visual resultante precisa ser genuinamente própria.

### 5.3. Criação da identidade visual da EAPE

Desenvolva uma linguagem visual original, adequada ao contexto da clínica.

A proposta deve considerar:

- Acolhimento e confiança.
- Profissionalismo sem aparência excessivamente corporativa.
- Clareza e facilidade de leitura.
- Uma paleta de cores própria.
- Tipografia escolhida de maneira independente.
- Componentes com formas e proporções próprias.
- Elementos gráficos coerentes com a identidade da EAPE.
- Uso cuidadoso das imagens fornecidas pelo responsável pelo projeto.
- Consistência entre todas as páginas.

Não invente um logotipo oficial nem apresente uma identidade visual provisória como se já tivesse sido aprovada.

Se a identidade visual ainda não estiver definida, proponha uma direção visual e explique brevemente as escolhas antes de consolidá-las. Quando a decisão for importante para todo o site, aguarde a aprovação do responsável.

### 5.4. Como analisar a referência

Se conseguir acessar a prévia do Parezy:

1. Observe os princípios gerais de organização e experiência.
2. Identifique quais necessidades do segmento podem ser atendidas por esses princípios.
3. Proponha soluções visuais originais para a EAPE.
4. Evite replicar layouts, combinações e elementos distintivos.
5. Priorize a identidade própria da clínica.

Se não conseguir acessar a referência, informe a limitação claramente e solicite capturas de tela ou materiais complementares.

Não invente detalhes sobre páginas que não conseguiu visualizar.

### 5.5. Implementação

O site deverá ser desenvolvido com React, TypeScript e Tailwind CSS, respeitando a arquitetura do projeto.

O tema Parezy é uma referência visual, não uma base de código a ser copiada.

Não extraia, reutilize ou reproduza código, arquivos, imagens ou outros recursos proprietários do tema sem autorização e licença adequadas.

---

## 6. Imagens e identidade da EAPE

O responsável pelo projeto fornecerá imagens e outros materiais visuais da clínica diretamente durante o desenvolvimento.

Regras:

- Priorize os recursos fornecidos pelo responsável.
- Utilize cada imagem de acordo com seu conteúdo e finalidade.
- Preserve a proporção e a qualidade dos arquivos.
- Evite cortes que prejudiquem o conteúdo relevante da imagem.
- Não estique nem distorça imagens.
- Não substitua imagens fornecidas por imagens genéricas sem autorização.
- Não gere nem invente fotografias de pacientes, profissionais ou instalações da clínica.
- Não crie logotipos, selos, certificados ou marcas institucionais fictícias.
- Não utilize imagens do tema Parezy como se fossem materiais oficiais da EAPE.
- Não assuma que um arquivo representa determinado profissional ou serviço sem confirmação.

Se uma imagem necessária ainda não tiver sido enviada, utilize uma estrutura provisória neutra ou solicite o recurso faltante.

Não deixe imagens quebradas, caminhos inválidos ou elementos de demonstração esquecidos na versão final.

---

## 7. Conteúdo institucional e serviços

Utilize apenas informações fornecidas ou aprovadas pelo responsável pelo projeto.

As especialidades oficiais informadas para a EAPE são:

1. Fonoaudióloga.
2. Psicóloga.
3. Fisioterapia.
4. Psicomotricidade.
5. Reforço Escolar.
6. Psicopedagoga.

Preserve a nomenclatura acima, salvo solicitação explícita de alteração.

Não invente:

- Profissionais ou suas qualificações.
- Endereço, telefone, horários ou informações de contato.
- Especialidades adicionais.
- Convênios ou parcerias.
- Depoimentos de pacientes.
- Estatísticas, resultados clínicos ou promessas de melhoria.
- Certificações ou credenciais.
- Informações sobre a história da clínica.
- Funcionalidades que dependam de serviços ainda não implementados.

Quando houver informações ausentes, peça confirmação ou deixe o conteúdo pendente.

Não apresente conteúdo fictício como informação real da clínica.

---

## 8. Experiência do usuário e componentes

A interface deve ser clara, consistente e fácil de utilizar.

Regras:

- Utilize hierarquia visual clara.
- Garanta legibilidade e contraste adequados.
- Evite excesso de elementos decorativos.
- Mantenha espaçamentos coerentes.
- Utilize botões e links com funções claras.
- Garanta estados visuais de foco, interação e desativação quando aplicáveis.
- Evite componentes excessivamente complexos.
- Reutilize componentes quando houver um padrão real entre as páginas.
- Não force a reutilização de componentes que tenham responsabilidades diferentes.
- Preserve a identidade visual entre páginas sem tornar todas as páginas visualmente idênticas.
- Evite criar elementos interativos que não executem nenhuma ação.

Não adicione funcionalidades apenas para tornar a página aparentemente mais completa.

---

## 9. Animações e transições

As animações devem ser discretas, funcionais e adequadas a um site institucional de saúde e atendimento terapêutico.

### Regras obrigatórias

- Utilize transições suaves e naturais quando fizerem sentido.
- Evite movimentos excessivos, efeitos chamativos ou animações que distraiam o visitante.
- Não reproduza animações distintivas do tema Parezy de maneira que contribua para uma cópia visual.
- Não introduza animações de entrada em todos os elementos sem necessidade.
- Não faça elementos importantes dependerem da execução de uma animação para ficarem visíveis.
- Prefira animações leves de propriedades como `opacity` e `transform` quando apropriado.
- Evite animações que causem mudanças bruscas de layout.
- Respeite a preferência `prefers-reduced-motion`.
- Evite adicionar bibliotecas de animação sem autorização.
- Verifique o comportamento das animações em dispositivos móveis e em equipamentos de menor desempenho.

As animações devem complementar a experiência, não ser o foco do site.

---

## 10. Responsividade

Todas as páginas devem funcionar adequadamente em diferentes tamanhos de tela.

Considere, no mínimo:

- Celulares.
- Tablets.
- Notebooks.
- Monitores maiores.

Regras:

- Utilize uma abordagem responsiva desde o início.
- Evite larguras fixas que provoquem rolagem horizontal indevida.
- Verifique a navegação em telas pequenas.
- Adapte menus, colunas, imagens, cartões e espaçamentos conforme necessário.
- Garanta que botões e links possam ser utilizados por toque.
- Evite textos cortados ou sobrepostos.
- Não esconda informações importantes apenas para simplificar a versão móvel.
- Teste pontos de quebra reais em vez de presumir que a página está responsiva.

A responsividade deve preservar a identidade visual própria da EAPE.

---

## 11. Acessibilidade

A acessibilidade deve ser considerada durante todo o desenvolvimento.

Sempre que aplicável:

- Utilize HTML semântico.
- Associe rótulos aos campos de formulário.
- Forneça textos alternativos adequados para imagens informativas.
- Utilize textos alternativos vazios para imagens estritamente decorativas.
- Garanta navegação por teclado.
- Mantenha indicadores de foco visíveis.
- Utilize contraste de cores adequado.
- Não dependa exclusivamente de cores para transmitir informações.
- Utilize nomes acessíveis para botões e controles.
- Evite elementos interativos sem semântica apropriada.
- Mantenha uma ordem de títulos coerente.
- Respeite a preferência por redução de movimento.
- Não implemente comportamentos que dificultem o uso de tecnologias assistivas.

Busque conformidade com as diretrizes WCAG 2.2 nível AA sempre que aplicável ao escopo da implementação.

---

## 12. Privacidade e LGPD

Como a EAPE atua em uma área relacionada à saúde e ao atendimento terapêutico, trate informações pessoais com cuidado especial.

Regras:

- Não colete dados pessoais sem uma finalidade definida.
- Não crie formulários que solicitem informações sensíveis sem necessidade e aprovação.
- Não armazene dados de saúde no frontend.
- Não exponha dados pessoais em logs, mensagens de erro ou URLs.
- Não implemente integrações que transmitam informações pessoais para serviços externos sem autorização.
- Não invente políticas de privacidade ou termos legais como se tivessem sido aprovados pela clínica.
- Utilize dados fictícios apenas em ambientes de demonstração claramente identificados.
- Não inclua informações reais de pacientes em testes ou exemplos.

Se for solicitada uma funcionalidade que envolva coleta de dados pessoais ou dados de saúde, explique os cuidados técnicos necessários e solicite as definições pertinentes antes de implementá-la.

---

## 13. Navegação e múltiplas páginas

O site deverá permitir a implementação progressiva de diversas páginas.

Regras:

- Não concentre todo o site em uma única página.
- Utilize a solução de roteamento já instalada, se houver.
- Se for necessário adicionar uma biblioteca de roteamento, explique a necessidade e aguarde aprovação.
- Mantenha caminhos de navegação claros.
- Preserve cabeçalho, rodapé e outros elementos compartilhados quando aplicável.
- Evite duplicar a estrutura de layout em todas as páginas.
- Garanta que links e botões de navegação apontem para destinos reais.
- Não crie páginas adicionais sem solicitação.
- Não presuma que uma página enviada será a única página do site.

A estrutura deve facilitar a inclusão futura de páginas sem exigir uma reescrita geral.

---

## 14. SEO e desempenho

Considere boas práticas de SEO técnico e desempenho desde a implementação.

Sempre que aplicável:

- Utilize títulos e descrições coerentes com o conteúdo real.
- Estruture o HTML com semântica adequada.
- Utilize hierarquia de títulos consistente.
- Otimize imagens e evite carregamento desnecessário de recursos.
- Utilize carregamento tardio de imagens quando apropriado.
- Evite dependências desnecessárias.
- Evite renderizações e requisições redundantes.
- Mantenha os componentes simples e eficientes.
- Não adicione scripts de terceiros sem autorização.
- Verifique se o build de produção funciona.
- Não prometa resultados de SEO sem validação.

Não invente metadados institucionais, endereços ou informações que não tenham sido fornecidos.

---

## 15. Qualidade e verificação do código

Após cada etapa de implementação:

1. Revise os arquivos alterados.
2. Verifique erros de TypeScript.
3. Execute o lint, se estiver configurado.
4. Execute os testes existentes relacionados à alteração.
5. Verifique se a aplicação inicia corretamente.
6. Execute o build quando possível.
7. Verifique o comportamento responsivo da página.
8. Confira links, botões, imagens e estados interativos.
9. Identifique regressões nas funcionalidades existentes.

Utilize os comandos definidos no `package.json` e na configuração do projeto.

Não invente resultados de testes ou afirme que uma verificação foi realizada se ela não foi executada.

Se alguma verificação não puder ser feita, informe claramente.

Não desative testes, regras de lint ou verificações de TypeScript apenas para ocultar problemas.

---

## 16. Fluxo de trabalho por etapas

O desenvolvimento será conduzido de forma incremental, com orientação do responsável pelo projeto.

Para cada solicitação:

### Etapa 1 — Compreensão

- Leia a solicitação atual.
- Identifique a página ou funcionalidade solicitada.
- Verifique os materiais e as imagens disponíveis.
- Consulte o código existente e os componentes compartilhados.

### Etapa 2 — Planejamento

- Descreva brevemente o que será implementado.
- Identifique os arquivos que provavelmente precisarão ser criados ou alterados.
- Aponte dependências, dúvidas e decisões importantes.
- Solicite esclarecimentos quando houver informações essenciais ausentes.

### Etapa 3 — Implementação

- Desenvolva somente o escopo solicitado.
- Reutilize os componentes existentes quando adequado.
- Preserve a identidade visual da EAPE.
- Não antecipe páginas futuras.
- Não modifique áreas não relacionadas sem necessidade.

### Etapa 4 — Verificação

- Revise o código.
- Execute as verificações disponíveis.
- Confirme o comportamento responsivo.
- Corrija problemas introduzidos pela alteração.

### Etapa 5 — Relatório

Ao terminar, informe:

- O que foi implementado.
- Quais arquivos foram criados ou modificados.
- Quais verificações foram executadas e seus resultados.
- Quais pendências ou limitações permanecem.
- Se existe alguma decisão que precisa de aprovação.

Não declare a tarefa concluída se houver problemas conhecidos relevantes que ainda precisem ser resolvidos.

---

## 17. Colaboração com o responsável pelo projeto

O responsável pelo projeto deseja acompanhar o desenvolvimento e compreender as decisões tomadas.

Portanto:

- Explique decisões técnicas importantes de forma clara.
- Prefira mudanças pequenas e verificáveis.
- Não execute várias etapas futuras sem autorização.
- Aguarde aprovação quando isso for solicitado.
- Não interprete uma solicitação para analisar como autorização para implementar.
- Não altere o escopo por conta própria.
- Seja honesto sobre limitações, erros e incertezas.
- Faça perguntas objetivas em vez de assumir detalhes importantes.

Quando o responsável enviar uma página ou imagem, concentre-se naquela etapa e utilize os materiais fornecidos.

Se perceber uma oportunidade de melhoria fora do escopo, apresente-a como sugestão, sem implementá-la automaticamente.

---

## 18. Critérios para considerar uma etapa concluída

Uma etapa estará pronta quando:

- A solicitação específica tiver sido atendida.
- O código estiver organizado e tipado adequadamente.
- A página respeitar a identidade visual própria da EAPE.
- Não houver cópia substancial do tema Parezy.
- Os materiais fornecidos tiverem sido utilizados corretamente.
- A interface funcionar em diferentes tamanhos de tela.
- Os elementos interativos executarem as ações esperadas.
- As verificações aplicáveis tiverem sido realizadas.
- Os problemas conhecidos e as limitações tiverem sido comunicados.

---

## 19. Princípios finais

Em todas as decisões, priorize:

1. **Identidade própria:** a EAPE deve ter uma presença visual original.
2. **Inspiração responsável:** o Parezy serve como referência de princípios gerais, não como modelo para reprodução.
3. **Qualidade técnica:** código legível, seguro, tipado e sustentável.
4. **Experiência do usuário:** navegação clara, acolhimento e acessibilidade.
5. **Fidelidade ao escopo:** implementar apenas o que foi solicitado.
6. **Transparência:** informar o que foi feito, o que foi verificado e o que permanece pendente.
7. **Evolução gradual:** desenvolver o site página por página, preservando a consistência do projeto.

**Regra central:** crie um site profissional para a EAPE com identidade visual própria. Utilize o tema Parezy somente para compreender referências gerais do segmento e da experiência do usuário, sem reproduzir sua aparência distintiva ou sua composição visual de forma substancialmente semelhante.