import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    StyleSheet,
    FlatList
} from 'react-native';
import { Header } from "react-native-elements";
// Import getNews function from news.js
import { getNews } from '../screens/news';
// We'll get to this one later
import Article from '../components/Article';

export default class Secured extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <View>
      <Header
        centerComponent={{ text: 'Neuigkeiten', style: { color: '#FF0000', fontSize: 20, fontWeight: 'bold' } }}
        outerContainerStyles={{ backgroundColor: '#ffffff' }}
      />
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </View>
  );
  }
}

/* const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: "#FFF5F5",
   },
}); */
