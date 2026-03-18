# Network Lab 9: IPsec VPN Configuration

## 🎯 Task Overview
Establish a secure encrypted tunnel between two remote sites (LAN 1 <-> LAN 3) using IPsec VPN protocols on Cisco routers.

## 🛠️ Configuration Steps

### 1. ISAKMP Policy (Phase 1)
Define the security parameters for the initial connection.
```ios
Router(config)# crypto isakmp policy 10
Router(config-isakmp)# encryption 3des
Router(config-isakmp)# hash md5
Router(config-isakmp)# authentication pre-share
Router(config-isakmp)# group 1
Router(config)# crypto isakmp key <Preshared_Key> address <Remote_Peer_IP>
```

### 2. IPsec Transform Set (Phase 2)
Specify data encryption and authentication methods.
```ios
Router(config)# crypto ipsec transform-set TSET esp-3des esp-md5-hmac
```

### 3. Crypto Map & ACL
Define what traffic should be encrypted and map it to the remote peer.
```ios
Router(config)# access-list 100 permit ip <Local_Subnet> <Wildcard> <Remote_Subnet> <Wildcard>
Router(config)# crypto map CMAP 10 ipsec-isakmp
Router(config-crypto-map)# set peer <Remote_Peer_IP>
Router(config-crypto-map)# set transform-set TSET
Router(config-crypto-map)# match address 100
```

### 4. Interface Binding
Apply the crypto map to the outgoing WAN interface.
```ios
Router(config)# interface <WAN_IF>
Router(config-if)# crypto map CMAP
```

### 5. Verification
*   `show crypto isakmp sa`: Verify Phase 1 status.
*   `show crypto ipsec sa`: Verify encrypted/decrypted packet counters.

---
*Generated Solution for Secure Network Communication.*
