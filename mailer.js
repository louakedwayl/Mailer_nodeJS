// Installer les dépendances : npm install nodemailer dotenv
require('dotenv').config();
const nodemailer = require("nodemailer");

async function sendMotivation() {
  // Configuration du transporteur avec les variables d'environnement
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lettre de Motivation - Louaked Wayl</title>
      <style>
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box;
          }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #ffffff; 
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .header p {
            font-size: 16px;
            opacity: 0.95;
          }
          .content { 
            padding: 40px 30px;
            line-height: 1.8;
            color: #333333;
          }
          .content h2 {
            font-size: 20px;
            color: #667eea;
            margin-bottom: 20px;
          }
          .content p { 
            font-size: 16px; 
            margin-bottom: 16px;
            color: #555555;
          }
          .content strong {
            color: #333333;
          }
          .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
          }
          .footer { 
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
          }
          .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
          }
          .social-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            text-decoration: none;
            color: #333333;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .social-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .social-link img {
            width: 20px;
            height: 20px;
          }
          .copyright {
            font-size: 12px;
            color: #999999;
            margin-top: 15px;
          }
          @media only screen and (max-width: 600px) {
            .social-links {
              flex-direction: column;
              gap: 10px;
            }
            .social-link {
              justify-content: center;
            }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Louaked Wayl</h1>
              <p>Développeur Full-Stack | Étudiant à l'École 42</p>
          </div>
          
          <div class="content">
              <h2>Bonjour,</h2>
              
              <p>Actuellement étudiant à l'<strong>École 42</strong>, je souhaite mettre mes compétences en <strong>TypeScript, React et Node.js</strong> au service de votre entreprise pour contribuer à vos projets innovants.</p>
              
              <p>J'ai développé plusieurs projets full-stack, notamment <strong>PokedexNodeJs</strong> et <strong>Camagru</strong>, qui m'ont permis de renforcer mes compétences en architecture logicielle, développement d'API REST et création d'interfaces utilisateur modernes.</p>
              
              <p>Mes compétences techniques incluent :</p>
              <p>• <strong>Frontend :</strong> React, TypeScript, HTML5, CSS3, Tailwind CSS<br>
              • <strong>Backend :</strong> Node.js, Express, API RESTful<br>
              • <strong>Base de données :</strong> PostgreSQL, MySQL, MongoDB<br>
              • <strong>Outils :</strong> Git, Docker, Linux</p>
              
              <p>Autonome, curieux et motivé, je suis prêt à m'impliquer pleinement dans le développement de vos solutions et à collaborer avec votre équipe pour relever des défis techniques stimulants.</p>
              
              <p>Je serais ravi d'échanger avec vous pour vous présenter plus en détail mes expériences et ma motivation.</p>
              
              <div class="signature">
                  <p>Cordialement,<br><strong>Louaked Wayl</strong></p>
              </div>
          </div>
          
          <div class="footer">
              <div class="social-links">
                  <a href="https://github.com/louakedwayl" class="social-link" target="_blank">
                      <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub">
                      <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/louakedwayl" class="social-link" target="_blank">
                      <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn">
                      <span>LinkedIn</span>
                  </a>
                  <a href="https://www.root-me.org/louakedwayl" class="social-link" target="_blank">
                      <img src="https://www.root-me.org/IMG/logo_forum.png" alt="Root-Me" style="border-radius: 3px;">
                      <span>Root-Me</span>
                  </a>
              </div>
              <div class="copyright">
                  © 2026 Louaked Wayl. Tous droits réservés.
              </div>
          </div>
      </div>
  </body>
  </html>
  `;

  // Envoi de l'email
  let info = await transporter.sendMail({
    from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: process.env.EMAIL_SUBJECT || "Candidature Stage Développeur Full-Stack",
    html: htmlContent,
  });

  console.log("✅ Message envoyé avec succès !");
  console.log("📧 ID du message : %s", info.messageId);
}

// Exécute l'envoi
sendMotivation().catch((error) => {
  console.error("❌ Erreur lors de l'envoi :", error);
});