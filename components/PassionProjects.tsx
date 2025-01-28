import { useState, useEffect, useMemo } from "react";
import { Music, Camera, Heart, Mountain } from "lucide-react";
import Image from "next/image";

const PassionProjects = () => {
  // Define the sections with images and other details
  const sections = useMemo(() => [
    {
      id: "music",
      title: "Music Enthusiast",
      icon: Music,
      description:
        "I have a passion for music and enjoy playing the guitar and singing. I have performed at various events and have been part of the Western Band.",
      images: [
        "/music/1.jpeg",
        "/music/2.jpeg",
        "/music/3.jpeg",
        "/music/4.jpeg",
        "/music/5.jpeg",
        "/music/6.jpeg",
      ],
    },
    {
      id: "photography",
      title: "Captured Moments",
      icon: Camera,
      description:
        "A hobby that turns into an art form. I enjoy capturing candid moments that tell a story and celebrate life’s beauty.",
      images: ["/camera/1.jpeg", "/camera/2.jpeg", "/camera/3.jpeg"],
    },
    {
      id: "competition",
      title: "Competitions",
      icon: Heart,
      description:
        "I have participated in various CTF and competitions, showcasing my skills in coding, problem-solving, and teamwork.",
      images: [
        "/competitions/1.jpeg",
        "/competitions/2.png",
        "/competitions/3.png",
        "/competitions/4.jpeg",
      ],
    },
    {
      id: "mountains",
      title: "Wanderlust",
      icon: Mountain,
      description:
        "I love exploring new places and adventures. I have hiked mountains, camped under the stars, and embraced the beauty of nature.",
      images: [
        "/mountains/1.jpeg",
        "/mountains/2.jpeg",
        "/mountains/3.jpeg",
        "/mountains/4.jpeg",
        "/mountains/5.jpeg",
        "/mountains/6.jpeg",
      ],
    },
  ], []);

  // Set the initial state for image index (starting with 0 for all sections)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({
    music: 0,
    photography: 0,
    competition: 0,
    mountains: 0,
  });

  // Auto-slide logic for each section when hovered
  const [isHovered, setIsHovered] = useState<{ [key: string]: boolean }>({
    music: false,
    photography: false,
    competition: false,
    mountains: false,
  });

  // Function to go to the next image in the section
  const handleNextImage = (id: string, length: number) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [id]: (prevState[id] + 1) % length, // Wrap around to first image
    }));
  };

  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    // Set an interval to change image automatically every 2 seconds on hover
    sections.forEach((section) => {
      if (isHovered[section.id]) {
        intervals[section.id] = setInterval(() => {
          handleNextImage(section.id, section.images.length);
        }, 2000); // Change every 2 seconds
      } else {
        clearInterval(intervals[section.id]); // Clear interval when not hovered
      }
    });

    return () => {
      // Cleanup intervals when the component unmounts or hover changes
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isHovered, sections]); // Trigger when hover state changes

  return (
    <section id="passion-projects" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><br/>
        <h2 className="text-3xl font-bold text-center mb-8">Beyond the Screen: My Creative Endeavors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Render each section */}
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-card p-6 rounded-lg shadow-lg group hover:scale-105 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsHovered((prev) => ({ ...prev, [section.id]: true }))}
              onMouseLeave={() => setIsHovered((prev) => ({ ...prev, [section.id]: false }))}
            >
              <div className="flex items-center justify-between">
                <section.icon className="h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">{section.title}</p>
              </div>
              <h3 className="text-xl font-semibold mt-4">{section.title}</h3>
              <p className="text-muted-foreground mt-2">{section.description}</p>

              {/* Image slider with smooth transition */}
              <div className="mt-4 relative overflow-hidden rounded-xl">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={section.images[currentImageIndex[section.id]]}
                    alt={`${section.title} Image ${currentImageIndex[section.id] + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover rounded-xl transition-opacity duration-1000 ease-in-out opacity-100" // Fade-out/fade-in transition
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionProjects;
