import Layout from '../layouts/layout'
import { useEffect, useState } from 'react';
import '../app/globals.css'
import { User } from '../models/user.interface';

export default function Leaderboard() {

  const [leaderboard, setLeaderboard] = useState<User[]>(); 

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setLeaderboard(users);
      });
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center mt-32">
      <div className="max-w-md rounded-lg p-4 bg-white min-h-container backdrop-blur-lg">
        <h5 className="text-space-blue font-body-bold">Leaderboard</h5>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Budget</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard?.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  )
}
