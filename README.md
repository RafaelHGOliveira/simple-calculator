# 🧮 Calculator

A simple and elegant calculator built with **React Native + Expo**.

> This project has **no commercial purpose**. It's just a test app created to validate a **remote programming setup** between a **MacBook** and a **Windows PC** via **SSH**.

---

## 💡 About

The idea was simple: test whether it's possible to efficiently develop and build mobile apps using a Windows PC as the main workstation, remotely connecting to a MacBook via SSH for iOS builds and simulator deployment.

**Spoiler:** it works really well.

---

## 🖥️ Remote Setup

```
┌─────────────┐         SSH         ┌─────────────┐
│  Windows PC │ ◄──────────────────► │   MacBook    │
│   (code)    │                      │  (iOS build) │
└─────────────┘                      └──────┬──────┘
                                            │
                                     ┌──────▼──────┐
                                     │   iPhone     │
                                     │  Simulator   │
                                     └─────────────┘
```

- **Windows** — where the code is written and edited
- **MacBook** — responsible for compiling and running the app via Expo/Xcode
- **SSH** — bridges the two machines together

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

*Made with ☕ and SSH.*
