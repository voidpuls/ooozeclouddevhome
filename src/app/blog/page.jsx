import { settings } from "../../../config/settings";
import BlogList from "../../components/BlogList";

export const metadata = {
  title: "Blog | " + settings.company_name,
  description: 'Read our latest blog posts and stay updated with the latest news and tips.',
  openGraph: {
    title: "Blog | " + settings.company_name,
    description: 'Read our latest blog posts and stay updated with the latest news and tips.',
  }
}

export default function Page() {
  return <BlogList />
}