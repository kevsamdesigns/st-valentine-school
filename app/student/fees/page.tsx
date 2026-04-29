import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Download, AlertCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Fees",
  description: "View your fee balance and payment history.",
}

const feeStructure = {
  tuition: 35000,
  boarding: 25000,
  books: 8000,
  activities: 5000,
  total: 73000,
}

const payments = [
  { id: 1, date: "Jan 15, 2026", amount: 30000, method: "Bank Transfer", receipt: "RCP-2026-001" },
  { id: 2, date: "Feb 20, 2026", amount: 20000, method: "M-Pesa", receipt: "RCP-2026-002" },
  { id: 3, date: "Mar 10, 2026", amount: 8000, method: "Cash", receipt: "RCP-2026-003" },
]

const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0)
const balance = feeStructure.total - totalPaid

export default function FeesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Fee Statement</h1>
        <p className="text-muted-foreground">
          View your fee structure, payments, and outstanding balance.
        </p>
      </div>

      {/* Balance Overview */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Fees</p>
                <p className="text-2xl font-bold text-foreground">
                  KES {feeStructure.total.toLocaleString()}
                </p>
              </div>
              <div className="rounded-full bg-muted p-3">
                <DollarSign className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="text-2xl font-bold text-primary">
                  KES {totalPaid.toLocaleString()}
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={balance > 0 ? "border-destructive/50" : ""}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className={`text-2xl font-bold ${balance > 0 ? "text-destructive" : "text-primary"}`}>
                  KES {balance.toLocaleString()}
                </p>
              </div>
              <div className={`rounded-full p-3 ${balance > 0 ? "bg-destructive/10" : "bg-primary/10"}`}>
                <AlertCircle className={`h-6 w-6 ${balance > 0 ? "text-destructive" : "text-primary"}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Fee Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Breakdown - Term 1, 2026</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-muted-foreground">Tuition</span>
                <span className="font-medium text-foreground">
                  KES {feeStructure.tuition.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-muted-foreground">Boarding</span>
                <span className="font-medium text-foreground">
                  KES {feeStructure.boarding.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-muted-foreground">Books & Materials</span>
                <span className="font-medium text-foreground">
                  KES {feeStructure.books.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="text-muted-foreground">Activities</span>
                <span className="font-medium text-foreground">
                  KES {feeStructure.activities.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-bold text-foreground">
                  KES {feeStructure.total.toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-medium text-foreground">Bank Transfer</p>
              <p className="text-sm text-muted-foreground">
                Account Name: St. Valentine Girls Senior School<br />
                Bank: Kenya Commercial Bank<br />
                Account No: 1234567890<br />
                Branch: Nairobi
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-medium text-foreground">M-Pesa Paybill</p>
              <p className="text-sm text-muted-foreground">
                Business Number: 123456<br />
                Account Number: Student Admission Number
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payment History</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Statement
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Method
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Receipt No.
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 text-muted-foreground">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">
                      KES {payment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {payment.method}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {payment.receipt}
                    </td>
                    <td className="px-6 py-4">
                      <Badge className="bg-primary">Confirmed</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
