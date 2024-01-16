import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Header } from '../components/header/header';

function RootLayoutNav() {
    const colorScheme = useColorScheme();
  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Header />
        <Slot />
      </ThemeProvider>
    );
}

export default function RootLayout() {
    return <RootLayoutNav />;
}