import { redirect } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { 
  GraduationCap, Home, Users, UserCog, 
  Bell, Image, Briefcase, LogOut, User, Settings 
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
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Teachers", href: "/admin/teachers", icon: UserCog },
  { name: "Announcements", href: "/admin/announcements", icon: Bell },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Careers", href: "/admin/careers", icon: Briefcase },
]

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?role=admin")
  }

  const role = user.user_metadata?.role
  if (role && role !== "admin") {
    redirect(`/${role}`)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r bg-background lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Admin Panel</span>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="w-full justify-start"
              >
                <Link href={item.href}>
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="border-t p-4">
            <Button variant="ghost" asChild className="w-full justify-start text-muted-foreground">
              <Link href="/">
                <Settings className="mr-3 h-5 w-5" />
                Back to Website
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background lg:ml-64">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-foreground">Admin</span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-foreground">
              St. Valentine Girls Senior School - Administration
            </h1>
          </div>

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
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background lg:hidden">
        <div className="grid grid-cols-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1 py-2 text-xs text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              <span className="truncate">{item.name.split(" ")[0]}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pb-24 lg:ml-64 lg:pb-8">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
