import React, { forwardRef, useCallback } from "react";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";

type Props = {
    title?: string;
    children: React.ReactNode;
    snapPoints?: (string | number)[];  
    onDismiss?: () => void;
    contentStyle?: StyleProp<ViewStyle>;
};

const BottomSheetComponent = forwardRef<BottomSheetModal, Props>(
    ({ title, children, snapPoints, onDismiss, contentStyle }, ref) => {
        const renderBackdrop = useCallback(
            (props: BottomSheetBackdropProps) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    opacity={0.45}
                    pressBehavior="close"
                />
            ),
            []
        );

        return (
            <BottomSheetModal
                ref={ref}
                snapPoints={snapPoints}
                enableDynamicSizing={!snapPoints}   
                enablePanDownToClose
                backdropComponent={renderBackdrop}
                backgroundStyle={styles.background}
                handleIndicatorStyle={styles.handle}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                android_keyboardInputMode="adjustResize"
                onDismiss={onDismiss}
            >
                <BottomSheetView style={[styles.content, contentStyle]}>
                    {title ? <Text style={styles.title}>{title}</Text> : null}
                    {children}
                </BottomSheetView>
            </BottomSheetModal>
        );
    }
);



export const styles = StyleSheet.create({
    background: {
        backgroundColor: "#FDF5EC",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    handle: {
        width: 44,
        height: 5,
        backgroundColor: "#E0CDB8",
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 4,
        paddingBottom: 28,
    },
    title: {
        fontSize: 18,
        marginBottom: 12,
        color: "#3B2314",
        fontFamily: "BelloraHeading-Bold",
    },
});
export default BottomSheetComponent;