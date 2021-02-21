import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { Component } from 'react';


const markerids = ["1167 59th Street"
,"489 44th St"
,"2280 San Pablo Avenue"
,"West Grand & San Pablo"
,"28th Street & Peralta"
,"26th Street & Peralta"
,"East 24th Street & Grande Vista, Oakland"
,"16th Street & West"
,"10th Street & Mandela Parkway"
,"Broadway & 15th Street"
,"10th Street & Oak Street"
,"Bartlett Street & Deering Street"
,"1477 Fruitvale Avenue"
,"7621 MacArthur Boulevard"];
const latarray = [37.8421983
  ,37.8325119018554
  ,37.827284313311
  ,37.812255
  ,37.81906
  ,37.816349
  ,37.788403
  ,37.800958
  ,37.8280181
  ,37.7988167
  ,37.8054325
  ,37.79059
  ,37.7786024
  ,37.7673531];
const longarray = [-122.2848617
  ,-122.260772705078
  ,-122.278535992391
  ,-122.271491
  ,-122.276976
  ,-122.271785
  ,-122.225411
  ,-122.262786
  ,-122.2883893
  ,-122.2746945
  ,-122.2809945
  ,-122.215699
  ,-122.2255243
  ,-122.1698259];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

 
 /*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! brobrobro</Text>
      <StatusBar style="auto" />
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
    
  );
}
*/

export default () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
);

