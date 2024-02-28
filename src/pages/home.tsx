import { Database, Tag } from "lucide-react";
import React from "react";
import LinkedCard from "../components/linked-card";

const Home: React.FC = () => {
  return (
    <div>
      <h4 className="mb-2 text-3xl font-bold">Welcome to the Home Page</h4>
      <p>This is the home page of your React application.</p>
      <div className="flex flex-row">
        <LinkedCard
          icon={<Database size={48} />}
          title="Products"
          href="/products"
        />
        <LinkedCard
          icon={<Tag size={48} />}
          title="Categories"
          href="/categories"
        />
      </div>
    </div>
  );
};

export default Home;
