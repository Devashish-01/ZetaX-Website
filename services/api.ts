import { ContactFormData, CareerApplicationData, ApiResponse } from '../types';

// Formspree endpoint is read from environment variables.
// Set VITE_FORMSPREE_URL in your .env file. See .env.example for instructions.
// If unset, the site runs in simulation mode (forms appear to work but data is logged to console only).
const CONTACT_FORM_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/YOUR_FORM_ID_HERE';

const isSimulationMode = () => CONTACT_FORM_ENDPOINT.includes('YOUR_FORM_ID_HERE');

const postToFormspree = async (payload: Record<string, unknown>): Promise<ApiResponse<null>> => {
  if (isSimulationMode()) {
    console.warn(
      '⚠️ No Formspree endpoint configured. Running in simulation mode.\n' +
      'To receive emails, sign up at https://formspree.io/ and set VITE_FORMSPREE_URL in your .env file.'
    );
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true, message: 'Simulation: submission received.' };
  }

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return { success: true, message: 'Submitted successfully.' };
  }

  const errorData = await response.json().catch(() => ({}));
  console.error('Form submission failed:', errorData);
  throw new Error('Failed to submit form');
};

export const ContactService = {
  submitForm: async (data: ContactFormData): Promise<ApiResponse<null>> =>
    postToFormspree({
      ...data,
      _subject: `New Contact Form — ${data.requirement || 'General Enquiry'} — ${data.name}`,
    }),
};

// Career applications use the same Formspree endpoint — all fields are emailed to the owner.
// The applicant only ever sees a success message; your email address is never exposed.
export const CareerService = {
  submitApplication: async (data: CareerApplicationData): Promise<ApiResponse<null>> =>
    postToFormspree({
      ...data,
      _subject: `Career Application — ${data.role} — ${data.fullName}`,
    }),
};
