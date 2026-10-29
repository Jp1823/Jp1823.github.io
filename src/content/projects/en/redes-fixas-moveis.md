---
title: Fixed and mobile networks
summary: Three hands-on phases covering access technologies, MPLS with traffic engineering and mobile networks, in emulated environments with CORE and EVE-NG.
year: 2025
context: UMinho · MSc Informatics Engineering · RFM
stack: [CORE, EVE-NG, MPLS, iperf]
repo: https://github.com/Jp1823/RFM
featured: true
order: 3
---

## Phase 1: Access technologies and packet analysis

Selection and evaluation of an access technology integrated into a test topology in the **CORE** emulator. Several scenarios analysed with `iperf`, `ping` and `traceroute` to compare traffic performance.

## Phase 2: MPLS and traffic engineering

An **MPLS** topology in **EVE-NG**, with customer edge devices (CE), provider edge routers (PE/LER) and core routers (P/LSR) doing label switching.

- Traffic engineering with **ACLs** and **Policy-Based Routing**, building separate tunnels for different kinds of traffic (e.g. HTTP and UDP).
- Result: differentiated forwarding paths within the network.

## Phase 3: Mobile networks

A third phase on mobile networks. Details are in the repository.
