import { useParams } from 'react-router-dom'
import NotFoundPage from '@/shared/components/not-found-page'
import { LegalLayout } from './components/legal-layout'
import { PrivacyPolicy, privacyMeta } from './components/privacy-policy'
import { TermsOfService, termsMeta } from './components/terms-of-service'
import { AcceptableUse, acceptableUseMeta } from './components/acceptable-use'
import { Licence, licenceMeta } from './components/licence'

const docMap = {
  privacy: { meta: privacyMeta, component: <PrivacyPolicy /> },
  terms: { meta: termsMeta, component: <TermsOfService /> },
  'acceptable-use': { meta: acceptableUseMeta, component: <AcceptableUse /> },
  licence: { meta: licenceMeta, component: <Licence /> },
} as const

type DocKey = keyof typeof docMap

export default function LegalPage() {
  const { document } = useParams<{ document: string }>()

  const doc = document && document in docMap ? docMap[document as DocKey] : null

  if (!doc) return <NotFoundPage />

  return (
    <LegalLayout
      title={doc.meta.title}
      lastUpdated={doc.meta.lastUpdated}
      sections={doc.meta.sections}
      currentDoc={document!}
    >
      {doc.component}
    </LegalLayout>
  )
}
