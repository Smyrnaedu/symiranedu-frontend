import React from "react";
import { Button } from "react-bootstrap";

type LayoutTextSectionProps = {
  isLogin: boolean;
  layoutLoginTitle: string;
  layoutRegisterTitle: string;
  layoutDescription: string;
  onSwitch: () => void;
};

const LayoutTextSection: React.FC<LayoutTextSectionProps> = ({
  isLogin,
  layoutLoginTitle,
  layoutRegisterTitle,
  layoutDescription,
  onSwitch,
}) => {
  return (
    <div className="layout-text text-center">
      {isLogin ? (
        <>
          <h3>Hesabınız yok mu?</h3>
          <Button className="register-button" onClick={onSwitch}>
            Kayıt Ol
          </Button>
        </>
      ) : (
        <>
          <h3>Hesabınız varsa giriş yapın</h3>
          <Button className="signin-button" onClick={onSwitch}>
            Giriş Yap
          </Button>
        </>
      )}
    </div>
  );
};

export default LayoutTextSection;