import Layout from "../layouts/layout";
import { useState, useContext } from "react";
import { useRouter } from 'next/router';
import { User } from "../models/user.interface";
import '../app/globals.css'
import GambleGameContext from "../store/gamble-game-context";

export default function Home({ children }: any) {
  const [inputValue, setInputValue] = useState<User>();
  const router = useRouter();

  const ctx = useContext(GambleGameContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({name: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Input value submitted:", inputValue?.name);
    fetch('/api/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValue)
      }).then((response) => response.json())
      .then((data) => {
        router.push(`/game?user=${inputValue?.name}`);
      }).catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-container mt-32">
        <div className="max-w-md rounded-lg p-4 bg-white backdrop-blur-lg">
          <h5 className="text-space-blue font-body-bold">Username</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Enter the game
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
