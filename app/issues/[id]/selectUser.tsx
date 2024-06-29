'use client';
import { Select } from '@radix-ui/themes'
import React from 'react'

function SelectUser() {
  return (
    <Select.Root>
        <Select.Trigger placeholder='Assign...'/>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="1">Rohith</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default SelectUser