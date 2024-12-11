# Nearby  

**Boas-vindas ao Nearby!**  
O Nearby conecta você aos seus estabelecimentos favoritos, oferecendo cupons de descontos e vantagens exclusivas.  

Este projeto foi desenvolvido utilizando **React Native**, com suporte a **TypeScript** e **Expo**, para criar uma aplicação moderna, rápida e responsiva. Ele também inclui o uso de **Google Fonts** e ícones estilizados do **tabler/icons-react-native**, garantindo um design atrativo e intuitivo.  

---

## 🚀 Tecnologias Utilizadas  

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicativos móveis multiplataforma.  
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipos estáticos.  
- **[Expo](https://expo.dev/)**: Ferramenta para facilitar o desenvolvimento e distribuição de aplicativos React Native.  
- **[Google Fonts](https://fonts.google.com/)**: Tipografias personalizadas para melhorar o design.  
- **[tabler/icons-react-native](https://tabler-icons.io/)**: Biblioteca de ícones para enriquecer a interface do usuário.  

---

## 🛠️ Funcionalidades  

- Acesso a cupons de desconto para estabelecimentos próximos.  
- Interface moderna e responsiva.  
- Navegação intuitiva com integração de ícones.  
- Personalização de fontes para uma experiência visual aprimorada.  

---

## 📦 Instalação  

Siga os passos abaixo para configurar o projeto localmente:  

1. **Clone o repositório**  
   ```bash  
   git clone https://github.com/vanessabrazuna/nearby-mobile.git  
   cd nearby  
   ```  

2. **Instale as dependências**  
   Certifique-se de ter o **Node.js** e o **Yarn** ou **npm** instalados. Em seguida, execute:  
   ```bash  
   yarn install  
   # ou  
   npm install  
   ```  

3. **Inicie o servidor de desenvolvimento**  
   Com o **Expo CLI** instalado, inicie o servidor:  
   ```bash  
   expo start  
   ```  

4. **Execute o aplicativo**  
   Digitalize o QR Code gerado com o aplicativo Expo Go em seu dispositivo móvel ou emulador.  

---

## 🖋️ Configuração de Fonts e Ícones  

- **Google Fonts**  
  As fontes utilizadas no projeto estão configuradas no arquivo `_Layout.tsx` através do hook `useFonts` da biblioteca `expo-font`.  

- **tabler/icons-react-native**  
  Ícones importados diretamente da biblioteca `@tabler/icons-react-native`, que permite personalizar tamanho e cor para melhor adequação ao design.  

---

## 📄 Estrutura de Pastas  

```plaintext  
nearby/  
├── assets/         # Imagens e outros recursos estáticos  
├── src/            # Código-fonte principal  
│   ├── app/        # Configuração principal do app  
│   ├── assets/     # Recursos estáticos usados internamente no código  
│   ├── components/ # Componentes reutilizáveis (botões, inputs, etc.)  
│   ├── styles/     # Estilos globais e configurações de tema  
│   └── utils/      # Funções utilitárias e helpers (validações, máscaras, etc.)  
├── .gitignore      # Arquivos e pastas ignorados pelo Git  
├── app.json        # Configurações do Expo para o aplicativo  
├── expo-env.d.ts   # Definições de tipo para variáveis de ambiente do Expo  
├── package-lock.json # Arquivo de lock para dependências do npm  
├── package.json    # Dependências e scripts do projeto  
├── README.md       # Documentação do projeto  
└── tsconfig.json   # Configurações do TypeScript  
```  

---

## ✨ Contribuindo  

Contribuições são bem-vindas! Para contribuir:  
1. Faça um fork do repositório.  
2. Crie uma branch para sua feature/bugfix:  
   ```bash  
   git checkout -b minha-feature  
   ```  
3. Envie suas alterações em um Pull Request.  

---

## 📝 Licença  

Este projeto está sob a licença [MIT](LICENSE).  

--- 