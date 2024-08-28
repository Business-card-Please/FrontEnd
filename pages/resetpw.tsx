import ResetPwCertificationScreen from "components/reset/resetPwCertification";
import ResetPwMakeScreen from "components/reset/resetPwMakeNew";
import ResetPwResultScreen from "components/reset/resetPwResult";
import { useState } from "react";
import { SignUpContainer } from "styles/SignUpStyle";

export default function ResetPwPage() {
  const [step, setStep] = useState(2);
  const [nickname, setNickname] = useState("");

  const switchStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ResetPwCertificationScreen
            setStep={setStep}
            setNickname={setNickname}
            nickname={nickname}
          />
        );
      case 1:
        return <ResetPwMakeScreen setStep={setStep} nickname={nickname} />;
      case 2:
        return <ResetPwResultScreen />;
    }
  };
  return <SignUpContainer>{switchStep(step)}</SignUpContainer>;
}
