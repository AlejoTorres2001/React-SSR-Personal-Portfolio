import { NextRequest, NextResponse } from 'next/server'
import cvData from '../../../data/cv.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') === 'es' ? 'es' : 'en'
  const section = searchParams.get('section')

  const validSections = ['work', 'education', 'skills', 'interests'] as const
  type Section = (typeof validSections)[number]

  if (section && !validSections.includes(section as Section)) {
    return NextResponse.json({ error: 'Invalid section' }, { status: 400 })
  }

  if (section) {
    const key = section as Section
    const value =
      key === 'skills'
        ? cvData.skills
        : (cvData[key] as Record<string, unknown>)[locale]

    return NextResponse.json({ data: value })
  }

  return NextResponse.json({
    data: {
      work: cvData.work[locale],
      education: cvData.education[locale],
      skills: cvData.skills,
      interests: cvData.interests[locale]
    }
  })
}
