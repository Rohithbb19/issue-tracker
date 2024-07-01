import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import IssuesAction from "./IssuesAction";
import Pagination from "@/app/components/Pagination";
import IssueTable, { columnName, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: IssueQuery;
}

async function IssuesPage({ searchParams }: Props) {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy =
    columnName.includes(searchParams.orderBy)
      ? { [searchParams.orderBy]: "asc" }
      : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalIssue = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <IssuesAction />
      <IssueTable searchParams={searchParams} issues={issues} />
        <Pagination
          pageSize={pageSize}
          currentPage={page}
          itemCount={totalIssue}
        />
    </Flex>
  );
}

export const dynamic = "force-dynamic";

export default IssuesPage;
