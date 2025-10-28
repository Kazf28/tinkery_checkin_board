import { Link } from "wouter";

interface ActivityBoxProps {
  title: string;
  slug: string;
  imagePath: string;
}

export default function ActivityBox({ title, slug, imagePath }: ActivityBoxProps) {
  return (
    <Link href={`/activity/${slug}`}>
      <button
        data-testid={`button-activity-${slug}`}
        className="group relative w-full aspect-square min-h-[180px] md:min-h-[220px] transition-all duration-200 hover:scale-105 hover:shadow-2xl"
      >
        <img 
          src={imagePath} 
          alt={title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105"
        />
      </button>
    </Link>
  );
}
