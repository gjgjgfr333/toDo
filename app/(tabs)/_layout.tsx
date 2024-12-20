import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {HomeHeader} from "@/src/shared/ui/Headers/HomeHeader";
import {CreatePostHeader} from "@/src/shared/ui/Headers/CreatePostHeader";

export default function TabLayout() {

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
