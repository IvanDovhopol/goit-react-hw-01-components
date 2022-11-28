import userData from './path/to/user.json';
import dataStats from './path/to/data.json';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <Statistics title="Upload stats" stats={dataStats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
