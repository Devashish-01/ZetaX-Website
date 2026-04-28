import axios from 'axios';
import { Lead, ContactFormData, ApiResponse } from '../types';

// In a real app, this would be your backend URL
const BASE_URL = 'https://api.zetax.com/v1';

// CHANGE THIS: Replace with your actual Formspree form ID or Backend URL
// Example: 'https://formspree.io/f/xmqznqrz'
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID_HERE'; 

// Mocking the axios instance for this demo
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const LeadService = {
  getLeads: async (city: string, category: string): Promise<Lead[]> => {
    // API Placeholder: GET /api/leads?city=...&category=...
    console.log(`[API] Fetching leads for ${city} in ${category}`);
    
    // Simulating API response delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock data return
    return [
      { id: '1', businessName: 'TechFlow Solutions', category: 'Software', phone: '+1 555-0101', website: 'techflow.example.com', location: city, verified: true },
      { id: '2', businessName: 'Urban Coffee Roasters', category: 'Hospitality', phone: '+1 555-0102', website: 'urbancoffee.example.com', location: city, verified: true },
      { id: '3', businessName: 'Elite Legal Partners', category: 'Legal', phone: '+1 555-0103', website: 'elitelegal.example.com', location: city, verified: false },
      { id: '4', businessName: 'Green Leaf Landscaping', category: 'Services', phone: '+1 555-0104', website: 'greenleaf.example.com', location: city, verified: true },
      { id: '5', businessName: 'SkyHigh Real Estate', category: 'Real Estate', phone: '+1 555-0105', website: 'skyhigh.example.com', location: city, verified: true },
    ];
  },

  exportLeads: async (leadIds: string[]): Promise<boolean> => {
    // API Placeholder: POST /api/export
    console.log(`[API] Exporting leads: ${leadIds.join(', ')}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }
};

export const ContactService = {
  submitForm: async (data: ContactFormData): Promise<ApiResponse<null>> => {
    console.log('[API] Submitting contact form:', data);

    // CHECK: If the user hasn't replaced the placeholder ID yet, run in Mock mode.
    if (CONTACT_FORM_ENDPOINT.includes('YOUR_FORM_ID_HERE')) {
      console.warn('⚠️ No Backend Endpoint Configured. Running in simulation mode.');
      console.warn('To receive emails, sign up for Formspree.io and paste your URL in services/api.ts');
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { success: true, message: 'Simulation: Message sent successfully!' };
    }

    // REAL FUNCTIONALITY: Send data to the configured endpoint (e.g., Formspree)
    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        return { success: true, message: 'Message sent successfully!' };
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export const AiService = {
  sendMessage: async (message: string): Promise<string> => {
    // API Placeholder: POST /api/chat
    console.log('[API] Sending AI message:', message);
    await new Promise(resolve => setTimeout(resolve, 600));
    return `This is a simulated AI response to: "${message}". ZetaX AI agents can handle complex queries, schedule appointments, and qualify leads automatically.`;
  }
};