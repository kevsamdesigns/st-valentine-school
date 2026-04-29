"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function SettingsPage() {
  const [schoolName, setSchoolName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [logo, setLogo] = useState<File | null>(null)

  const handleSave = async () => {
    let logoUrl = ""

    // Upload logo if selected
    if (logo) {
      const { data, error } = await supabase.storage
        .from("logos")
        .upload(`logo-${Date.now()}`, logo)

      if (error) {
        alert("Upload failed")
        return
      }

      logoUrl = data.path
    }

    // Save to database
    const { error } = await supabase.from("settings").upsert({
      id: 1,
      school_name: schoolName,
      email,
      phone,
      logo_url: logoUrl,
    })

    if (error) {
      alert("Error saving")
    } else {
      alert("Saved successfully!")
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Website Settings</h1>

      {/* School Name */}
      <input
        type="text"
        placeholder="School Name"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        className="border p-2 w-full"
      />

      {/* Email */}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      {/* Phone */}
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full"
      />

      {/* File Upload */}
      <input
        type="file"
        onChange={(e) => setLogo(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  )
}