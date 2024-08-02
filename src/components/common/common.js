import { notification } from "antd";

export const openNotificationWithIcon = (
  message,
  title = null,
  type = "success"
) => {
  if (title != null) {
    notification[type]({
      message: title,
      description: message,
      duration: 5,

      style: {
        width: 450,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#4DDA89",
        borderRadius: 10,
        backgroundColor: "#F5FFF9",
        color: "#12743C",
        // marginTop: 100,
        zIndex: 9999999,
      },
    });
  } else {
    notification[type]({
      description: message,
    });
  }
};
export const openNotificationWithIconErr = (
  message,
  title = null,
  type = "error"
) => {
  if (title != null) {
    notification[type]({
      message: title,
      description: message,
      duration: 5,

      style: {
        width: 450,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#DD2323",
        borderRadius: 10,
        backgroundColor: "#FFF0F0",
        color: "#BB1414",
        // marginTop: 100,
        zIndex: 9999999,
      },
    });
  } else {
    notification[type]({
      description: message,
    });
  }
};
