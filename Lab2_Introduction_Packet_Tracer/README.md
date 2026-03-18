# Lab 2: Introduction to Packet Tracer

## 🎯 Objective
Create a basic network topology, assign IP addresses according to the variant, and verify connectivity via ICMP (ping).

## 🛠️ Configuration (Variant Example)
- **Net 1:** 172.24.26.0/24
- **Net 2:** 10.8.27.0/24
- **Net 3:** 172.25.29.0/24

### IP Assignment Rule
`Address = Net Address + Link Number`.
Example for PC0 (Link 1): `172.24.26.1`.

## 🛡️ Commands
```bash
Router> enable
Router# conf t
Router(config)# interface FastEthernet 0/0
Router(config-if)# ip address 172.24.26.3 255.255.255.0
Router(config-if)# no shutdown
```
