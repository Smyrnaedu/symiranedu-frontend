//burada Yup için schemas oluşturulacak

import { p } from "framer-motion/client";
import * as Yup from "yup";

export const ContactSchema = Yup.object({
	firstName: Yup.string().min(2, "Too short").required("First name is required"),
	lastName: Yup.string().min(2, "Too short").required("Last name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	// phoneNumber: Yup.string().required("Phone number is required")
	// 	.matches(/^[0-9]+$/, "Phone number must be digits only"),
	message: Yup.string().min(4, "Too short").required("Message is required"),
});