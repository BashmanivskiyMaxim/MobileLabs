import React from 'react';
import {ScrollView, View} from 'react-native';
import NewsItem from './NewsItem';

const News = () => {
  const NewsItems = [
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
    {
      title: 'news',
      description: 'news1',
      date: new Date(),
      img: require('../assets/logo.png'),
    },
  ];
  return (
    <ScrollView>
      {NewsItems.map((item, index) => {
        return (
          <View key={index}>
            <NewsItem
              title={item.title}
              description={item.description}
              date={item.date}
              img={item.img}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
export default News;
