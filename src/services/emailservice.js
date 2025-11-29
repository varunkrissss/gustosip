import emailjs from "emailjs-com";

export const sendContactMail = async (formData) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY"
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
