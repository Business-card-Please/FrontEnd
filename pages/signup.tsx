import SignupProcessScreen from "components/signup/signupAccess";
import SignupFavScreen from "components/signup/signupFav";
import SignupSuccessScreen from "components/signup/signupSuccess";
import SignupInfoScreen from "components/signup/signupUserInfo";
import { useCallback, useEffect, useState } from "react";

export default function SignUpPage() {
  /**
   * 0 certify_user
   * 1 user_info
   * 2 fav_info
   * 3 success
   */
  const [step, setStep] = useState(3);
  const [data, setData] = useState({
    email: "",
    uniName: "",
    pw: "",
    name: "",
    nickName: "",
    major: "",
    grade: "",
    keywords: []
  });

  function setPropsData(name: string, value: string | number) {
    setData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (step === 0)
      setData((data) => ({
        ...data,
        name: "",
        nickName: "",
        major: "",
        grade: ""
      }));
    else if (step === 1) setData((data) => ({ ...data, keywords: [] }));
    console.log("data :>> ", data);
    return () => {};
  }, [step]);

  /**
   * clo zone
   * you `must` delete before building this code
   */
  useEffect(() => {
    console.log("data :>> ", data);
    return () => {};
  }, [data]);

  const switchMode = (step: number) => {
    switch (step) {
      case 0:
        return (
          <SignupProcessScreen
            data={data}
            setData={setPropsData}
            setStep={setStep}
          />
        );
      case 1:
        return (
          <SignupInfoScreen
            data={data}
            setData={setPropsData}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <SignupFavScreen
            data={data}
            setData={setPropsData}
            setStep={setStep}
          />
        );
      case 3:
        return <SignupSuccessScreen setStep={setStep} />;
    }
  };

  return <>{switchMode(step)}</>;
}
