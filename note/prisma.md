<!--
 * @Author: hy
 * @Date: 2022-02-02 00:12:54
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 00:13:46
 * @FilePath: /instaclone-backend/note/prisma.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# prosma

### install

`pnpm install prisma --save-dev`

```shell

$ pnpm exec prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore. Don't forget to exclude .env to not commit any secret.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb (Preview).
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

```
