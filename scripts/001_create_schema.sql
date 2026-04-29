-- St. Valentine Girls Senior School - Database Schema
-- Run this script to create all necessary tables

-- 1. User Profiles (extends auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('student', 'teacher', 'admin')) DEFAULT 'student',
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Students Table
CREATE TABLE IF NOT EXISTS public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  admission_number TEXT UNIQUE NOT NULL,
  class TEXT NOT NULL,
  stream TEXT,
  date_of_birth DATE,
  parent_name TEXT,
  parent_phone TEXT,
  parent_email TEXT,
  fee_balance DECIMAL(10,2) DEFAULT 0,
  admission_date DATE DEFAULT CURRENT_DATE,
  status TEXT CHECK (status IN ('active', 'graduated', 'transferred', 'suspended')) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Teachers Table
CREATE TABLE IF NOT EXISTS public.teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  employee_id TEXT UNIQUE NOT NULL,
  department TEXT,
  subjects TEXT[],
  qualification TEXT,
  hire_date DATE DEFAULT CURRENT_DATE,
  status TEXT CHECK (status IN ('active', 'on_leave', 'resigned')) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Classes Table
CREATE TABLE IF NOT EXISTS public.classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  stream TEXT,
  class_teacher_id UUID REFERENCES public.teachers(id),
  academic_year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Results/Grades Table
CREATE TABLE IF NOT EXISTS public.results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  term TEXT NOT NULL,
  year INTEGER NOT NULL,
  marks DECIMAL(5,2),
  grade TEXT,
  remarks TEXT,
  uploaded_by UUID REFERENCES public.teachers(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, subject, term, year)
);

-- 6. Announcements Table
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT CHECK (category IN ('general', 'academic', 'event', 'urgent')) DEFAULT 'general',
  target_audience TEXT CHECK (target_audience IN ('all', 'students', 'teachers', 'parents')) DEFAULT 'all',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. News & Events Table
CREATE TABLE IF NOT EXISTS public.news_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  event_date DATE,
  event_time TIME,
  location TEXT,
  type TEXT CHECK (type IN ('news', 'event')) NOT NULL,
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Gallery Table
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT CHECK (category IN ('campus', 'events', 'sports', 'academics', 'clubs', 'other')) DEFAULT 'other',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Careers/Job Listings
CREATE TABLE IF NOT EXISTS public.careers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  department TEXT,
  description TEXT NOT NULL,
  requirements TEXT,
  qualifications TEXT,
  employment_type TEXT CHECK (employment_type IN ('full-time', 'part-time', 'contract')) DEFAULT 'full-time',
  deadline DATE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Career Applications
CREATE TABLE IF NOT EXISTS public.career_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  career_id UUID REFERENCES public.careers(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  resume_url TEXT,
  cover_letter TEXT,
  status TEXT CHECK (status IN ('pending', 'reviewed', 'shortlisted', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Contact Submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT CHECK (status IN ('unread', 'read', 'responded')) DEFAULT 'unread',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. Attendance Table
CREATE TABLE IF NOT EXISTS public.attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status TEXT CHECK (status IN ('present', 'absent', 'late', 'excused')) NOT NULL,
  remarks TEXT,
  marked_by UUID REFERENCES public.teachers(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, date)
);

-- 14. Fee Payments Table
CREATE TABLE IF NOT EXISTS public.fee_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE DEFAULT CURRENT_DATE,
  payment_method TEXT CHECK (payment_method IN ('cash', 'bank_transfer', 'mpesa', 'cheque')) DEFAULT 'cash',
  receipt_number TEXT,
  term TEXT,
  academic_year INTEGER,
  remarks TEXT,
  recorded_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. Timetable Table
CREATE TABLE IF NOT EXISTS public.timetable (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  teacher_id UUID REFERENCES public.teachers(id),
  day_of_week INTEGER CHECK (day_of_week BETWEEN 0 AND 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_students_user_id ON public.students(user_id);
CREATE INDEX IF NOT EXISTS idx_students_class ON public.students(class);
CREATE INDEX IF NOT EXISTS idx_teachers_user_id ON public.teachers(user_id);
CREATE INDEX IF NOT EXISTS idx_results_student_id ON public.results(student_id);
CREATE INDEX IF NOT EXISTS idx_results_term_year ON public.results(term, year);
CREATE INDEX IF NOT EXISTS idx_attendance_student_date ON public.attendance(student_id, date);
CREATE INDEX IF NOT EXISTS idx_news_events_type ON public.news_events(type);
CREATE INDEX IF NOT EXISTS idx_news_events_published ON public.news_events(published);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery(category);
CREATE INDEX IF NOT EXISTS idx_announcements_published ON public.announcements(published);
