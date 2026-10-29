---
title: Redes fixas e móveis
summary: Três fases práticas sobre tecnologias de acesso, MPLS com engenharia de tráfego e redes móveis, em ambientes emulados com CORE e EVE-NG.
year: 2025
context: UMinho · Mestrado em Eng. Informática · RFM
stack: [CORE, EVE-NG, MPLS, iperf]
repo: https://github.com/Jp1823/RFM
featured: true
order: 3
---

## Fase 1: Tecnologias de acesso e análise de pacotes

Escolha e avaliação de uma tecnologia de acesso integrada numa topologia de teste no emulador **CORE**. Vários cenários analisados com `iperf`, `ping` e `traceroute` para comparar o desempenho do tráfego.

## Fase 2: MPLS e engenharia de tráfego

Topologia **MPLS** no **EVE-NG**, com equipamentos de cliente (CE), routers de fronteira (PE/LER) e routers de núcleo (P/LSR) a fazer comutação por etiquetas.

- Engenharia de tráfego com **ACLs** e **Policy-Based Routing**, criando túneis distintos para diferentes tipos de tráfego (por exemplo HTTP e UDP).
- Resultado: caminhos de encaminhamento diferenciados dentro da rede.

## Fase 3: Redes móveis

Terceira fase sobre redes móveis. Os detalhes estão no repositório.
