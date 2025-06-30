import React from "react";
import { Button } from "react-bootstrap";

type LayoutTextSectionProps = {
  isLogin: boolean;
  layoutLoginTitle: string;
  layoutRegisterTitle: string;
  layoutDescriptionForRegister: string;
  layoutDescriptionForLogin: string;
  loginButtonText?: string;
  registerButtonText?: string;
  onSwitch: () => void;
};

const LayoutTextSection: React.FC<LayoutTextSectionProps> = ({
  isLogin,
  layoutLoginTitle,
  layoutRegisterTitle,
  layoutDescriptionForRegister,
  layoutDescriptionForLogin,
  loginButtonText,
  registerButtonText,
  onSwitch,
}) => {
  return (
    <div className="layout-text text-center">
      {isLogin ? (
        <>
          <h3>{layoutLoginTitle}</h3>
          <p>{layoutDescriptionForRegister}</p>
          <Button className="register-button" onClick={onSwitch}>
           {registerButtonText }
          </Button>
        </>
      ) : (
        <>
          <h3>{layoutRegisterTitle}</h3>
          <p>{layoutDescriptionForLogin}</p>
          <Button className="signin-button" onClick={onSwitch}>
            {loginButtonText}
          </Button>
        </>
      )}
    </div>
  );
};

export default LayoutTextSection;
