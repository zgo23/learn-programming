import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = React.ComponentProps<typeof TextInput>;

const TextField: React.FC<Props> = (props) => {
    const { style, ...restOfProps } = props;
    return <TextInput style={[style, styles.input]} {...restOfProps} />;
};

const styles = StyleSheet.create({
    input: {
        padding: 24,
        borderColor: "#B9C4CA",
        borderWidth: 1,
        borderRadius: 4,
        fontFamily: "Avenir-Medium",
        fontSize: 16,
    },
});

export default TextField;
