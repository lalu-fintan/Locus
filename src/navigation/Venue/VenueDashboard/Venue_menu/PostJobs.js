import {createNativeStackNavigator} from '@react-navigation/native-stack';
import react from 'react';
import All_SetScreen from '../../../../screen/Venue/dashBoard/PostJobs/All_SetScreen';
import Post_A_Job from '../../../../screen/Venue/dashBoard/PostJobs/Post_A_Job';
const PostJobs = () => {
  const PostStack = createNativeStackNavigator();
  return (
    <PostStack.Navigator screenOptions={{headerShown: false}}>
      <PostStack.Screen name="venueIntro" component={All_SetScreen} />
      <PostStack.Screen name="venuePostjobs" component={Post_A_Job} />
    </PostStack.Navigator>
  );
};

export default PostJobs;
