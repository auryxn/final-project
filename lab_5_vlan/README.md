# Network Lab 5: VLAN & Inter-VLAN Routing

## 🎯 Task Overview
Configure Virtual Local Area Networks (VLANs) on three switches and set up **Router-on-a-Stick** for inter-VLAN communication.

## 🛠️ Configuration Steps

### 1. VLAN Creation on Switches (Sw1, Sw2, Sw3)
Define VLAN IDs and Names according to Variant.
```ios
Switch(config)# vlan 10
Switch(config-vlan)# name ADMIN_VARIANT
Switch(config)# vlan 20
Switch(config-vlan)# name GUEST_VARIANT
```

### 2. Port Assignment & Trunking
*   Access Ports: `switchport access vlan X` (Ports 10, 11, 17, 18).
*   Trunk Ports: `switchport mode trunk` (Port 20, Uplinks).

### 3. Router-on-a-Stick Configuration (Rt)
Create sub-interfaces on the router physical interface (e.g., fa0/0).
```ios
Router(config)# interface fa0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address <VLAN10_Gateway> 255.255.255.0
Router(config)# interface fa0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address <VLAN20_Gateway> 255.255.255.0
```

### 4. Verification
*   `show vlan brief`: Check VLAN status on switches.
*   `show interface trunk`: Verify trunk links.
*   `ping`: Verify communication between different VLANs via the router.

---
*Generated Solution for Final Project Repository.*
