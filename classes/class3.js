/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';

import {checkPermission} from 'react-native-android-permissions';
import {requestPermission} from 'react-native-android-permissions';
import MapView from 'react-native-maps';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const LATITUDE = 19.0760;
const LONGITUDE = 72.8777;
const watchID: ?number = null;

export default class Class3 extends Component {

  constructor() {
      super();
      this.state = {
        region: {
           latitude: 19.0760,
           longitude: 72.8777,
           latitudeDelta: 1,
           longitudeDelta: 1
         }
      }
   }
   watchID = (null: ?number);

   componentDidMount = () => {
      checkPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
           console.log("Already Granted!");
           console.log(result);
           navigator.geolocation.getCurrentPosition(
              (position) => {
                 var initialPosition = JSON.stringify(position);
                 this.setState({
                    region: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      latitudeDelta: LATITUDE_DELTA,
                      longitudeDelta: LONGITUDE_DELTA
                    }
                 });
              },
              (error) => alert(error.message),
              {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
           );
           navigator.geolocation.watchPosition((position) => {
             const newRegion = {
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude,
                 latitudeDelta: LATITUDE_DELTA,
                 longitudeDelta: LONGITUDE_DELTA
               }
               this.onRegionChange(newRegion);
           });
      }, (result) => {
           console.log("Not Granted!");
           console.log(result);
           setTimeout(() => {
              requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
              console.log("Granted!", result);
              // now you can set the listenner to watch the user geo location
              navigator.geolocation.getCurrentPosition(
                 (position) => {
                    var initialPosition = JSON.stringify(position);
                    this.setState({
                       region: {
                         latitude: position.coords.latitude,
                         longitude: position.coords.longitude,
                         latitudeDelta: LATITUDE_DELTA,
                         longitudeDelta: LONGITUDE_DELTA
                       }
                    });
                 },
                 (error) => alert(error.message),
                 {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
              );
              navigator.geolocation.watchPosition((position) => {
                const newRegion = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                  }
                  this.onRegionChange(newRegion);
              });
              }, (result) => {
              console.log("Not Granted!");
              console.log(result);
              });
              // for the correct StatusBar behaviour with translucent={true} we need to wait a bit and ask for permission after the first render cycle
              // (check https://github.com/facebook/react-native/issues/9413 for more info)
            }, 0);
          });
   }

   onRegionChange(region){
    this.setState({ region });
  }

  render(){
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
        <MapView.Marker
            coordinate={{latitude: this.state.region.latitude,
            longitude: this.state.region.longitude}}
            title={"title"}
            description={"description"}
         />
         </MapView>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,

  },
})

AppRegistry.registerComponent('classes', ()=> Class3);
