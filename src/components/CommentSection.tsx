import * as React from 'react';
import { ScrollView, StackLayout, Label, Button, TextField } from '@nativescript/core';
import { Comment } from '../types';

interface Props {
  pollId: string;
}

export function CommentSection({ pollId }: Props) {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'top' | 'latest' | 'trending'>('top');

  React.useEffect(() => {
    // Mock data for now
    setComments([
      {
        id: '1',
        pollId,
        userId: 'user1',
        content: 'This is a great question!',
        likes: 5,
        createdAt: new Date(),
      }
    ]);
  }, [pollId]);

  return (
    <StackLayout className="p-4">
      <FlexboxLayout className="mb-4">
        <Button 
          className={`mr-2 ${activeTab === 'top' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          text="Top"
          onTap={() => setActiveTab('top')}
        />
        <Button 
          className={`mr-2 ${activeTab === 'latest' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          text="Latest"
          onTap={() => setActiveTab('latest')}
        />
        <Button 
          className={activeTab === 'trending' ? 'bg-blue-500 text-white' : 'bg-gray-200'}
          text="Trending"
          onTap={() => setActiveTab('trending')}
        />
      </FlexboxLayout>

      <ScrollView>
        <StackLayout>
          {comments.map(comment => (
            <StackLayout key={comment.id} className="mb-4 p-3 bg-white rounded">
              <Label text={comment.content} className="mb-2" />
              <FlexboxLayout>
                <Label text={`${comment.likes} likes`} className="mr-2" />
                <Button text="Like" className="mr-2" />
                <Button text="Reply" />
              </FlexboxLayout>
            </StackLayout>
          ))}
        </StackLayout>
      </ScrollView>

      <StackLayout className="mt-4">
        <TextField
          hint="Add a comment..."
          text={newComment}
          onTextChange={(args) => setNewComment(args.object.text)}
          className="mb-2"
        />
        <Button
          text="Post"
          className="bg-blue-500 text-white"
          onTap={() => {
            if (newComment.trim()) {
              // Handle comment submission
              console.log('New comment:', newComment);
              setNewComment('');
            }
          }}
        />
      </StackLayout>
    </StackLayout>
  );
}