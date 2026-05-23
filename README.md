# Blog API

API REST para gestionar el contenido de un blog: autores y sus publicaciones. Permite crear, leer, actualizar y eliminar tanto autores como posts, manteniendo la relación entre ellos.

El proyecto aplica una arquitectura ordenada con separación por capas, validación de datos, manejo centralizado de errores, documentación con Swagger y testing automatizado.

---

## Demo

**Deploy activo:** [rest-api-node-pbza.onrender.com](https://rest-api-node-pbza.onrender.com)

**Documentación Swagger:** [rest-api-node-pbza.onrender.com/api-docs](https://rest-api-node-pbza.onrender.com/api-docs)

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución |
| Express | Framework HTTP |
| PostgreSQL | Base de datos relacional |
| Neon | Hosting de base de datos |
| pg | Cliente de PostgreSQL para Node |
| Vitest + Supertest | Testing de endpoints |
| Swagger (OpenAPI) | Documentación interactiva |
| Render | Plataforma de deploy |

---

## Estructura del proyecto
/
├── src/
│   ├── controllers/
│   │   ├── Authors.Controller.js
│   │   └── Post.Controllers.js
│   ├── services/
│   │   ├── Authors.Services.js
│   │   └── Posts.Services.js
│   ├── routes/
│   │   ├── Authors.Routes.js
│   │   └── Posts.Routes.js
│   ├── middlewares/
│   │   ├── Error.Middlewares.js
│   │   ├── Validate.Authors.js
│   │   └── Validate.Posts.js
│   ├── db/
│   │   └── index.js
│   ├── yaml/
│   │   ├── authors.yaml
│   │   ├── posts.yaml
│   │   └── swagger.yaml
│   ├── app.js
│   └── server.js
├── sql/
│   └── schema.sql
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
├── .env.example
├── .gitignore
├── package.json
└── README.md

---

## Endpoints

### Autores

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/authors` | Obtener todos los autores |
| GET | `/api/authors/:id` | Obtener autor por ID |
| POST | `/api/authors` | Crear un autor |
| PUT | `/api/authors/:id` | Actualizar un autor |
| DELETE | `/api/authors/:id` | Eliminar un autor |

### Posts

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/posts` | Obtener todos los posts |
| GET | `/api/posts/:id` | Obtener post por ID |
| GET | `/api/posts/author/:authorId` | Obtener posts de un autor |
| POST | `/api/posts` | Crear un post |
| PUT | `/api/posts/:id` | Actualizar un post |
| DELETE | `/api/posts/:id` | Eliminar un post |

---

## Ejemplos de uso

### Obtener todos los autores

```bash
GET https://rest-api-node-pbza.onrender.com/api/authors
```

### Crear un autor

```bash
POST https://rest-api-node-pbza.onrender.com/api/authors
Content-Type: application/json

{
  "name": "Joaquín González",
  "email": "joaquin@example.com",
  "bio": "Desarrollador fullstack"
}
```

### Crear un post

```bash
POST https://rest-api-node-pbza.onrender.com/api/posts
Content-Type: application/json

{
  "title": "Mi primer post",
  "content": "Contenido del post",
  "authorId": 1
}
```

### Error por datos faltantes

```json
{
  "error": "Missing fields"
}
```

---

## Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/JoaquinG-eng/Rest-Api-Node.git
cd Rest-Api-Node
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
```

```env
DATABASE_URL=postgresql://usuario:password@host/database?sslmode=require
PORT=3000
```

### 4. Levantar el servidor

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`

La documentación Swagger en `http://localhost:3000/api-docs`

---

## Testing

```bash
npm test
npm run test:watch
npm run test:coverage
```

---

## Deploy en Render

1. Subir el código a GitHub
2. Crear un nuevo Web Service en [Render](https://render.com)
3. Conectar el repositorio
4. Configurar:
   - **Build Command:** `npm install`
   - **Start Command:** `node src/server.js`
5. Agregar variable de entorno `DATABASE_URL` con la connection string de Neon
6. Deploy

Cada `git push` a `main` redesploya automáticamente.

---

## Base de datos

La base de datos está hosteada en [Neon](https://neon.tech). El schema completo está en `sql/schema.sql`.

---

## Manejo de errores

Middleware global en `Error.Middlewares.js` que captura todos los errores y devuelve respuestas consistentes con el código HTTP correspondiente.

---

## Autor

**Joaquín Gonzalez** — [GitHub](https://github.com/JoaquinG-eng)