import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import NewsItem from './NewsItem';
import useFetch from '../hooks/use-fetch';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const News: React.FC = () => {
  const {data, isloading, error} = useFetch<NewsItem>(
    'https://raw.githubusercontent.com/BashmanivskiyMaxim/MobileLabs/main/data/news.json',
  );

  return (
    <ScrollView>
      {isloading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {data.map((item, index) => {
        return (
          <View key={index}>
            <NewsItem
              title={item.title}
              description={item.description}
              date={item.date}
              img={`https://raw.githubusercontent.com/BashmanivskiyMaxim/MobileLabs/main/data/${item.image}`}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
export default News;
