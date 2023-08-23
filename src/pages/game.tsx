import { useEffect, useState, useContext } from "react";
import Layout from "../layouts/layout";
import '../app/globals.css'
import GambleGameContext from "../store/gamble-game-context";

export default function Game() {

  const [users, setUsers] = useState(null);
  const [number, setNumber] = useState<number>();
  const [isGameActive, setIsGameActive] = useState(false);

  const ctx = useContext(GambleGameContext);

  // useEffect(() => {
  //   fetch('/api/users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data)
  //     });
  // }, []);

  const startGame = () => {
    const numbers: any = [];

    console.log(ctx);

    setIsGameActive(true);
    
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      numbers.push(randomNumber);
      setNumber(randomNumber);
      console.log('Generated number:', randomNumber);
    }, 500);
  
    setTimeout(() => {
      clearInterval(interval);
      setIsGameActive(false);
      const lastGeneratedNumber = numbers[numbers.length - 1];
      console.log('The last generated number was:', lastGeneratedNumber);
    }, 5000);
  };
  
  return (
    <Layout>
      <div className="flex justify-center items-center mt-32">
        <div className="max-w-md rounded-lg p-4 bg-white min-h-container backdrop-blur-lg">
          <h5 className="text-space-blue font-body-bold">Gamble game</h5>
            <button
              onClick={startGame}
              className={`w-full mt-2 p-2 bg-blue-500 text-white rounded-md ${isGameActive ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'}`}
              disabled={isGameActive}
            >
              Rolling the wheel
            </button>
            <div className="flex justify-center items-center">
              <span className="text-2xl">{number}</span>
            </div>
        </div>
      </div>
    </Layout>
  );
}