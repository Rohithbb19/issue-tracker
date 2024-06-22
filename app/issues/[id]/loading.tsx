import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Heading, Flex, Card, Box } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingIssueDetailPage() {
  return (
    <Box className=' max-w-xl'>
        <Skeleton/>
        <Flex gap="4" align="center" my="2">
        <Skeleton width="5rem"/>
        <Skeleton width="8rem"/>
        </Flex>
        <Card className="prose" mt="4">
        <Skeleton count={3}/>
        </Card>
        </Box>
  )
}

export default LoadingIssueDetailPage