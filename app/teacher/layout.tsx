import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { 
  GraduationCap, Home, Users, FileText, 
  ClipboardCheck, LogOut, User, Bell 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Dashboard", href: "/teacher", icon: Home },
  { name: "Students", href: "/teacher/students", icon: Users },
  { name: "Results", href: "/teacher/results", icon: FileText },
  { name: "Attendance", href: "/teacher/attendance", icon: ClipboardCheck },
]

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?role=teacher")
  }

  const role = user.user_metadata?.role
  if (role && role !== "teacher") {
    redirect(`/${role}`)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/teacher" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <GraduationCap className="h-5 w-5 text-secondary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Teacher Portal</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href} className="gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action="/auth/signout" method="post">
                    <button type="submit" className="flex w-full items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
        <div className="grid grid-cols-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1 py-3 text-xs text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-24 md:pb-8">
        {children}
      </main>
    </div>
  )
}
