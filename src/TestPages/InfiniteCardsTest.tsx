import { InfiniteMovingCards } from "../components/ui/Infinite-scroll.tsx"

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "To be, or not to be, that is the question: And the answer is to be in HJB hall day D-block",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream. That dream is HJB hall day 2024",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. Well we can't guarantee a wife, but have a beer in HJB hall day for sure",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  
{
  quote: "Life is what happens when you're busy making other plans. So take a break, grab a joint at HJB hall day D-block",
  name: "John Lennon",
  title: "Beautiful Boy (Darling Boy)"
  },
  
  {
  quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep searching. It might be at some room in HJB in its hall day",
  name: "Steve Jobs",
  title: "Stanford Commencement Speech, 2005"
  },
  
  {
  quote: "In three words I can sum up everything I've learned about life: it goes on. Fuck going on, come to HJB hall day motherfucker",
  name: "Robert Frost",
  title: "The Poetry of Robert Frost"
  },
  
  {
  quote: "The only thing we have to fear is fear itself. So let's face our fears head-on, and maybe share a laugh with friends over some joint at HJB hall-day",
  name: "Franklin D. Roosevelt",
  title: "First Inaugural Address"
  }
];
