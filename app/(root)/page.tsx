import CardImgXL from "@/components/Cards/CardImgXL";
import CardXS from "@/components/Cards/CardXS";
import {breakingNews} from '@/contants/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardList from "@/components/Cards/CardList";
import CardImg from "@/components/Cards/CardImg";
import CardSM from "@/components/Cards/CardSM";

export default function Home() {
  return (
    <div className="bg-primary-400 py-20">
    <div className="container flex justify-between gap-1">
        <div className="">
      <CardSM />
        <CardImg />
        </div>
      <div className="w-[570px]">
    <Carousel  orientation="horizontal">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
              <CardImgXL />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary-300" />
      <CarouselNext className="text-primary-300" />
    </Carousel>
        </div>
    <CardList />
    </div>
        </div>
  );
}
