import { settings } from "../../../config/settings";
import KnowledgebaseList from "../../components/KnowledgebaseList";

export const metadata = {
  title: "Knowledge Base | " + settings.company_name,
  description: 'Find answers to common questions and learn how to use our services effectively.',
  openGraph: {
    title: "Knowledge Base | " + settings.company_name,
    description: 'Find answers to common questions and learn how to use our services effectively.',
  }
}

export default function Page() {
  return <KnowledgebaseList />
}