import * as React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Poll } from '../types';

type SimpleStackParamList = {
  home: {},
  pollDetail: {},
};

type PollDetailScreenProps = {
  route: RouteProp<SimpleStackParamList, "pollDetail">,
  navigation: FrameNavigationProp<SimpleStackParamList, "pollDetail">,
}

export function PollDetailScreen({ navigation }: PollDetailScreenProps) {
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
      <stackLayout className="p-4">
        <label className="text-2xl mb-4" text={poll.question} />
        
        <flexboxLayout className="mb-4">
          <button 
            className={`mr-2 ${activeTab === 'poll' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            text="Poll"
            onTap={() => setActiveTab('poll')}
          />
          <button 
            className={`mr-2 ${activeTab === 'results' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            text="Results"
            onTap={() => setActiveTab('results')}
          />
          <button 
            className={activeTab === 'discussion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}
            text="Discussion"
            onTap={() => setActiveTab('discussion')}
          />
        </flexboxLayout>

        {activeTab === 'poll' && (
          <stackLayout className="mb-4">
            {poll.options.map((option, index) => (
              <button
                key={index}
                className={`mb-2 ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                text={option}
                onTap={() => setSelectedOption(option)}
              />
            ))}
            <button
              className="bg-green-500 text-white"
              text="Submit Vote"
              isEnabled={!!selectedOption}
              onTap={() => {
                // Handle vote submission
                console.log('Voted for:', selectedOption);
              }}
            />
          </stackLayout>
        )}
      </stackLayout>
  );
}