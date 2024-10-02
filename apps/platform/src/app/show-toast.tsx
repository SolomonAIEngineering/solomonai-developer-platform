'use client'

import { Button } from '@v1/ui/button'
import { useToast } from '@v1/ui/use-toast'

export const ShowToast = () => {
  const { toast } = useToast()

  return (
    <Button
      variant='outline'
      onClick={() => {
        toast({
          title: 'Hello, World!',
          description: 'This is a toast message.',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
