import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {}

const AddProductUI = (props: Props) => {
  return (
    <div className="grid w-[400px] max-w-sm items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}

export default AddProductUI