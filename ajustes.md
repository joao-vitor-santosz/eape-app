# Ajustes a confirmar com a cliente (EAPE)

Questões que dependem de decisão da clínica antes de seguir com o desenvolvimento.

---

## 1. Página individual para cada profissional?

**Situação atual (provisória):**
Cada especialidade terá uma página própria (ex.: `/especialidades/fonoaudiologa`) listando os profissionais daquela área em cartões. Cada cartão mostra um resumo (nome, foto, registro no conselho, formação, tempo de atuação) e um botão **"Ler mais"**, que expande a descrição completa **dentro do próprio cartão**, sem sair da página.

**O que precisa ser decidido:**
Se, além disso, cada profissional deve ter **uma página só dele** (ex.: `/profissionais/ana-souza`).

**Quando vale a pena ter a página individual:**
- O profissional tem bastante conteúdo: currículo extenso, cursos, abordagens, artigos, vídeos.
- A clínica quer **compartilhar o link de um profissional específico** (WhatsApp, Instagram, Google).
- A mesma pessoa atende em várias especialidades — a página individual reúne tudo num só lugar.
- Ajuda no Google: buscas pelo nome do profissional podem levar direto para a página dele.

**Quando o "Ler mais" é suficiente:**
- As descrições são curtas (um ou dois parágrafos).
- A família normalmente escolhe pela especialidade, e não por um profissional específico.
- Menos conteúdo para a clínica manter atualizado.

**Pergunta para a cliente:**
> "Vocês querem que cada profissional tenha uma página própria, com link para compartilhar, ou basta um resumo com 'Ler mais' dentro da página da especialidade?"

**Impacto técnico:** a estrutura dos dados já será feita de forma que a página individual possa ser adicionada depois sem retrabalho nas páginas de especialidade.

---

## 2. Descrição de cada especialidade

**Situação atual:** cada página de especialidade terá um texto curto explicando o que a área faz e quando procurá-la. Por enquanto são **textos provisórios**, marcados no código para validação.

**Pergunta para a cliente:**
> "Vocês podem enviar (ou aprovar) um texto curto para cada especialidade, explicando o que ela faz e para quem é indicada?"

---

## 3. Dados e autorização dos profissionais

**Informações previstas para cada profissional:** nome, cargo, foto, registro no conselho (CRFa, CRP, CREFITO, COFFITO etc.), formação, especializações, ano de início da atuação, resumo e especialidades em que atende.

**Pontos para confirmar:**
- Os dados reais e as fotos de cada profissional.
- **Autorização de cada profissional** para publicar nome, foto e formação no site (LGPD).
- Vários conselhos de saúde exigem o número de registro em qualquer divulgação profissional — confirmar os números.

**Observação:** até lá, o site usa **dados de demonstração** que aparecem **somente em desenvolvimento**. No site publicado, as páginas mostram "Em breve apresentaremos nossa equipe desta área" com botão de WhatsApp.

---

## 4. Outras pendências de conteúdo

- **E-mail** de contato.
- **Horário de atendimento.**
- **Textos provisórios** da Home ("Equipe Multidisciplinar" e "Conheça a EAPE") — validar ou substituir.
