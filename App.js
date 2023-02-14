import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import TopBar from './src/components/TopBar';
import {FlatList} from 'react-native-gesture-handler';
import {Button, Card, Text} from 'react-native-paper';
import data from './src/constants/Data';
import styles from './src/constants/AppStyle';

const App = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <Card>
          <Card.Content>
            <Text variant="titleLarge" style={styles.titleTxt}>
              {item.title}
            </Text>
          </Card.Content>
          <View style={styles.screenWidth}>
            <VideoPlayer
              video={{uri: item.name}}
              autoplay={false}
              videoWidth={1500}
              videoHeight={1500}
            />
          </View>
          <Card.Actions style={styles.alignSelf}>
            <TouchableOpacity>
              <Button style={styles.buttonView}>
                <Text style={styles.buttonTxt}>Like</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button style={styles.buttonView}>
                <Text style={styles.buttonTxt}>Comment</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button style={styles.buttonView}>
                <Text style={styles.buttonTxt}>Share</Text>
              </Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <TopBar />
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default App;
