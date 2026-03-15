# 🧮 Calculator

A simple and elegant calculator built with **React Native + Expo**.

> This project has **no commercial purpose**. It's just a test app created to validate a **remote programming setup** between a **MacBook** and a **Windows PC** via **SSH**.

---

## 💡 About

The idea was simple: test whether it's possible to efficiently develop and build mobile apps remotely — coding on a MacBook via SSH from a Windows PC, with an AI assistant (Claude) doing the heavy lifting.

**Spoiler:** it works really well.

---

## 🖥️ Remote Setup

```
              ┌──────────── Tailscale VPN ────────────┐
              │                                       │
┌─────────────┤         SSH          ┌────────────────┤
│  Windows PC │◄────────────────────►│    MacBook      │
│  (terminal) │                      │  (dev server)   │
└──────┬──────┘                      └───────┬────────┘
       │                                     │
       │  ┌─────────────┐            ┌───────▼────────┐
       └─►│  Browser     │           │  iOS Simulator  │
          │  (Web mode)  │           └────────────────┘
          └─────────────┘
                              ┌─────────────┐
                              │   iPhone     │
                              │  (Expo Go)   │
                              └─────────────┘
                              (local Wi-Fi / independent)
```

- **Windows** — the main workstation, used to connect remotely
- **MacBook** — where the code lives, builds, and runs via Expo/Xcode
- **Tailscale** — VPN that makes everything possible: SSH connection, browser preview (web mode), and simulator access — all through the same network
- **iPhone / Expo Go** — the only part that doesn't go through Tailscale, connects directly to the dev server
- **Claude** — the one who actually wrote the code 🤖

---

## 🚀 Getting Started

```bash
git clone https://github.com/RafaelHGOliveira/simple-calculator.git
cd simple-calculator
npm install
npx expo start
```

| Platform | Command |
|----------|---------|
| iOS Simulator | `npx expo run:ios` |
| Expo Go | `npx expo start --go` |
| Web (browser) | `npx expo start --web` |

---

## 🛠️ Stack

- [Expo SDK 55](https://expo.dev/)
- React Native
- JavaScript

---

## 📱 Features

- Basic operations (+, −, ×, ÷)
- Percentage
- Sign toggle (+/−)
- Backspace
- Responsive layout (iOS and Web)
- Dark theme

---

*Made with ☕, SSH, and AI.*
