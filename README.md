# Heroku_GitHubPage_dApp
Déploiement sur Heroku et Github Page d'un smart contract via Truffle (HDWalletProvider / DOTENV)


  ```
  git clone git@github.com:Keeymon/Heroku_GitHubPage_dApp.git
  cd Heroku_GitHubPage_dApp
  ```


  Pour Heroku :
  ```
  # Login (once) to Heroku via CLI if you have not already done
  heroku login

  # Option A: If not existing, create the heroku git remote repository
  heroku create --ssh-git --buildpack mars/create-react-app Heroku_GitHubPage_dApp

  # Option B: If existing, declare the heroku git remote repository
  heroku git:remote --ssh-git -a Heroku_GitHubPage_dApp
  
  # Push the project to Heroku
  git subtree push --prefix client/ heroku master
  ```
  
  
  Pour GitHubPage :
  ```
  # Installez le paquet gh-pages en exécutant la commande suivante :
  npm install --save gh-pages
  
  # Dans le package.json client ajouter :
  - "homepage": "https://[user-name].github.io/[repo-name]/"
  - "predeploy": "npm run build"
  - "deploy": "gh-pages -d build"
  
  # Dans le dossier client
  npm run deploy
  ```
