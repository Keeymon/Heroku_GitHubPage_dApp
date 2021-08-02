# Heroku_GitHubPage_dApp
Déploiement sur Heroku et Github Page d'un smart contract via Truffle


  ```
  # git clone git@github.com:timelapse-project/timelapse.git
  cd Heroku_GitHubPage_dApp

  # Login (once) to Heroku via CLI if you have not already done
  heroku login

  # Option A: If not existing, create the heroku git remote repository
  heroku create --ssh-git --buildpack mars/create-react-app Heroku_GitHubPage_dApp

  # Option B: If existing, declare the heroku git remote repository
  heroku git:remote --ssh-git -a Heroku_GitHubPage_dApp
  
  # Push the project to Heroku
  git subtree push --prefix client/ heroku master

  ```
