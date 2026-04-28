import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  link: string;
}

export interface Lead {
  id: string;
  businessName: string;
  category: string;
  phone: string;
  website: string;
  location: string;
  verified: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  requirement: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}