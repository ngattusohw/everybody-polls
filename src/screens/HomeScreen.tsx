import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Poll } from '../types';

type SimpleStackParamList = {
  home: {},
  pollDetail: {},
};

type HomeScreenProps = {
  route: RouteProp<SimpleStackParamList, "home">,
  navigation: FrameNavigationProp<SimpleStackParamList, "home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [activePolls, setActivePolls] = React.useState<Poll[]>([]);

  React.useEffect(() => {
    // Fetch polls implementation will go here
    // For now using mock data
    setActivePolls([
      {
        id: '1',
        question: 'What is your favorite season?',
        options: ['Spring', 'Summer', 'Fall', 'Winter'],
        type: 'global',
        startDate: new Date(),
        endDate: new Date(Date.now() + 86400000),
        totalVotes: 0,
        results: {}
      }
    ]);
  }, []);

  return (
    // <ScrollView className="p-4">
    <>
      <label className="text-2xl mb-4 font-bold">Active Polls</label>
      {activePolls.map(poll => (
        <flexboxLayout 
          key={poll.id} 
          className="bg-white p-4 rounded-lg mb-4 shadow"
          flexDirection="column"
        >
          <label className="text-xl mb-2">{poll.question}</label>
          <label className="mb-4">
            Ends: {poll.endDate.toLocaleDateString()}
          </label>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            text="Vote Now"
            onTap={() => navigation.navigate('PollDetail', { pollId: poll.id })}
          />
        </flexboxLayout>
      ))}
      </>
    // </ScrollView>
  );
}