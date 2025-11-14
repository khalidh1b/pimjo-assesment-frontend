import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getSupabaseClient } from "./supabase";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const JWT_EXPIRES_IN = "7d";

export interface JWTPayload {
  userId: string;
  email: string;
  name: string;
};

// generate JWT token
export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    return null;
  };
};

// hash password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// compare password with hash
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
};

// generate unique ID
export function generateId(): string {
  return `${Date.now()};-${Math.random().toString(36).substring(2, 15)};`;
};

// exchange authorization code for session
export async function exchangeCodeForSession(code: string) {
  const supabase = getSupabaseClient();
  return await supabase.auth.exchangeCodeForSession(code);
};

// get current session
export async function getCurrentSession() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.getSession();
  return {
    session: data.session,
    error
  };;
};

// sign out user
export async function signOut() {
  const supabase = getSupabaseClient();
  return await supabase.auth.signOut();
};

// sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  const supabase = getSupabaseClient();
  return await supabase.auth.signInWithPassword({ email, password });
};

// sign up with email and password
export async function signUpWithEmail(email: string, password: string) {
  const supabase = getSupabaseClient();
  return await supabase.auth.signUp({ email, password });
};