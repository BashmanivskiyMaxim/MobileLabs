import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import NewsItem from './NewsItem';
import axios from 'axios';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/BashmanivskiyMaxim/MobileLabs/main/data/news.json',
        );

        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error loading news data');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  console.log(NewsItems);

  return (
    <ScrollView>
      {news.map((item, index) => {
        return (
          <View key={index}>
            <NewsItem
              title={item.title}
              description={item.description}
              date={new Date()}
              img={`https://raw.githubusercontent.com/BashmanivskiyMaxim/MobileLabs/main/data/${item.image}`}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
export default News;
