import * as React from 'react';
import { ScrollView, FlexboxLayout, Label, Button } from '@nativescript/core';
import { useNavigation } from '@react-navigation/native';
import { Poll } from '../types';

export function HomeScreen() {
  const [activePolls, setActivePolls] = React.useState<Poll[]>([]);
  const navigation = useNavigation();

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
    <ScrollView className="p-4">
      <Label className="text-2xl mb-4 font-bold">Active Polls</Label>
      {activePolls.map(poll => (
        <FlexboxLayout 
          key={poll.id} 
          className="bg-white p-4 rounded-lg mb-4 shadow"
          flexDirection="column"
        >
          <Label className="text-xl mb-2">{poll.question}</Label>
          <Label className="mb-4">
            Ends: {poll.endDate.toLocaleDateString()}
          </Label>
          <Button
            className="bg-blue-500 text-white p-2 rounded"
            text="Vote Now"
            onTap={() => navigation.navigate('PollDetail', { pollId: poll.id })}
          />
        </FlexboxLayout>
      ))}
    </ScrollView>
  );
}