import {
    StyleSheet,
    StatusBar
} from 'react-native';
import { scale, verticalScale } from "app/common/utils/scaling.js";


const styles = StyleSheet.create({
    screen: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: verticalScale(24),
        paddingHorizontal: scale(16),
        flex: 1,
        backgroundColor: "rgb(245, 245, 245)"
    },
    close: {
        position: "absolute",
        top: StatusBar.currentHeight + 4,
        left: 16,
        zIndex: 1
    },
    header: {
        marginTop: 75,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: verticalScale(100),
        resizeMode: "contain"
    },
    all: {
        marginTop: verticalScale(24),
        flex: 1,
        justifyContent: "center"
    },
    content: {
        justifyContent: "space-between",
        paddingHorizontal: 8,
        paddingVertical: verticalScale(12)
    },
    input: {
        borderWidth: 0.5,
        borderColor: "#D3D3D3",
        borderRadius: 50,
        padding: 18,
        marginVertical: verticalScale(6),
        fontWeight: "bold"
    },
    OR: {
        marginVertical: verticalScale(12),
        fontSize: 16,
        fontWeight: "bold",
        color: "#4A4A4A"
    },
    socialLogin: {
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    footer: {
        justifyContent: "space-between",
        marginTop: verticalScale(28),
        paddingHorizontal: 8,
        paddingVertical: verticalScale()
    },
    textRow: {
        flexDirection: "row",
        justifyContent: "center"
    }
});


export default styles;
