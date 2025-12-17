# Task Management Web — v1

Projeto simples em React para **cadastro e listagem de tarefas**, criado com o objetivo de consolidar fundamentos essenciais da biblioteca antes de avançar para tópicos mais avançados.

Este projeto **não busca ser completo**, mas sim didático e bem estruturado.

---

## Objetivo do projeto

Praticar os conceitos fundamentais do React, incluindo:

* Criação e reutilização de componentes
* Uso de formulários controlados
* Manipulação de estado com `useState`
* Imutabilidade de dados
* Renderização dinâmica de listas com `map`
* Organização básica de componentes
* Fluxo de dados via props

---

## Funcionalidades

* Cadastro de tarefas por meio de formulário
* Cada tarefa possui:

  * título
  * descrição
  * prioridade
* Exibição das tarefas em formato de lista
* Renderização dinâmica de cada tarefa como um card

### Limitações intencionais

Este projeto **não inclui**:

* edição de tarefas
* exclusão de tarefas
* persistência de dados
* consumo de API
* gerenciamento global de estado

Essas decisões foram tomadas para manter o foco nos fundamentos.

---

## Conceitos praticados

### Componentização

A aplicação é dividida em componentes com responsabilidades claras, como:

* formulário
* campos reutilizáveis
* lista de tarefas
* card individual de tarefa

### Estado e imutabilidade

* O estado é gerenciado com `useState`
* Novas tarefas são adicionadas criando **novos arrays**, respeitando a imutabilidade
* Atualizações de estado disparam re-renderizações automáticas

### Renderização de listas

* Uso de `Array.map` para transformar dados em UI
* Uso de `key` estável para identificação dos elementos

---

## Tecnologias utilizadas

* React
* Vite
* JavaScript (ES6+)
* CSS / Tailwind CSS *(se aplicável)*

---

## Como executar o projeto

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

---

## Aprendizados

Este projeto serviu como base para:

* entender como dados fluem em aplicações React
* aprender quando e por que criar componentes
* diferenciar lógica de UI
* aplicar conceitos de programação declarativa

---

## Próximos passos (planejados)

* validação de formulário
* exclusão de tarefas
* edição de tarefas
* persistência com LocalStorage ou API
* refatoração para hooks customizados

Essas melhorias serão exploradas em versões futuras, após a consolidação dos fundamentos.

---

## Observação final

Este projeto faz parte de um processo de aprendizado progressivo em React, priorizando clareza, organização e entendimento dos conceitos, em vez de complexidade prematura.

---
