

import * as Yup from "yup";
//registerdaki çekler burada değil sadece gerekeni girmiş mi kontrol
export const AuthSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});
