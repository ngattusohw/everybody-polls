import * as React from 'react';
import { ScrollView, FlexboxLayout, Label, Button, StackLayout } from '@nativescript/core';
import { Poll } from '../types';

export function PollDetailScreen({ route }) {
  const [poll, setPoll] = React.useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('poll');

  React.useEffect(() => {
    // Mock data for now
    setPoll({
      id: '1',
      question: 'What is your favorite season?',
      options: ['Spring', 'Summer', 'Fall', 'Winter'],
      type: 'global',
      startDate: new Date(),
      endDate: new Date(Date.now() + 86400000),
      totalVotes: 0,
      results: {}
    });
  }, []);

  if (!poll) return null;

  return (
    <ScrollView>
      <StackLayout className="p-4">
        <Label className="text-2xl mb-4" text={poll.question} />
        
        <FlexboxLayout className="mb-4">
          <Button 
            className={`mr-2 ${activeTab === 'poll' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            text="Poll"
            onTap={() => setActiveTab('poll')}
          />
          <Button 
            className={`mr-2 ${activeTab === 'results' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            text="Results"
            onTap={() => setActiveTab('results')}
          />
          <Button 
            className={activeTab === 'discussion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}
            text="Discussion"
            onTap={() => setActiveTab('discussion')}
          />
        </FlexboxLayout>

        {activeTab === 'poll' && (
          <StackLayout className="mb-4">
            {poll.options.map((option, index) => (
              <Button
                key={index}
                className={`mb-2 ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                text={option}
                onTap={() => setSelectedOption(option)}
              />
            ))}
            <Button
              className="bg-green-500 text-white"
              text="Submit Vote"
              isEnabled={!!selectedOption}
              onTap={() => {
                // Handle vote submission
                console.log('Voted for:', selectedOption);
              }}
            />
          </StackLayout>
        )}
      </StackLayout>
    </ScrollView>
  );
}