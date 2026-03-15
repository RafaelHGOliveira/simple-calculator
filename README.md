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
                              ┌─────────────┐
                         ┌───►│   iPhone     │
                         │    │  (Expo Go)   │
┌─────────────┐  SSH  ┌──┴──────────┐       └─────────────┘
│  Windows PC │◄─────►│   MacBook    │
│  (terminal) │       │  (dev server)│       ┌─────────────┐
└──────┬──────┘       └──────────────┘  ┌───►│  iOS         │
       │                                │    │  Simulator   │
       │         Tailscale VPN          │    └─────────────┘
       └────────────────────────────────┘
       │
       │  ┌─────────────┐
       └─►│  Browser     │
          │  (Web mode)  │
          └─────────────┘
```

- **Windows** — the main workstation, used to connect remotely
- **MacBook** — where the code lives, builds, and runs via Expo/Xcode
- **SSH** — bridges the two machines together
- **Tailscale** — VPN that connects both machines on the same network, allowing the Windows PC to preview the app in the browser (web mode) and the iPhone to load it via Expo Go
- **Claude** — the one who actually wrote the code 🤖

---

## 🚀 Getting Started

```bash
cd calculadora
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
