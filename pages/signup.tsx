import SignupProcessScreen from "components/signup/signupaccess";
import SignupFavScreen from "components/signup/signupfav";
import SignupSuccessScreen from "components/signup/signupsuccess";
import SignupInfoScreen from "components/signup/signupuserinfo";
import { useCallback, useEffect, useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    email: "",
    uniName: "",
    pw: "",
    name: "",
    nickName: "",
    major: "",
    grade: "",
    mainInterest: -1,
    subInterest: ""
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
    else if (step === 1)
      setData((data) => ({ ...data, mainInterest: -1, subInterest: "" }));
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
        return <SignupFavScreen setStep={setStep} />;
      case 3:
        return <SignupSuccessScreen setStep={setStep} />;
    }
  };

  return <>{switchMode(step)}</>;
}
