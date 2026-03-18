# Lab 8: NAT (Network Address Translation)

## 🎯 Objective
Configure address translation to allow private networks to access public segments and implement Port Security.

## 🏗️ NAT Types
1. **Static NAT:** One-to-one mapping for servers.
2. **PAT (Overload):** Many-to-one mapping for client networks using ACLs.

## 🛡️ Key Commands
```bash
# PAT Configuration
Router(config)# access-list 1 permit 172.24.26.0 0.0.0.255
Router(config)# ip nat inside source list 1 interface serial 0/0 overload
Router(config)# interface f0/0
Router(config-if)# ip nat inside
Router(config)# interface s0/0
Router(config-if)# ip nat outside
```
