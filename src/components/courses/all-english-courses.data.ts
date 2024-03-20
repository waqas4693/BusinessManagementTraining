import type { DescriptiveCourse } from '@/interfaces/descriptive-course'

export const data: Array<DescriptiveCourse> = [
  {
    id: 1,
    cover: '/images/courses/course-1.svg',
    title: 'Principles of Customer Service',
    duration: '11 Months',
    description: 'In order to have a truly successful business, you need to provide good customer service. Handling a business’s issues in a professional and courteous manner is an essential day-to-day task.',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Beginner to Advance',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  },
  {
    id: 2,
    cover: '/images/courses/course-2.svg',
    title: 'Principles of Business Administration',
    duration: '11 Months',
    description: 'With an estimated 5.5 million private sector businesses in the UK, it’s imperative to learn the basic principles of business administration. Despite the recent economic difficulties, the trend',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Beginner to Advance',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  },
  {
    id: 3,
    cover: '/images/courses/course-3.svg',
    title: 'Principles of Team Leading',
    duration: '11 Months',
    description: 'Strong team leadership is essential for providing guidance, direction and instruction within a group and inevitably leads to more effective teamwork and more motivated employees',
    lessonsPerWeek: 5,
    hoursPerWeek: 15,
    classTime: 'MON to FRI From 10 AM-1 PM',
    suitableFor: 'Education, Work or Socializing',
    level: 'Certificate',
    registerationFee: '£300 (Non-refundable)',
    price: '£5500'
  }
]