# Lab 9: IPsec VPN

## 🎯 Objective
Configure a site-to-site IPsec VPN tunnel between two branch offices (LAN 1 and LAN 3) for secure data transmission over an untrusted WAN.

## 🛠️ VPN Configuration Steps
1. **ISAKMP Policy:** Define encryption (3DES/AES) and hashing (MD5/SHA).
2. **Transform Set:** Define IPsec encapsulation parameters.
3. **Crypto Map:** Link ACL traffic with the transform set and peer IP.
4. **Interface Activation:** Apply the crypto map to the WAN interface.

## ✅ Verification
- `show crypto isakmp sa`
- `show crypto ipsec sa`
