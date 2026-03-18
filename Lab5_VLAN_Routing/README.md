# Lab 5: VLAN & Inter-VLAN Routing

## 🎯 Objective
Configure Virtual LANs (VLAN 10, VLAN 20) and enable Inter-VLAN routing using a **Router-on-a-Stick** approach.

## 🏗️ VLAN Setup
- **VLAN 10:** ADMIN (Ports 10, 17)
- **VLAN 20:** GUEST (Ports 11, 18)

## 🛡️ Key Commands
### Switch (Trunking)
```bash
Switch(config)# interface FastEthernet 0/20
Switch(config-if)# switchport mode trunk
```

### Router (Sub-interfaces)
```bash
Router(config)# interface FastEthernet 0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 172.17.10.1 255.255.255.0
```
