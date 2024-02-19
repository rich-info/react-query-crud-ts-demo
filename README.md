# react-query-crud-ts-demo

Demo: [react-query-crud-ts-demo](https://react-query-crud-ts-demo.vercel.app)

This repository provides a perfect setup to get React working with
- React 18
- React Query (Tanstack Query) with useQuery (GET) and useMutation (PUT, POST)
- REST API calls (GET, PUT, POST, DELETE)
  - local development: uses a [json-server](https://github.com/typicode/json-server)
  - productson deployment: uses [json-server on vercel](https://github.com/rich-info/vercel-json-server)
- CRUD data operations (CREATE, READ, UPDATE, DELETE)
- Eslint rules
- Pagination
- Vite instead of react-scripts and create-react-app
- Typescript 5
- Tailwind
- Toast messages

## Getting started

- Git clone the project

```bash
git clone https://github.com/rich-info/react-query-crud-ts-demo.git
```

- Go to the project directory:

```bash
cd react-query-crud-ts-demo
```

- Install dependencies

```bash
npm i
```

```bash
yarn install
```

- Setup database file

```bash
cp db/sample.db.json db/db.json
```

- Start the `json-server` with the demo data `db/db.json`

```bash
npm run json-server
```

```bash
yarn json-server
```

- Launch another terminal tab or window and run the `app` locally

```bash
npm run dev
```

```bash
yarn dev
```

Open the URL <http://localhost:3000> in your browser to access the react app. 