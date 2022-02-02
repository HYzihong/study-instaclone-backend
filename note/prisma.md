<!--
 * @Author: hy
 * @Date: 2022-02-02 00:12:54
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-02-02 12:33:39
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

同步 Prisma 架构与数据库架构，初始化了迁移历史记录

```shell

$ pnpm exec prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "instaclone", schema "public" at "localhost:5432"

✔ Enter a name for the new migration: …
Applying migration `20220201171037_`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20220201171037_/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)


✔ Generated Prisma Client (3.9.0 | library) to ./node_modules/.pnpm/registry.npmmirror.com+@prisma+client@3.9.0_prisma@3.9.0/node_modules/@prisma/client in 632ms


```

Prisma Studio 是数据库中数据的可视化编辑器

```shell

$ pnpm exec prisma studio
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555

```
