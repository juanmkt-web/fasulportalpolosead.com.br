import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  type: "GRADUAÇÃO";
  modality: "EAD" | "SEMIPRESENCIAL";
  hours: string;
  semesters: string;
  promoPrice: string;
  regularPrice: string;
  badge?: string;
  highlight?: string;
  isLaunchingSoon?: boolean;
  image: string;
  url: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3">
          {course.isLaunchingSoon ? (
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
              LANÇAMENTO EM BREVE
            </span>
          ) : course.badge ? (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {course.badge}
            </span>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {course.highlight && (
          <span className="text-accent text-xs font-semibold mb-1">
            {course.highlight}
          </span>
        )}
        <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">
          {course.title}
        </h3>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
          <span className="bg-secondary/50 px-2 py-1 rounded">{course.type}</span>
          <span className="bg-secondary/50 px-2 py-1 rounded">{course.modality}</span>
          <span className="bg-secondary/50 px-2 py-1 rounded">{course.hours}</span>
          <span className="bg-secondary/50 px-2 py-1 rounded">{course.semesters}</span>
        </div>

        {/* Pricing */}
        <div className="mb-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-accent">
              {course.promoPrice}<span className="text-sm">/Mês</span>
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {course.regularPrice}/Mês
            </span>
          </div>
          <span className="text-xs text-green-600 font-medium">
            ATÉ O FINAL DO CURSO
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open(course.url, "_blank")}
          >
            SAIBA MAIS
          </Button>
          <Button
            className="flex-1 bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.open(course.url, "_blank")}
          >
            INSCREVA-SE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
export type { Course };
