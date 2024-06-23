import dynamic from "next/dynamic"
import IssueFormSkeleton from "./loading"


// lazy loading SimpleMDE OR Disabled SSR
const IssueForm = dynamic (
  ()=> import("@/app/issues/_components/IssueForm"),
  {ssr:false,
    loading: ()=><IssueFormSkeleton/>
  }
)

function NewIssuePage() {

  
  return (
    <IssueForm/>
  )
}

export default NewIssuePage