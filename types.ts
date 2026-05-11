import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  requirement: string;
  message: string;
}

export interface CareerApplicationData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  portfolioUrl: string;
  whyZetax: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}