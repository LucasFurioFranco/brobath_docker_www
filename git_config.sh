token="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"
user_name="LucasFurioFranco"
user_mail="lucasfuriofranco@gmail.com"
repo_name="brobath_docker_www"

#https://stackoverflow.com/questions/18935539/authenticate-with-github-using-a-token
git config --global user.name ${user_name}
git config --global user.email ${user_mail}

git remote remove origin

git remote add origin https://${token}@github.com/${user_name}/${repo_name}
