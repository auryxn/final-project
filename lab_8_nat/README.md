# Network Lab 8: Address Translation (NAT) & Port Security

## 🎯 Task Overview
Configure address translation (NAT/PAT) on a border router and implement Port Security on access switches to prevent unauthorized device connections.

## 🛠️ Configuration Steps

### 1. Static NAT (For Servers)
Map an internal server IP to a public IP.
```ios
Router(config)# ip nat inside source static <Server_Internal_IP> <Public_IP>
Router(config)# interface <Inside_IF>
Router(config-if)# ip nat inside
Router(config)# interface <Outside_IF>
Router(config-if)# ip nat outside
```

### 2. PAT (Port Address Translation) for LAN A
Allow multiple internal devices to share one public IP.
```ios
Router(config)# access-list 1 permit <Network_A_IP> <Wildcard_Mask>
Router(config)# ip nat inside source list 1 interface <Outside_IF> overload
```

### 3. Port Security (Switch)
Secure specific ports on the switch based on MAC addresses.
```ios
Switch(config)# interface <Port_ID>
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 1
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown
```

### 4. Verification
*   `show ip nat translations`: View active NAT mappings.
*   `show port-security interface <Port_ID>`: Verify security status.

---
*Generated Solution for Final Project Repository.*
