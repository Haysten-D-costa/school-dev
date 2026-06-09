import { redirect } from "next/navigation";

export default function PrincipalRedirect() {
  redirect("/about/leadership");
}
