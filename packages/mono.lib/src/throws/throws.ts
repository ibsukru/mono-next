import { throwsType } from ".";

const throws: throwsType = (timeout, error = "this is a demo") => {
  if (timeout) {
    setTimeout(() => {
      throw new Error(error);
    }, 30000);

    return;
  }

  throw new Error(error);
};

export default throws;
