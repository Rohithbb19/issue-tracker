import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import SelectStatus from './SelectStatus'

function IssueDetails({issue}:{issue:Issue}) {
  return (
    <>
    <Heading>{issue.title}</Heading>
        <Flex gap="4" align="center" my="2">
          {/* <IssueStatusBadge status={issue.status} /> */}
          <SelectStatus issue={issue}/>
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-full" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
    </>
  )
}

export default IssueDetails