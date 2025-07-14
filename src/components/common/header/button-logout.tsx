import { logoutAction } from "@/actions/auth-action";
import { swConfirm } from "@/helpers/swal";
import { Button, ButtonProps } from "react-bootstrap";

const ButtonLogout: React.FC<ButtonProps> = (props) => {
  const handleLogout = async () => {
    const res = await swConfirm("Are you sure to logout?");
    if (!res.isConfirmed) return;
    await logoutAction();
  };

  return (
    <Button {...props} onClick={handleLogout}>
      <i className="pi pi-sign-out"></i>&nbsp; Logout
    </Button>
  );
};

export default ButtonLogout;