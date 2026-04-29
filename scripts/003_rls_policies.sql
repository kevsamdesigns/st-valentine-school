-- St. Valentine Girls Senior School - Row Level Security Policies

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fee_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.timetable ENABLE ROW LEVEL SECURITY;

-- Helper function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid()
$$;

-- =====================
-- PROFILES POLICIES
-- =====================
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- =====================
-- STUDENTS POLICIES
-- =====================
DROP POLICY IF EXISTS "students_select" ON public.students;
CREATE POLICY "students_select" ON public.students
  FOR SELECT USING (
    user_id = auth.uid() OR 
    public.get_user_role() IN ('admin', 'teacher')
  );

DROP POLICY IF EXISTS "students_insert" ON public.students;
CREATE POLICY "students_insert" ON public.students
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "students_update" ON public.students;
CREATE POLICY "students_update" ON public.students
  FOR UPDATE USING (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "students_delete" ON public.students;
CREATE POLICY "students_delete" ON public.students
  FOR DELETE USING (public.get_user_role() = 'admin');

-- =====================
-- TEACHERS POLICIES
-- =====================
DROP POLICY IF EXISTS "teachers_select" ON public.teachers;
CREATE POLICY "teachers_select" ON public.teachers
  FOR SELECT USING (
    user_id = auth.uid() OR 
    public.get_user_role() = 'admin'
  );

DROP POLICY IF EXISTS "teachers_insert" ON public.teachers;
CREATE POLICY "teachers_insert" ON public.teachers
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "teachers_update" ON public.teachers;
CREATE POLICY "teachers_update" ON public.teachers
  FOR UPDATE USING (user_id = auth.uid() OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "teachers_delete" ON public.teachers;
CREATE POLICY "teachers_delete" ON public.teachers
  FOR DELETE USING (public.get_user_role() = 'admin');

-- =====================
-- RESULTS POLICIES
-- =====================
DROP POLICY IF EXISTS "results_select" ON public.results;
CREATE POLICY "results_select" ON public.results
  FOR SELECT USING (
    student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid()) OR
    public.get_user_role() IN ('admin', 'teacher')
  );

DROP POLICY IF EXISTS "results_insert" ON public.results;
CREATE POLICY "results_insert" ON public.results
  FOR INSERT WITH CHECK (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "results_update" ON public.results;
CREATE POLICY "results_update" ON public.results
  FOR UPDATE USING (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "results_delete" ON public.results;
CREATE POLICY "results_delete" ON public.results
  FOR DELETE USING (public.get_user_role() = 'admin');

-- =====================
-- ATTENDANCE POLICIES
-- =====================
DROP POLICY IF EXISTS "attendance_select" ON public.attendance;
CREATE POLICY "attendance_select" ON public.attendance
  FOR SELECT USING (
    student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid()) OR
    public.get_user_role() IN ('admin', 'teacher')
  );

DROP POLICY IF EXISTS "attendance_insert" ON public.attendance;
CREATE POLICY "attendance_insert" ON public.attendance
  FOR INSERT WITH CHECK (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "attendance_update" ON public.attendance;
CREATE POLICY "attendance_update" ON public.attendance
  FOR UPDATE USING (public.get_user_role() IN ('admin', 'teacher'));

-- =====================
-- FEE PAYMENTS POLICIES
-- =====================
DROP POLICY IF EXISTS "fee_payments_select" ON public.fee_payments;
CREATE POLICY "fee_payments_select" ON public.fee_payments
  FOR SELECT USING (
    student_id IN (SELECT id FROM public.students WHERE user_id = auth.uid()) OR
    public.get_user_role() = 'admin'
  );

DROP POLICY IF EXISTS "fee_payments_insert" ON public.fee_payments;
CREATE POLICY "fee_payments_insert" ON public.fee_payments
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

-- =====================
-- PUBLIC TABLES (readable by all, writable by admin)
-- =====================

-- News & Events
DROP POLICY IF EXISTS "news_events_select" ON public.news_events;
CREATE POLICY "news_events_select" ON public.news_events
  FOR SELECT USING (published = true OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "news_events_insert" ON public.news_events;
CREATE POLICY "news_events_insert" ON public.news_events
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "news_events_update" ON public.news_events;
CREATE POLICY "news_events_update" ON public.news_events
  FOR UPDATE USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "news_events_delete" ON public.news_events;
CREATE POLICY "news_events_delete" ON public.news_events
  FOR DELETE USING (public.get_user_role() = 'admin');

-- Gallery
DROP POLICY IF EXISTS "gallery_select" ON public.gallery;
CREATE POLICY "gallery_select" ON public.gallery
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "gallery_insert" ON public.gallery;
CREATE POLICY "gallery_insert" ON public.gallery
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "gallery_update" ON public.gallery;
CREATE POLICY "gallery_update" ON public.gallery
  FOR UPDATE USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "gallery_delete" ON public.gallery;
CREATE POLICY "gallery_delete" ON public.gallery
  FOR DELETE USING (public.get_user_role() = 'admin');

-- Careers
DROP POLICY IF EXISTS "careers_select" ON public.careers;
CREATE POLICY "careers_select" ON public.careers
  FOR SELECT USING (active = true OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "careers_insert" ON public.careers;
CREATE POLICY "careers_insert" ON public.careers
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "careers_update" ON public.careers;
CREATE POLICY "careers_update" ON public.careers
  FOR UPDATE USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "careers_delete" ON public.careers;
CREATE POLICY "careers_delete" ON public.careers
  FOR DELETE USING (public.get_user_role() = 'admin');

-- Career Applications (public can submit, admin can view all)
DROP POLICY IF EXISTS "career_applications_select" ON public.career_applications;
CREATE POLICY "career_applications_select" ON public.career_applications
  FOR SELECT USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "career_applications_insert" ON public.career_applications;
CREATE POLICY "career_applications_insert" ON public.career_applications
  FOR INSERT WITH CHECK (true);

-- Contact Submissions (public can submit, admin can view)
DROP POLICY IF EXISTS "contact_submissions_select" ON public.contact_submissions;
CREATE POLICY "contact_submissions_select" ON public.contact_submissions
  FOR SELECT USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "contact_submissions_insert" ON public.contact_submissions;
CREATE POLICY "contact_submissions_insert" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "contact_submissions_update" ON public.contact_submissions;
CREATE POLICY "contact_submissions_update" ON public.contact_submissions
  FOR UPDATE USING (public.get_user_role() = 'admin');

-- Newsletter Subscribers (public can subscribe)
DROP POLICY IF EXISTS "newsletter_select" ON public.newsletter_subscribers;
CREATE POLICY "newsletter_select" ON public.newsletter_subscribers
  FOR SELECT USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "newsletter_insert" ON public.newsletter_subscribers;
CREATE POLICY "newsletter_insert" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Announcements
DROP POLICY IF EXISTS "announcements_select" ON public.announcements;
CREATE POLICY "announcements_select" ON public.announcements
  FOR SELECT USING (
    published = true OR 
    public.get_user_role() IN ('admin', 'teacher')
  );

DROP POLICY IF EXISTS "announcements_insert" ON public.announcements;
CREATE POLICY "announcements_insert" ON public.announcements
  FOR INSERT WITH CHECK (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "announcements_update" ON public.announcements;
CREATE POLICY "announcements_update" ON public.announcements
  FOR UPDATE USING (public.get_user_role() IN ('admin', 'teacher'));

DROP POLICY IF EXISTS "announcements_delete" ON public.announcements;
CREATE POLICY "announcements_delete" ON public.announcements
  FOR DELETE USING (public.get_user_role() = 'admin');

-- Classes (viewable by authenticated users)
DROP POLICY IF EXISTS "classes_select" ON public.classes;
CREATE POLICY "classes_select" ON public.classes
  FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "classes_insert" ON public.classes;
CREATE POLICY "classes_insert" ON public.classes
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "classes_update" ON public.classes;
CREATE POLICY "classes_update" ON public.classes
  FOR UPDATE USING (public.get_user_role() = 'admin');

-- Timetable (viewable by authenticated users)
DROP POLICY IF EXISTS "timetable_select" ON public.timetable;
CREATE POLICY "timetable_select" ON public.timetable
  FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "timetable_insert" ON public.timetable;
CREATE POLICY "timetable_insert" ON public.timetable
  FOR INSERT WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "timetable_update" ON public.timetable;
CREATE POLICY "timetable_update" ON public.timetable
  FOR UPDATE USING (public.get_user_role() = 'admin');
