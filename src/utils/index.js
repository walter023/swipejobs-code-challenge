import { Easing, Notifier, NotifierComponents } from 'react-native-notifier';

export function showToast(title, description, type = 'error', duration = 5000, onPress = () => null) {
  Notifier.showNotification({
    title,
    description,
    duration,
    showAnimationDuration: 500,
    showEasing: Easing.bounce,
    onHidden: () => null,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type,
    },
    onPress,
    hideOnPress: false,
  });
}