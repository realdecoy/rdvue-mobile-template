import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useColorScheme } from 'react-native';

function __SCREEN__LayoutNav() {
    const colorScheme = useColorScheme();
  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    );
}

export default function __SCREEN__Layout() {
    return <__SCREEN__LayoutNav />;
}