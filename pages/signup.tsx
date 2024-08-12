import SignupProcessScreen from "components/signup/signupaccess";
import SignupFavScreen from "components/signup/signupfav";
import SignupSuccessScreen from "components/signup/signupsuccess";
import SignupInfoScreen from "components/signup/signupuserinfo";
import { useState } from "react";

export default function SignUpPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState("");

  const switchMode = (step: number) => {
    switch (step) {
      case 0:
        return <SignupProcessScreen setStep={setStep} />;
      case 1:
        return <SignupInfoScreen setStep={setStep} />;
      case 2:
        return <SignupFavScreen setStep={setStep} />;
      case 3:
        return <SignupSuccessScreen setStep={setStep} />;
    }
  };

  return <>{switchMode(step)}</>;
}
