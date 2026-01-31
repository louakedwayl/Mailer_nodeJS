# Mailer_nodeJS 

Un template Node.js pour envoyer des emails HTML de motivation de manière professionnelle et sécurisée.

## 📋 Prérequis

- Node.js installé sur votre machine
- Un compte Gmail avec l'authentification à deux facteurs activée
- Un mot de passe d'application Gmail

## 🔐 Obtenir un mot de passe d'application Gmail

1. Allez sur [Google Account Security](https://myaccount.google.com/security)
2. Activez la vérification en deux étapes
3. Recherchez "Mots de passe des applications"
4. Générez un nouveau mot de passe pour "Mail"
5. Copiez ce mot de passe dans votre fichier `.env`

## 🚀 Installation

1. Clonez ce repository :
```bash
git clone https://github.com/louakedwayl/Mailer_nodeJS
cd email-motivation-template
```

2. Installez les dépendances :
```bash
npm install nodemailer dotenv
```

3. Éditez le fichier `.env` avec vos informations :
```env
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app-gmail
RECIPIENT_EMAIL=destinataire@example.com
SENDER_NAME=Votre Nom
EMAIL_SUBJECT=Candidature Stage Développeur Full-Stack
```

4. Personnalisation

Éditez le fichier `mailer.js` pour personnaliser :
- Le contenu HTML de l'email
- Les styles CSS
- Les informations personnelles
- Les liens vers vos profils

## ▶️ Utilisation

Exécutez le script :
```bash
node mailer.js
```

Si l'envoi réussit, vous verrez :
```
Message envoyé : <message-id>
```

## 📂 Structure du projet

```
.
├── mailer.js    # Script principal
├── .env.example         # Template de configuration (PUBLIC)
├── .env                 # Configuration réelle (PRIVÉ - ignoré par git)
├── .gitignore           # Fichiers à exclure du repository
├── package.json         # Dépendances du projet
└── README.md            # Ce fichier
```

## 🛠️ Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Nodemailer](https://nodemailer.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 📄 Licence

Ce projet est libre d'utilisation. N'hésitez pas à le forker et l'adapter à vos besoins !

## 👤 Auteur

**Louaked Wayl**

- GitHub: [@louakedwayl](https://github.com/louakedwayl)
- LinkedIn: [@louakedwayl](https://www.linkedin.com/in/louakedwayl)
- Root-Me: [@louakedwayl](https://www.root-me.org/louakedwayl)
---

⭐ N'hésitez pas à mettre une étoile si ce template vous a été utile !
