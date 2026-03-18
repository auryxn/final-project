# Lab 4: Static Routing

## 🎯 Objective
Configure static routing in a triangle topology with 3 routers to ensure full network reachability.

## 🏗️ Topology
- 3 Routers (Router 0, 1, 2)
- 3 Switches
- 9 PCs

## 🛣️ Static Route Commands (Example)
```bash
Router0(config)# ip route 10.12.6.0 255.255.255.0 10.15.10.2
Router0(config)# ip route 192.168.7.0 255.255.255.0 10.15.10.10
```

## ✅ Verification
- `show ip route`
- `ping <remote_ip>`
