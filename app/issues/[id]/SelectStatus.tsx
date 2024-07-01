'use client'
import { IssueStatusBadge } from '@/app/components'
import { Issue, Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

function SelectStatus({ issue }: { issue: Issue }) {

    const status =Object.values(Status)

    const assignStatus = (state:string) => {
            axios
            .patch("/api/issues/" + issue.id, {
                status:state
            }).catch (()=>{
            toast.error("Changes could not be saved.", {
                duration: 2000,
              });
            });

    }

  return (
      <Select.Root
      defaultValue={issue.status}
      onValueChange={assignStatus}
      >
        <Select.Trigger variant="ghost" color='gray'/>
        <Select.Content variant='soft' color='gray'>
            <Select.Group>
                    {status.map((state)=>(
                <Select.Item key={state} value={state}>
                <IssueStatusBadge status={state} />
                </Select.Item>
                    ))}
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default SelectStatus