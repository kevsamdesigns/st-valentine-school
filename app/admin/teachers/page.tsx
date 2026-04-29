"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([])
  const [name, setName] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [department, setDepartment] = useState("")
  const [subject, setSubject] = useState("")

  // FETCH TEACHERS
  const fetchTeachers = async () => {
    const { data } = await supabase.from("teachers").select("*")
    setTeachers(data || [])
  }

  useEffect(() => {
    fetchTeachers()
  }, [])

  // ADD TEACHER
  const addTeacher = async () => {
    await supabase.from("teachers").insert({
      name,
      employee_id: employeeId,
      department,
      subject,
      status: "Active",
    })

    setName("")
    setEmployeeId("")
    setDepartment("")
    setSubject("")
    fetchTeachers()
  }

  // DELETE TEACHER
  const deleteTeacher = async (id: number) => {
    await supabase.from("teachers").delete().eq("id", id)
    fetchTeachers()
  }

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Manage Teachers</h1>

      {/* ADD FORM */}
      <div className="grid gap-2">
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-2"/>
        <input placeholder="Employee ID" value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)} className="border p-2"/>
        <input placeholder="Department" value={department} onChange={(e)=>setDepartment(e.target.value)} className="border p-2"/>
        <input placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} className="border p-2"/>

        <button onClick={addTeacher} className="bg-blue-600 text-white p-2 rounded">
          Add Teacher
        </button>
      </div>

      {/* LIST */}
      <div className="border p-4 rounded">
        {teachers.map((t: any) => (
          <div key={t.id} className="flex justify-between border-b py-2">
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm">{t.department} - {t.subject}</p>
            </div>

            <button
              onClick={() => deleteTeacher(t.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}