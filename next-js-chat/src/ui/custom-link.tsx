import Link from "next/link";

type CustomLinkProps = {
  href: string;
  name: string;
  isHidden: boolean;
};

export default function CustomLink({ href, name, isHidden }: CustomLinkProps) {
  return (
    <Link
      className="pl-6 hover:bg-slate-300 w-full py-1"
      href={href}
      hidden={isHidden}
    >
      {name}
    </Link>
  );
}
