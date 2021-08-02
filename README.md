# Heroku_GitHubPage_dApp
Déploiement sur Heroku et Github Page d'un smart contract via Truffle (HDWalletProvider / DOTENV)


  ```
  git clone git@github.com:Keeymon/Heroku_GitHubPage_dApp.git
  cd Heroku_GitHubPage_dApp
  npm install
  # add .env file with INFURA_API_KEY (provider) and MNEMONIC (private key)
  truffle migrate --reset --network ropsten
  
  # Ne pas oublier de push
  ```


  Pour Heroku :
  ```
  # Login (once) to Heroku via CLI if you have not already done
  heroku login

  # Option A: If not existing, create the heroku git remote repository
  heroku create --ssh-git --buildpack mars/create-react-app

  # Option B: If existing, declare the heroku git remote repository
  heroku git:remote --ssh-git
  
  # If Heroku needs your key :
  heroku keys:add ~/.ssh/id_rsa.pub
  
  # Push the project to Heroku
  git subtree push --prefix client/ heroku master
  ```
  
  
  Pour GitHubPage :
  ```
  # Tout est dans le dossier CLIENT
  # Installez le paquet gh-pages en exécutant la commande suivante :
  npm install --save gh-pages
  
  # Dans le package.json ajouter :
  - "homepage": "https://[user-name].github.io/[repo-name]/"
  - "predeploy": "npm run build"
  - "deploy": "gh-pages -d build"
  
  npm install
  
  # Dans le dossier client
  npm run deploy
  ```
