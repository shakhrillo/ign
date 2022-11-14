import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Text, View } from "react-native";
import { AppStackScreenProps } from "../../navigators";

interface HomePageProps extends AppStackScreenProps<"HomePage">{}

export const HomePage: FC<HomePageProps> = observer(function HomePage({navigation}) {
    return (
        <View>
            <Text>
                HomePage
            </Text>
        </View>
    )
})