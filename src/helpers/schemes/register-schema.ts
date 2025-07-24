import * as Yup from "yup";
import { getGenderValues } from "../misc";

const genderValues = getGenderValues();

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too short")
    .max(15, "Too long")
    .required("First name is required"),

  surname: Yup.string()
    .min(2, "Too short")
    .max(15, "Too long")
    .required("Last name is required"),

  phoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),

  genderId: Yup.string()
    .oneOf(genderValues, "Invalid gender")
    .required("Gender is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  residence: Yup.string()
    .min(2, "Too short")
    .max(35, "Too long")
    .required("Residence is required"),

  birthDay: Yup.date()
    .typeError("Invalid date")
    .max(new Date(), "Date of birth must be in the past")
    .required("Date of birth is required"),

  motherName: Yup.string()
    .min(2, "Too short")
    .max(15, "Too long")
    .required("Mother's name is required"),

  fatherName: Yup.string()
    .min(2, "Too short")
    .max(15, "Too long")
    .required("Father's name is required"),

  familyPhoneNumber: Yup.string()
    .matches(/^\d{11}$/, "Family phone number must be 11 digits")
    .required("Family phone number is required"),

  highSchool: Yup.string()
    .min(2, "Too short")
    .max(35, "Too long")
    .required("High school is required"),

  grade: Yup.string()
    .min(1, "Too short")
    .max(4, "Too long")
    .required("Grade is required"),

  birthCityId: Yup.number()
    .typeError("Şehir seçimi zorunludur")
    .min(1, "Lütfen şehir seçiniz")
    .required("Şehir seçimi zorunludur"),

  password: Yup.string()
    .min(8, "Too short")
    .max(20, "Too long")
    .matches(/\d+/, "Password must contain at least one number")
    .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]+/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?:;~%-_]+/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
