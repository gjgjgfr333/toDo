import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from "react-native-svg";

export const DownArrowSvg = () => {
    return (
        <View>
            <Svg width={30} height={30} viewBox="0 0 512 512">
                <Path
                    d={"M32 138.079L40.8292 130L256 364.307L471.171 130L480 138.079L256 382L32 138.079Z"}
                    fill={'black'}
                    clipRule={'evenodd'}
                    fillRule={'evenodd'}
                />
            </Svg>
        </View>
    );
};