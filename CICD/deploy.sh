msg=$1
if [ -z $msg ]
then
    msg="deploy"
fi
ng github-pages:deploy --message "$msg"
