import { z } from 'zod';

export const signupSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Invalid email address' })
    .refine((email) => email.endsWith('.com'), {
      message: 'Email must end with .ac.uk',
    }),
  password: z
    .string()
    .min(10, 'Password must be at least 10 characters')
    .max(128, 'Password is too long')
    .regex(/(?=.*[a-z])/, 'Lowercase required')
    .regex(/(?=.*[A-Z])/, 'Uppercase required')
    .regex(/(?=.*\d)/, 'Number required'),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: 'Invalid email address' }),
  password: z.string().trim().min(10, 'Invalid Password').max(128, 'Invalid Password'),
});

export type signSchemaType = z.infer<typeof signupSchema>;
export type loginSchemaType = z.infer<typeof loginSchema>;
