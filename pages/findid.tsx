import FindIdCertificationScreen from "components/find/findIdCertification";
import FindIDResultScreen from "components/find/findIdResult";
import { useState } from "react";
import { SignUpContainer } from "styles/SignUpStyle";

export default function FindIdPage() {
  const [step, setStep] = useState(0);
  const switchStep = () => {
    switch (step) {
      case 0:
        return <FindIdCertificationScreen setStep={setStep} />;
      case 1:
        return <FindIDResultScreen />;
    }
    return;
  };
  return <SignUpContainer>{switchStep()}</SignUpContainer>;
}
