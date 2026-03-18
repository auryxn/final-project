# Network Lab 6: Core Network Services (DHCP, DNS, HTTP)

## 🎯 Task Overview
Deploy and configure essential network services (DHCP for dynamic addressing, DNS for name resolution, and HTTP for web services) in a two-LAN topology.

## 🛠️ Configuration Guide

### 1. DHCP Server Setup
Configure the pool to assign addresses dynamically to clients in LAN 1.
*   **Pool Name:** LAN1_POOL
*   **Default Gateway:** Router 1 Interface IP
*   **DNS Server:** DNS Server IP (LAN 2)
*   **Start IP:** X.X.X.50

### 2. DNS Server Setup
Map domain names to HTTP server IP address.
*   Create an **A Record**: `www.smartcity.com` -> `HTTP_SERVER_IP`

### 3. HTTP Server Setup
Enable HTTP service and customize `index.html` to display "Smart City Eco-Monitor Live".

### 4. Router Forwarding
Ensure routers have static routes configured to reach remote networks (LAN1 <-> LAN2).

---
*Generated Solution for Network Services Milestone.*
