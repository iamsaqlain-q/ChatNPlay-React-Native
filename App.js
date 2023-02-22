import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import TopBar from './src/components/TopBar';
import {FlatList} from 'react-native-gesture-handler';
import {Card, Text} from 'react-native-paper';
import data from './src/constants/Data';
import styles from './src/constants/AppStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ConstantVars from './src/constants/ConstantVars';

const App = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <Card>
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.titleTxt}>
              {item.title}
            </Text>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={ConstantVars.btnSize}
              color={ConstantVars.white}
            />
          </Card.Content>
          <View style={styles.screenWidth}>
            <VideoPlayer
              video={{uri: item.name}}
              autoplay={false}
              videoWidth={1500}
              videoHeight={1500}
              fullscreen={true}
              style={styles.videoTag}
            />
          </View>
          <View style={styles.iconsView}>
            <View style={styles.row}>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Ionicons
                    name="heart-outline"
                    size={ConstantVars.btnSize}
                    color={ConstantVars.white}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={ConstantVars.btnSize}
                    color={ConstantVars.white}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Ionicons
                    name="send-outline"
                    size={ConstantVars.btnSize}
                    color={ConstantVars.white}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Ionicons
                    name="bookmark-outline"
                    size={ConstantVars.btnSize}
                    color={ConstantVars.white}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
