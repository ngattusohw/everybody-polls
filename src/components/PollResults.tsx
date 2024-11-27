import * as React from 'react';
import { ScrollView, StackLayout, Label, FlexboxLayout } from '@nativescript/core';
import { Poll } from '../types';

interface Props {
  poll: Poll;
}

export function PollResults({ poll }: Props) {
  return (
    <ScrollView>
      <StackLayout className="p-4">
        <Label className="text-xl font-bold mb-4" text="Overall Results" />
        
        <StackLayout className="mb-6">
          {poll.options.map((option) => {
            const votes = poll.results[option]?.count || 0;
            const percentage = poll.totalVotes > 0 
              ? Math.round((votes / poll.totalVotes) * 100) 
              : 0;
            
            return (
              <StackLayout key={option} className="mb-2">
                <Label className="text-lg" text={option} />
                <FlexboxLayout className="bg-gray-200 h-6 rounded-full">
                  <FlexboxLayout 
                    className="bg-blue-500 rounded-full" 
                    style={{ width: `${percentage}%` }} 
                  />
                </FlexboxLayout>
                <Label className="text-sm text-gray-600" text={`${votes} votes (${percentage}%)`} />
              </StackLayout>
            );
          })}
        </StackLayout>

        <Label className="text-xl font-bold mb-4" text="Demographics Breakdown" />
        {Object.entries(poll.results).map(([option, result]) => (
          <StackLayout key={option} className="mb-6">
            <Label className="text-lg font-semibold mb-2" text={option} />
            {Object.entries(result.demographics).map(([category, distribution]) => (
              <StackLayout key={category} className="ml-4 mb-4">
                <Label className="text-md font-medium mb-1" text={category} />
                {Object.entries(distribution).map(([value, count]) => (
                  <Label 
                    key={value} 
                    className="text-sm text-gray-600" 
                    text={`${value}: ${count} votes`} 
                  />
                ))}
              </StackLayout>
            ))}
          </StackLayout>
        ))}
      </StackLayout>
    </ScrollView>
  );
}