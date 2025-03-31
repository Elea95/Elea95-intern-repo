import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import axiosInstance from '../api';

const Post = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/posts/1'); // Example API
      setData(response.data);
    } catch (error) {
      setData({ error: 'Failed to fetch data' });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text>{data?.title || data?.error}</Text>
      )}
      <Button title="Retry" onPress={fetchData} />
    </View>
  );
};

export default Post;
