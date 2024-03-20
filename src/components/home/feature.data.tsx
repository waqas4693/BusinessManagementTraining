import React, { ReactNode } from 'react'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Principles of Customer Service',
    description: 'Master customer service excellence with our Principles of Customer Service course',
    icon: < LocalLibraryIcon />,
  },
  {
    title: 'Principles of Business Administration',
    description: 'Lead with confidence using our Principles of Business Administration course',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Principles of Team Leading',
    description: 'Foster teamwork for success with our Principles of Team Building course',
    icon: <LocalLibraryIcon />,
  },
]