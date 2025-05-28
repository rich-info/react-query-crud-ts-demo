function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About React Query CRUD Demo</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
          <p className="mb-4">
            This is a demonstration project showcasing a modern React
            application with full CRUD operations using React Query (Tanstack
            Query). The project serves as a perfect template for building
            data-driven React applications with TypeScript.
          </p>
          <a
            href="https://github.com/rich-info/react-query-crud-ts-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View on GitHub
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Complete CRUD operations (Create, Read, Update, Delete)</li>
            <li>REST API integration with full HTTP method support</li>
            <li>Local development using json-server</li>
            <li>Production deployment on Vercel</li>
            <li>Built-in pagination support</li>
            <li>Toast notifications for user feedback</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Core Technologies</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Management</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>React Query (Tanstack Query)</li>
                <li>REST API Integration</li>
                <li>JSON Server</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Development Setup</h2>
          <p>
            The project uses modern development tools and practices, including
            ESLint for code quality, Prettier for code formatting, and a
            comprehensive TypeScript configuration. The setup is optimized for
            both development and production environments.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
