Criar um projeto firebase no [Firebase console](https://console.firebase.google.com/).
- dê um nome para o app, selecione uma região e crie o projeto;
- Acesse a sessão de `Authentication` e habilite o método de autenticação `Enmail/password`.

--- 

```bash
npx create-expo-app loginApp -t default
cd ./loginApp

# remove o app padrão criado e deixa o projeto zerado.
./scripts/reset-project.js

# instala as dependências de autenticação do react
npx expo install @react-native-firebase/app @react-native-firebase/auth
# instalar as dependências de configurações nativas do app
npx expo install expo-build-properties

```

---

Configuração do `app.json`.
Os arquivos `GoogleService-Info.plist` and `google-services.json` devem ser baixados
do **Firebase console**. 
🚩 Qualquer alteração nas configurações esses dois arquivos devem ser baixados novamente.

```json
{
  "expo": {
    "name": "loginApp",
    "slug": "loginApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "loginapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
      // "bundleIdentifier": "br.com.loginApp",
      // "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "br.com.loginApp",
      "googleServicesFile": "./google-services.json"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ],
      "@react-native-firebase/app",
			"@react-native-firebase/auth"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

---
Adiconalmente, será necessário adicionar o SHA-1 key para o android com os comandos baixo

```bash
npx expo prebuild --platform android
cd android && ./gradlew signingReport
```