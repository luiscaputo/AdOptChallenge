
# declare variables
host=localhost
db=adOptChallenge
user=root
pass=
engine=mysql
port=3306
output=./src/models

echo "Generating database entities"
yarn typeorm-model-generator -h $host -d $db -u $user -x $pass -e $engine -p $port -o $output -s $schema

echo "Removing unnecessary files"
rm -rf $output/tsconfig.json $output/ormconfig.json

echo "Moving entities out directory"
mv $output/entities/*.ts $output/

echo "Removing entity directory"
rm -rf $output/entities