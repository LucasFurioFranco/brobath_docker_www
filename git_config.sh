repo_name=$1

#https://stackoverflow.com/questions/18935539/authenticate-with-github-using-a-token
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"

git remote remove origin

git remote add origin https://token@github.com/LucasFurioFranco/${repo_name}
