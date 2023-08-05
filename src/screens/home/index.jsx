import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import NavOptions from "../../components/NavOptions";

function HomeScreen() {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    placeholder='Where from?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: "en",
                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({});

export default HomeScreen;
