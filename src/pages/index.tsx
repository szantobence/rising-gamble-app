import Layout from "../layouts/layout";
import { useState } from "react";
import '../app/globals.css'

export default function Home({ children }: any) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Input value submitted:", inputValue);
  };
  
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-container mt-32">
        <div className="max-w-md rounded-lg p-4 bg-white backdrop-blur-lg">
          <h5 className="text-space-blue font-body-bold">Enter Username</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
