import '../app/globals.css'
import React, { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import { useRouter } from 'next/router';
import { User } from '../models/user.interface';

const Game = () => {
  const [money, setMoney] = useState(0);
  const [bet, setBet] = useState(10);
  const [result, setResult] = useState('');
  const [isRolling, setIsRolling] = useState(false);

  const router = useRouter();
  const queryData = router.query;

  useEffect(() => {
    fetch(`/api/game?user=${queryData.user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMoney(data[0].budget)
      });
  }, []);

  useEffect(() => {
    const updatedBudgetForUser: User = {
      name: queryData?.user,
      budget: money,
    };

    fetch('/api/updateUserBudget', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBudgetForUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [money]);

  const handleBetChange = (e: any) => {
    const newBet = parseInt(e.target.value, 10);
    if (!isNaN(newBet) && newBet >= 0 && newBet <= money) {
      setBet(newBet);
    }
  };

  const rollWheel = () => {
    if (isRolling) return;

    if (bet <= 0 || bet > money) {
      return;
    }

    setIsRolling(true);

    const randomResult = Math.floor(Math.random() * 3) + 1;

    setTimeout(() => {
      setIsRolling(false);

      if (randomResult === 1) {
        setMoney(money + bet);
        setResult('Double');
      } else if (randomResult === 2) {
        setResult('Keep');
      } else {
        setMoney(money - bet);
        setResult('Bankrupt!');
      }

    }, 1000);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-semibold mb-4">Gamble Game</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-xl mb-4">Current Money: ${money}</p>
          <div className="mb-4">
            <label htmlFor="betAmount" className="block text-lg font-semibold mb-2">
              Bet Amount:
            </label>
            <input
              type="number"
              id="betAmount"
              className="w-full p-2 border rounded-md"
              value={bet}
              onChange={handleBetChange}
              disabled={isRolling}
            />
          </div>
          <button
            className={`w-full p-3 rounded-md ${
              isRolling ? 'cursor-not-allowed opacity-50' : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={rollWheel}
            disabled={isRolling}
          >
            {isRolling ? 'Rolling...' : 'Roll the Wheel'}
          </button>
          {result && <p className="mt-4 text-lg font-semibold text-center">{result}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default Game;
