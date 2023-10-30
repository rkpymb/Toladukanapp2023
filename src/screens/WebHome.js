import React, { useState, useEffect } from 'react';
import { View, BackHandler ,Text} from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
function WebHome({ navigation }) {
    const route = useRoute();
    const [canGoBack, setCanGoBack] = useState(false);
    const [MainURL, setMainURL] = useState('https://flairmyevent.com/');

    const handleNavigationStateChange = (navState) => {
        setCanGoBack(navState.canGoBack);
    };

    const webViewRef = React.createRef();

    useEffect(() => {
        const backAction = () => {
            if (canGoBack) {
                webViewRef.current.goBack();
                return true; // Prevent the default back action
            }
            return false; // Allow the default back action
        };
      
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
    }, [canGoBack]);


    useEffect(() => {
        if (route.params && route.params.url) {
          const url = route.params.url;
          // Use the URL or data passed as a parameter
          setMainURL(url);
          console.log('URLok:', url);
        }
      }, [route.params]);
    

    return (
        <View style={{ flex: 1 }}>
           
            <WebView
                ref={webViewRef}
                showsVerticalScrollIndicator={false}
                startInLoadingState
                setBuiltInZoomControls={false}
                source={{ uri: MainURL }}
                onNavigationStateChange={handleNavigationStateChange}
            />
           
        </View>
    );
}

export default WebHome;
