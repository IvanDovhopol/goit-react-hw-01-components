import { Box } from './Box';
import user from '../path/to/user.json';
import dataStats from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

export const App = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="muted"
      flexWrap="wrap"
      p={5}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
