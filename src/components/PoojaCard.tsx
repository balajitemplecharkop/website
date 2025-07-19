import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PoojaItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  deity: string;
  duration: string;
  benefits: string[];
}

interface PoojaCardProps {
  pooja: PoojaItem;
}

export default function PoojaCard({ pooja }: PoojaCardProps) {
  // Remove duration from description if present at the end
  let cleanDescription = pooja.description;
  if (
    pooja.duration &&
    cleanDescription.trim().endsWith(pooja.duration)
  ) {
    cleanDescription = cleanDescription.replace(new RegExp(`\\s*${pooja.duration}$`), "").trim();
  }
  // Format duration: always uppercase, monospace, fixed width
  const durationText = pooja.duration ? pooja.duration.toUpperCase() : "";
  return (
    <Card className="bg-white shadow-spiritual hover:shadow-spiritual-hover transition-spiritual overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={pooja.image}
          alt={`${pooja.name} ritual setup`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-spiritual"
        />
        <div className="absolute top-3 right-3 bg-deep-saffron text-white px-3 py-1 rounded-full text-sm font-semibold">
          ₹{pooja.price.toLocaleString()}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-deep-brown leading-tight mb-1 break-words line-clamp-2">{pooja.name}</h3>
          {durationText && (
            <span className="inline-block text-[13px] bg-light-saffron px-3 py-1 rounded-full text-deep-brown font-medium tracking-wide mb-2 mt-0 align-middle">
              {durationText}
            </span>
          )}
          <p className="text-deep-brown/70 text-sm leading-relaxed mt-2">
            {cleanDescription}
          </p>
          <div className="flex items-center text-xs text-peacock-green mt-2">
            <i className="fas fa-om mr-1"></i>
            <span>{pooja.deity}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/seva/${pooja.id}`} className="w-full">
          <Button className="w-full bg-peacock-green hover:bg-peacock-green/90 text-white transition-spiritual">
            <i className="fas fa-pray mr-2"></i>
            Book Seva
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
