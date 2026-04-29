"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { GraduationCap, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || "student"
  
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast.error("Login failed", {
        description: error.message,
      })
      setIsLoading(false)
      return
    }

    // Get user role and redirect accordingly
    const { data: { user } } = await supabase.auth.getUser()
    const role = user?.user_metadata?.role || "student"

    toast.success("Welcome back!", {
      description: "You have been logged in successfully.",
    })

    // Redirect based on role
    switch (role) {
      case "admin":
        router.push("/admin")
        break
      case "teacher":
        router.push("/teacher")
        break
      default:
        router.push("/student")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <GraduationCap className="h-7 w-7 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground">St. Valentine</span>
          <span className="text-sm text-muted-foreground">Girls Senior School</span>
        </div>
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to access your portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={defaultRole} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="teacher">Teacher</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            {["student", "teacher", "admin"].map((role) => (
              <TabsContent key={role} value={role}>
                <form onSubmit={handleLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-email`}>Email</Label>
                    <Input
                      id={`${role}-email`}
                      name="email"
                      type="email"
                      placeholder={`${role}@stvalentine.ac.ke`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-password`}>Password</Label>
                    <div className="relative">
                      <Input
                        id={`${role}-password`}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              New student?{" "}
              <Link href="/admissions" className="text-primary hover:underline">
                Apply for admission
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Back to Home
        </Link>
      </p>
    </div>
  )
}
