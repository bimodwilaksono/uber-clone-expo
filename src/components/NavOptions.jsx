import {FlatList, Image, Text, Touchable, TouchableOpacity, View} from "react-native";
import tw from 'twrnc'
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";


const data = [
    {
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: "MapScreen"
    },
    {
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: "EatsScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={
                ({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                        <View>
                            <Image source={{uri: item.image}} style={{width: 120, height: 120, resizeMode: 'contain'}}/>
                            <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name={"arrowright"}
                                color={'white'}
                                type={'antdesign'}
                            />
                        </View>
                    </TouchableOpacity>
                )
            }
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default NavOptions
