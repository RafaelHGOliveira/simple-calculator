# 🧮 Calculadora

Uma calculadora simples e elegante feita com **React Native + Expo**.

> Este projeto **não tem fins comerciais**. É apenas um app de teste criado para validar um setup de **programação remota** entre um **MacBook** e um **PC Windows** via **SSH**.

---

## 💡 Sobre

A ideia era simples: testar se é possível desenvolver e compilar apps mobile de forma eficiente usando um PC Windows como estação de trabalho principal, conectando remotamente a um MacBook via SSH para builds e deploy no simulador iOS.

**Spoiler:** funciona muito bem.

---

## 🖥️ Setup Remoto

```
┌─────────────┐         SSH         ┌─────────────┐
│  Windows PC │ ◄──────────────────► │   MacBook    │
│  (código)   │                      │  (build iOS) │
└─────────────┘                      └──────┬──────┘
                                            │
                                     ┌──────▼──────┐
                                     │  Simulador   │
                                     │    iPhone    │
                                     └─────────────┘
```

- **Windows** — onde o código é escrito e editado
- **MacBook** — responsável por compilar e rodar o app via Expo/Xcode
- **SSH** — faz a ponte entre as duas máquinas

---

## 🚀 Como rodar

```bash
cd calculadora
npm install
npx expo start
```

| Plataforma | Comando |
|------------|---------|
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

- Operações básicas (+, −, ×, ÷)
- Porcentagem
- Inversão de sinal (+/−)
- Backspace
- Layout responsivo (iOS e Web)
- Tema escuro

---

*Feito com ☕ e SSH.*
