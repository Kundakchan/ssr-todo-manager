import { FirebaseError } from "firebase/app";
import { notification } from "ant-design-vue";

const handlerErrorFirebase = (error: FirebaseError | unknown) => {
  if (error instanceof FirebaseError) {
    notification.error({
      placement: "topRight",
      message: error.name,
      description: error.message,
      duration: 3,
    });
  }
  throw error;
};

const handlerErrorCustom = (error: Error) => {
  notification.error({
    placement: "topRight",
    duration: 3,
    message: error.name,
    description: error.message,
  });
};

export { handlerErrorFirebase, handlerErrorCustom };
