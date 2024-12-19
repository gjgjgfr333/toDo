import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {HomeHeader} from "@/src/shared/ui/Headers/HomeHeader";
import {CreatePostHeader} from "@/src/shared/ui/Headers/CreatePostHeader";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                    header: HomeHeader,
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    headerShown: true,
                    header: CreatePostHeader,
                }}
            />
        </Stack>
    );
}
