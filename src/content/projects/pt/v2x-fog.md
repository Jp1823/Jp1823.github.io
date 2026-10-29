---
title: Rede veicular V2X com Fog Computing
summary: Protótipo de rede veicular inteligente com comunicação V2X e controlo distribuído num nó fog, simulado com Eclipse MOSAIC e SUMO.
year: 2025
context: UMinho · Mestrado em Eng. Informática · NPR
stack: [Java, Eclipse MOSAIC, SUMO, V2X]
repo: https://github.com/Jp1823/NPR_Project
featured: true
order: 1
---

## Objetivo

Desenhar e implementar um protótipo funcional de uma rede veicular inteligente, com comunicação **V2X** e controlo distribuído através de **Fog Computing**. A simulação usa o **Eclipse MOSAIC** em conjunto com o simulador de tráfego **SUMO**, para ter mobilidade e cenários rodoviários realistas.

O sistema tem três tipos de nós:

- **Veículos (OBU)**
- **Unidades de beira de estrada (RSU)**
- **Nó fog**

## O que foi implementado

- **Mensagens CAM dinâmicas**: os veículos emitem CAM com intervalo adaptativo (100 ms a 1 s), disparado por mudanças relevantes de posição, direção ou velocidade.
- **Alertas de acidente**: o nó fog deteta colisões potenciais e gera eventos com nível de gravidade, que provocam travagem automática nos veículos afetados. O alerta é encaminhado para a RSU mais próxima do veículo alvo.
- **Encaminhamento multi-salto**: veículos e RSUs escolhem o próximo salto pela proximidade geográfica ao destino, propagando eventos e ACKs até chegarem ao alvo.
