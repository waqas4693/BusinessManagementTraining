import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Grid container spacing={3} sx={{ px: 7 }}>
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative' }}>
            <Image src="/images/home-feature.svg" width={475} height={430} quality={97} alt="Feature 1" />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            component="h2"
            sx={{
              position: 'relative',
              fontSize: { xs: 20, md: 38 },
              ml: { xs: 0, md: 4 },
              mt: 2,
              mb: 3,
              lineHeight: 1,
              fontWeight: 'bold'
            }}
          >
            ARE you an ambitious Entrepreneur, a Seasoned Professional, or an individual with a keen eye for Organizational Success?
          </Typography>

          <Typography sx={{ fontSize: '18px', color: 'text.secondary', mb: 1, ml: { xs: 0, md: 4 } }}>
            Dreaming of mastering the principles of Business Management?
          </Typography>
          <Typography sx={{ fontSize: '18px', color: 'text.secondary', mb: 1, ml: { xs: 0, md: 4 } }}>
            Aspiring to excel in customer service, the cornerstone of every successful enterprise?
          </Typography>
          <Typography sx={{ fontSize: '18px', color: 'text.secondary', mb: 1, ml: { xs: 0, md: 4 } }}>
            Striving to understand the fundamental principles of Business Administration to lead your team with confidence?          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1, ml: { xs: 0, md: 4 } }}>
            Then we’ve got you covered.
          </Typography>

          <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
            {data.map(({ title, description, icon }, index) => (
              <Grid key={String(index)} item xs={12} md={6}>
                <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      mr: 1,
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      height: 36,
                      width: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.contrastText',
                      '& svg': {
                        fontSize: 20,
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                      {title}
                    </Typography>
                    <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomeFeature