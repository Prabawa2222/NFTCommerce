import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusbar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusbar background={COLORS.primary}/>
    </SafeAreaView>
    )
}

export default Home