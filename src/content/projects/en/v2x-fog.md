---
title: V2X vehicular network with Fog Computing
summary: Prototype of an intelligent vehicular network with V2X communication and distributed control on a fog node, simulated with Eclipse MOSAIC and SUMO.
year: 2025
context: UMinho · MSc Informatics Engineering · NPR
stack: [Java, Eclipse MOSAIC, SUMO, V2X]
repo: https://github.com/Jp1823/NPR_Project
featured: true
order: 1
---

## Goal

Design and implement a working prototype of an intelligent vehicular network, with **V2X** communication and distributed control through **Fog Computing**. The simulation uses **Eclipse MOSAIC** together with the **SUMO** traffic simulator for realistic mobility and road scenarios.

The system has three kinds of nodes:

- **Vehicles (OBU)**
- **Roadside units (RSU)**
- **Fog node**

## What was built

- **Dynamic CAM messages**: vehicles send CAMs at adaptive intervals (100 ms to 1 s), triggered by significant changes in position, heading or speed.
- **Accident alerts**: the fog node detects potential collisions and raises events with a severity level, which trigger automatic braking in the affected vehicles. Alerts are forwarded to the RSU closest to the target vehicle.
- **Multi-hop forwarding**: vehicles and RSUs pick the next hop by geographic proximity to the destination, propagating events and ACKs until they reach their target.
