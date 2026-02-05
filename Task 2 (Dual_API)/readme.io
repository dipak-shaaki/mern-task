connecting prisma with epxress

npm install @prisma/client

npm install --save-dev prisma dotenv

npx prisma init --db


# Run this in your terminal to migrate your database
npx prisma migrate dev --name init

# Run this in your terminal to generate your Prisma Client
npx prisma generate



==========================================================================
npm init -y
npm install prisma @prisma/client --save-dev
npx prisma init --db
npx prisma migrate dev --name init ->provides the version control for database 
npx prisma generate
