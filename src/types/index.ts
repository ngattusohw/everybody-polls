export interface User {
  id: string;
  email: string;
  profile: UserProfile;
  createdAt: Date;
}

export interface UserProfile {
  gender: string;
  sexAssignedAtBirth: string;
  age: number;
  race: string;
  occupation: string;
  countryOfOrigin: string;
  residingCountry: string;
  hobbies: string[];
  interests: string[];
}

export interface Poll {
  id: string;
  question: string;
  options: string[];
  type: 'country' | 'global';
  startDate: Date;
  endDate: Date;
  totalVotes: number;
  results: PollResults;
}

export interface PollResults {
  [optionId: string]: {
    count: number;
    demographics: {
      gender: { [key: string]: number };
      age: { [key: string]: number };
      race: { [key: string]: number };
      occupation: { [key: string]: number };
      country: { [key: string]: number };
    };
  };
}

export interface Comment {
  id: string;
  pollId: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: Date;
  parentId?: string;
  replies?: Comment[];
}

export interface PollSuggestion {
  id: string;
  userId: string;
  question: string;
  votes: number;
  createdAt: Date;
}