"use client"

import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  UserCog,
  GraduationCap,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Settings,
  Image,
  Megaphone
} from "lucide-react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const stats = [
  { title: "Total Students", value: "1,245", change: "+12%", trend: "up", icon: Users },
  { title: "Total Teachers", value: "52", change: "+2", trend: "up", icon: UserCog },
  { title: "Total Classes", value: "16", change: "0%", trend: "neutral", icon: GraduationCap },
  { title: "Fee Collection", value: "KES 45.2M", change: "+8%", trend: "up", icon: DollarSign },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)

    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error("Logout error:", error)
    }

    // 🔥 HARD REDIRECT (fixes 400 + session issues)
    window.location.href = "/login"
  }

  return (
    <div className="space-y-8 p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage school website, data, and content.
          </p>
        </div>

        <button
          onClick={handleLogout}
          disabled={loading}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <Link href="/admin/settings">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="p-6 flex items-center gap-4">
              <Settings className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-semibold">Website Settings</p>
                <p className="text-sm text-muted-foreground">Logo, contacts</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/gallery">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="p-6 flex items-center gap-4">
              <Image className="w-6 h-6 text-purple-500" />
              <div>
                <p className="font-semibold">Manage Gallery</p>
                <p className="text-sm text-muted-foreground">Upload images</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/announcements">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="p-6 flex items-center gap-4">
              <Megaphone className="w-6 h-6 text-green-500" />
              <div>
                <p className="font-semibold">Announcements</p>
                <p className="text-sm text-muted-foreground">News & updates</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/students">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="p-6 flex items-center gap-4">
              <Users className="w-6 h-6 text-orange-500" />
              <div>
                <p className="font-semibold">Manage Students</p>
                <p className="text-sm text-muted-foreground">Records & data</p>
              </div>
            </CardContent>
          </Card>
        </Link>

      </div>

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6 flex justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>

                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : stat.trend === "down" ? (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  ) : null}

                  <span className="text-sm">{stat.change}</span>
                </div>
              </div>

              <stat.icon className="h-6 w-6 text-blue-500" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SYSTEM STATUS */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Admin panel is active. You can now manage:
          </p>

          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            <li>Website content (logo, contacts)</li>
            <li>Students and teachers</li>
            <li>Gallery and images</li>
            <li>Announcements</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  )
}