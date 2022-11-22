
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile cardUser={user} /> 
      {/* <Statistics stats={data} />   */}
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

/* <PageTitle text="24th Core Worlds Coalition Conference" /> */
// <EventBoard events={upcomingEvents} />