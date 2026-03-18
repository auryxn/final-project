# Network Lab 4: Static Routing Triangle

## 🎯 Task Overview
Configure static routing between three routers (Router 0, Router 1, Router 2) forming a triangle topology. Connect each router to a local network (LAN A, LAN B, LAN C) and ensure full reachability.

## 🛠️ Configuration Guide

### 1. Interface Setup (CLI)
For each router, assign IP addresses to FastEthernet/GigabitEthernet interfaces connected to the switches and other routers.

```ios
Router> enable
Router# conf t
Router(config)# interface fa0/0
Router(config-if)# ip address <LAN_IP> 255.255.255.0
Router(config-if)# no shutdown
```

### 2. Static Route Definition
To reach remote LANs, each router must know the next-hop IP or outgoing interface.
*Example for Router 0:*
```ios
Router(config)# ip route <LAN_B_Network> 255.255.255.0 <R1_Interface_IP>
Router(config)# ip route <LAN_C_Network> 255.255.255.0 <R2_Interface_IP>
```

### 3. Verification
*   `show ip route`: Check the routing table for 'S' (Static) flags.
*   `ping`: Test connectivity from a PC in LAN A to a PC in LAN C.

---
*Generated Solution for Variant Assignment.*
